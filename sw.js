// EUROTAP QUANTUM SERVICE WORKER - ULTRA PERFORMANCE
const CACHE_VERSION = 'eurotap-quantum-v1.0.0';
const STATIC_CACHE = 'eurotap-static-v1';
const DYNAMIC_CACHE = 'eurotap-dynamic-v1';
const QUANTUM_CACHE = 'eurotap-quantum-v1';

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/core/engine/quantum.css',
    '/core/engine/neural.js',
    '/core/neural/intelligence.css',
    '/systems/ui/hyperspace.css',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
];

// Advanced caching strategies
const CACHE_STRATEGIES = {
    'quantum-first': async (request) => {
        try {
            const networkResponse = await fetch(request);
            if (networkResponse.ok) {
                const cache = await caches.open(QUANTUM_CACHE);
                cache.put(request, networkResponse.clone());
            }
            return networkResponse;
        } catch {
            return caches.match(request);
        }
    },
    'cache-first': async (request) => {
        const cached = await caches.match(request);
        return cached || fetch(request);
    },
    'network-only': async (request) => {
        return fetch(request);
    }
};

// Install event - Quantum initialization
self.addEventListener('install', event => {
    console.log('🔮 Quantum Service Worker installing...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('📦 Caching quantum assets...');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('✅ Quantum assets cached successfully');
                return self.skipWaiting();
            })
    );
});

// Activate event - Quantum optimization
self.addEventListener('activate', event => {
    console.log('⚡ Quantum Service Worker activating...');
    
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (![STATIC_CACHE, DYNAMIC_CACHE, QUANTUM_CACHE].includes(cacheName)) {
                            console.log('🗑️ Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('🚀 Quantum Service Worker activated');
                return self.clients.claim();
            })
    );
});

// Fetch event - Quantum network intelligence
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') return;
    
    // Skip external requests
    if (url.origin !== location.origin) {
        // But cache Google Fonts
        if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
            event.respondWith(CACHE_STRATEGIES['cache-first'](request));
        }
        return;
    }
    
    // Route-based caching strategy
    if (url.pathname === '/' || url.pathname === '/index.html') {
        event.respondWith(CACHE_STRATEGIES['quantum-first'](request));
    } else if (url.pathname.startsWith('/core/') || url.pathname.startsWith('/systems/')) {
        event.respondWith(CACHE_STRATEGIES['cache-first'](request));
    } else {
        event.respondWith(CACHE_STRATEGIES['quantum-first'](request));
    }
});

// Background sync - Analytics
self.addEventListener('sync', event => {
    if (event.tag === 'quantum-analytics') {
        event.waitUntil(syncQuantumAnalytics());
    }
});

// Push notifications - Investment alerts
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'EuroTAP quantum systems update available',
        icon: '/assets/icon-192x192.png',
        badge: '/assets/badge-72x72.png',
        tag: 'eurotap-quantum',
        requireInteraction: true,
        actions: [
            {
                action: 'invest',
                title: '💎 Investment Opportunity',
                icon: '/assets/invest-icon.png'
            },
            {
                action: 'demo',
                title: '🚀 Live Demo',
                icon: '/assets/demo-icon.png'
            }
        ],
        data: {
            url: '/',
            timestamp: Date.now()
        }
    };
    
    event.waitUntil(
        self.registration.showNotification('🔮 EuroTAP Quantum Alert', options)
    );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    if (event.action === 'invest') {
        event.waitUntil(
            clients.openWindow('mailto:tapeuro78@gmail.com?subject=EuroTAP Investment Interest')
        );
    } else if (event.action === 'demo') {
        event.waitUntil(
            clients.openWindow('/#quantum-demos')
        );
    } else {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Message handling - Quantum communication
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_VERSION });
    }
});

// Helper functions
async function syncQuantumAnalytics() {
    try {
        const analyticsData = await getStoredAnalytics();
        if (analyticsData.length > 0) {
            // In production, send to analytics endpoint
            console.log('📊 Syncing quantum analytics:', analyticsData);
            await clearStoredAnalytics();
        }
    } catch (error) {
        console.error('Analytics sync failed:', error);
    }
}

async function getStoredAnalytics() {
    // Get analytics from IndexedDB or localStorage
    return [];
}

async function clearStoredAnalytics() {
    // Clear stored analytics
}

// Performance monitoring
self.addEventListener('install', event => {
    const start = performance.now();
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => cache.addAll(STATIC_ASSETS))
            .then(() => {
                const duration = performance.now() - start;
                console.log(`⚡ Cache populated in ${duration.toFixed(2)}ms`);
            })
    );
});

console.log('🔮 EuroTAP Quantum Service Worker loaded successfully');

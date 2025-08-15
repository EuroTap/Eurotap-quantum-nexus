// EUROTAP NEURAL INTELLIGENCE ENGINE - NÍVEL INFINITO
// Copyright 2025 EuroTAP Technologies - Ultra-Advanced JavaScript

class QuantumIntelligence {
    constructor() {
        this.isInitialized = false;
        this.neuralNetworks = new Map();
        this.quantumStates = new Set();
        this.performanceMetrics = {
            loadTime: 0,
            interactionCount: 0,
            scrollDepth: 0,
            engagementScore: 0
        };
        
        this.init();
    }

    async init() {
        try {
            await this.initializeQuantumSystems();
            await this.startNeuralNetworks();
            await this.activateConsciousness();
            
            this.setupEventListeners();
            this.startAnalytics();
            this.optimizePerformance();
            
            this.isInitialized = true;
            console.log('%c🔮 QUANTUM SYSTEMS ONLINE', 'color: #0066ff; font-size: 16px; font-weight: bold;');
        } catch (error) {
            console.error('Quantum initialization failed:', error);
        }
    }

    async initializeQuantumSystems() {
        // Quantum Loader Management
        const loader = document.getElementById('quantum-loader');
        
        // Simulate quantum initialization
        await this.delay(2000);
        
        if (loader) {
            loader.classList.add('loaded');
            setTimeout(() => loader.remove(), 1000);
        }
        
        // Initialize quantum states
        this.quantumStates.add('READY');
        this.quantumStates.add('SECURE');
        this.quantumStates.add('OPTIMIZED');
    }

    async startNeuralNetworks() {
        // Neural Background Canvas
        const canvas = document.getElementById('neural-canvas');
        if (canvas) {
            this.initializeNeuralCanvas(canvas);
        }
        
        // Neural Navigation
        this.initializeQuantumNavigation();
        
        // Neural Scroll System
        this.initializeNeuralScrolling();
    }

    initializeNeuralCanvas(canvas) {
        const ctx = canvas.getContext('2d');
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Neural network nodes
        const nodes = [];
        const nodeCount = Math.min(50, Math.floor(window.innerWidth / 30));
        
        // Create nodes
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                alpha: Math.random() * 0.5 + 0.3
            });
        }
        
        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw nodes
            nodes.forEach((node, i) => {
                // Update position
                node.x += node.vx;
                node.y += node.vy;
                
                // Boundary check
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
                
                // Draw node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 102, 255, ${node.alpha})`;
                ctx.fill();
                
                // Draw connections
                nodes.slice(i + 1).forEach(otherNode => {
                    const distance = Math.sqrt(
                        Math.pow(node.x - otherNode.x, 2) + 
                        Math.pow(node.y - otherNode.y, 2)
                    );
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(otherNode.x, otherNode.y);
                        ctx.strokeStyle = `rgba(0, 102, 255, ${0.2 * (1 - distance / 100)})`;
                        ctx.stroke();
                    }
                });
            });
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }

    initializeQuantumNavigation() {
        const nav = document.getElementById('hyperNav');
        const navLinks = document.querySelectorAll('.nav-quantum-link');
        
        // Scroll-based navigation behavior
        let lastScrollY = window.scrollY;
        let ticking = false;
        
        const updateNavigation = () => {
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            // Hide/show navigation
            if (scrollY > lastScrollY && scrollY > 200) {
                nav.classList.add('hidden');
            } else {
                nav.classList.remove('hidden');
            }
            
            lastScrollY = scrollY;
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateNavigation);
                ticking = true;
            }
        });
        
        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
                
                // Analytics
                this.trackEvent('navigation_click', {
                    section: link.dataset.section || href,
                    timestamp: Date.now()
                });
            });
        });
    }

    initializeNeuralScrolling() {
        // Parallax and scroll-triggered animations
        const observerOptions = {
            threshold: [0, 0.25, 0.5, 0.75, 1],
            rootMargin: '-10% 0px -10% 0px'
        };
        
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const element = entry.target;
                const ratio = entry.intersectionRatio;
                
                if (ratio > 0) {
                    element.style.opacity = ratio;
                    element.style.transform = `translateY(${(1 - ratio) * 50}px)`;
                    
                    if (ratio > 0.5 && !element.classList.contains('quantum-animated')) {
                        element.classList.add('quantum-animated');
                        this.triggerQuantumAnimation(element);
                    }
                }
            });
        }, observerOptions);
        
        // Observe sections
        document.querySelectorAll('section, .quantum-card, .metric-item').forEach(el => {
            scrollObserver.observe(el);
        });
    }

    triggerQuantumAnimation(element) {
        // Type-specific animations
        if (element.classList.contains('metric-value')) {
            this.animateCounter(element);
        }
        
        if (element.classList.contains('typed-text')) {
            this.animateTyping(element);
        }
        
        // Add quantum glow effect
        element.style.filter = 'drop-shadow(0 0 20px rgba(0, 102, 255, 0.5))';
        setTimeout(() => {
            element.style.filter = '';
        }, 2000);
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.target) || 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    animateTyping(element) {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, 100);
    }

    async activateConsciousness() {
        // Advanced user behavior analysis
        this.setupBehavioralTracking();
        this.initializePersonalization();
        this.activateIntelligentFeatures();
    }

    setupBehavioralTracking() {
        // Mouse movement heatmap
        let mouseTrail = [];
        document.addEventListener('mousemove', (e) => {
            mouseTrail.push({
                x: e.clientX,
                y: e.clientY,
                timestamp: Date.now()
            });
            
            // Keep only last 50 points
            if (mouseTrail.length > 50) {
                mouseTrail.shift();
            }
        });
        
        // Scroll depth tracking
        let maxScrollDepth = 0;
        window.addEventListener('scroll', () => {
            const scrollDepth = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
            maxScrollDepth = Math.max(maxScrollDepth, scrollDepth);
            this.performanceMetrics.scrollDepth = maxScrollDepth;
        });
        
        // Click tracking
        document.addEventListener('click', (e) => {
            this.performanceMetrics.interactionCount++;
            
            if (e.target.closest('a[href*="mailto"]')) {
                this.trackEvent('investment_interest', {
                    element: e.target.textContent,
                    timestamp: Date.now(),
                    scrollDepth: maxScrollDepth
                });
            }
        });
    }

    initializePersonalization() {
        // Detect user preferences
        const preferences = {
            reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
            highContrast: window.matchMedia('(prefers-contrast: high)').matches,
            darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
            language: navigator.language.slice(0, 2)
        };
        
        // Apply personalizations
        if (preferences.reducedMotion) {
            document.body.classList.add('reduced-motion');
        }
        
        if (preferences.highContrast) {
            document.body.classList.add('high-contrast');
        }
        
        // Store preferences
        localStorage.setItem('quantum-preferences', JSON.stringify(preferences));
    }

    activateIntelligentFeatures() {
        // Intelligent email composition
        document.querySelectorAll('a[href*="mailto"]').forEach(link => {
            link.addEventListener('click', () => {
                const currentTime = new Date().toLocaleString();
                const userAgent = navigator.userAgent;
                const screenRes = `${screen.width}x${screen.height}`;
                
                // Enhanced email body
                const emailBody = `Hello EuroTAP Team,

I am extremely interested in your revolutionary quantum-safe payment terminal investment opportunity.

INVESTMENT DETAILS REQUESTED:
- Complete investor pitch deck
- Live product demonstration access
- Financial projections and business model
- Technical documentation (ML-DSA-65 implementation)
- Investment terms and timeline
- Legal documentation for due diligence

INVESTOR PROFILE:
- Contact Time: ${currentTime}
- Serious investor ready to move quickly
- Looking for quantum-safe fintech opportunities
- Interested in €15M valuation discussion

NEXT STEPS:
Please contact me within 24 hours to schedule a comprehensive presentation.
I am prepared to proceed with investment discussions immediately.

Best regards,
[Investor Name]

---
Contact initiated from: https://eutotap.github.io/eurotap-hypertech
Technical details: ${screenRes} | ${userAgent.split(')')[0]})`;

                // Update href with enhanced body
                const subject = 'EuroTAP €15M Investment Opportunity - IMMEDIATE INTEREST';
                link.href = `mailto:tapeuro78@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
            });
        });
        
        // Intelligent loading optimization
        this.optimizeResourceLoading();
    }

    optimizeResourceLoading() {
        // Lazy load images
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
        
        // Preload critical resources
        this.preloadCriticalResources();
    }

    preloadCriticalResources() {
        const criticalResources = [
            'core/neural/intelligence.css',
            'systems/ui/hyperspace.css'
        ];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = resource;
            document.head.appendChild(link);
        });
    }

    setupEventListeners() {
        // Advanced keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key === 'i') {
                e.preventDefault();
                window.location.href = 'mailto:tapeuro78@gmail.com?subject=EuroTAP Investment Inquiry';
            }
            
            if (e.altKey && e.key === 'd') {
                e.preventDefault();
                document.querySelector('#quantum-demos')?.scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        // Advanced touch gestures
        let touchStartY = 0;
        let touchStartX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
            touchStartX = e.touches[0].clientX;
        });
        
        document.addEventListener('touchend', (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const touchEndX = e.changedTouches[0].clientX;
            const deltaY = touchStartY - touchEndY;
            const deltaX = touchStartX - touchEndX;
            
            // Swipe gestures
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    // Swipe left - next section
                    this.navigateToNextSection();
                } else {
                    // Swipe right - previous section
                    this.navigateToPreviousSection();
                }
            }
        });
    }

    navigateToNextSection() {
        const sections = ['quantum-home', 'quantum-technology', 'quantum-demos', 'quantum-investment', 'quantum-contact'];
        const currentSection = this.getCurrentSection();
        const currentIndex = sections.indexOf(currentSection);
        
        if (currentIndex < sections.length - 1) {
            document.getElementById(sections[currentIndex + 1])?.scrollIntoView({ behavior: 'smooth' });
        }
    }

    navigateToPreviousSection() {
        const sections = ['quantum-home', 'quantum-technology', 'quantum-demos', 'quantum-investment', 'quantum-contact'];
        const currentSection = this.getCurrentSection();
        const currentIndex = sections.indexOf(currentSection);
        
        if (currentIndex > 0) {
            document.getElementById(sections[currentIndex - 1])?.scrollIntoView({ behavior: 'smooth' });
        }
    }

    getCurrentSection() {
        const sections = document.querySelectorAll('section[id^="quantum-"]');
        let currentSection = 'quantum-home';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section.id;
            }
        });
        
        return currentSection;
    }

    startAnalytics() {
        // Privacy-focused analytics
        const startTime = Date.now();
        
        window.addEventListener('beforeunload', () => {
            this.performanceMetrics.loadTime = Date.now() - startTime;
            
            // Send analytics data
            this.sendAnalytics();
        });
        
        // Page visibility tracking
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.trackEvent('page_hidden', { timestamp: Date.now() });
            } else {
                this.trackEvent('page_visible', { timestamp: Date.now() });
            }
        });
    }

    trackEvent(eventName, data) {
        // Privacy-focused event tracking
        const event = {
            name: eventName,
            data: data,
            timestamp: Date.now(),
            session: this.getSessionId()
        };
        
        // Store in sessionStorage for privacy
        const events = JSON.parse(sessionStorage.getItem('quantum-events') || '[]');
        events.push(event);
        sessionStorage.setItem('quantum-events', JSON.stringify(events));
        
        console.log('📊 Event tracked:', eventName, data);
    }

    getSessionId() {
        let sessionId = sessionStorage.getItem('quantum-session');
        if (!sessionId) {
            sessionId = 'qs_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
            sessionStorage.setItem('quantum-session', sessionId);
        }
        return sessionId;
    }

    sendAnalytics() {
        // In production, this would send to analytics service
        const events = JSON.parse(sessionStorage.getItem('quantum-events') || '[]');
        console.log('📈 Analytics Summary:', {
            events: events.length,
            metrics: this.performanceMetrics,
            session: this.getSessionId()
        });
    }

    optimizePerformance() {
        // Performance monitoring
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.entryType === 'largest-contentful-paint') {
                        console.log('🚀 LCP:', entry.startTime);
                    }
                    if (entry.entryType === 'first-input') {
                        console.log('⚡ FID:', entry.processingStart - entry.startTime);
                    }
                });
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
        }
        
        // Memory optimization
        this.setupMemoryManagement();
    }

    setupMemoryManagement() {
        // Clean up resources periodically
        setInterval(() => {
            // Clear old events
            const events = JSON.parse(sessionStorage.getItem('quantum-events') || '[]');
            const recentEvents = events.filter(event => 
                Date.now() - event.timestamp < 3600000 // Keep only last hour
            );
            sessionStorage.setItem('quantum-events', JSON.stringify(recentEvents));
            
            // Force garbage collection if available
            if ('gc' in window) {
                window.gc();
            }
        }, 300000); // Every 5 minutes
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register('/sw.js');
            console.log('🔧 Service Worker registered:', registration);
        } catch (error) {
            console.log('❌ Service Worker registration failed:', error);
        }
    });
}

// PWA Install Prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button
    const installBtn = document.createElement('button');
    installBtn.textContent = '📱 Install EuroTAP App';
    installBtn.className = 'btn-quantum install-btn';
    installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log('PWA install:', outcome);
            deferredPrompt = null;
            installBtn.remove();
        }
    });
    
    document.body.appendChild(installBtn);
});

// Initialize Quantum Intelligence
document.addEventListener('DOMContentLoaded', () => {
    window.quantumIntelligence = new QuantumIntelligence();
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QuantumIntelligence };
}

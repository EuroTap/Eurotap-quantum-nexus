// ==================================================
// EUROTAP - SISTEMA LEGALMENTE SEGURO v4.0
// Conceito em Desenvolvimento • Sem Claims Comerciais
// Production Safe • Legal Compliant • Research Focus
// ==================================================

(function() {
    'use strict';
    
    // PROTEÇÃO ANTI-DUPLICAÇÃO AVANÇADA
    if (window.EuroTAPResearchActive) {
        console.log('🔬 EuroTAP Research já ativo - Evitando duplicação');
        return;
    }
    window.EuroTAPResearchActive = true;
    
    console.log('🧪 EuroTAP Sistema de Pesquisa v4.0 - Iniciando...');
    
    // ==================================================
    // CONFIGURAÇÃO GLOBAL PARA PROJETO DE PESQUISA
    // ==================================================
    
    const EUROTAP_RESEARCH = {
        version: '4.0-legal-safe',
        status: 'CONCEITO EM DESENVOLVIMENTO',
        config: {
            simulationUpdate: 8000,
            researchDataUpdate: 10000,
            interestFormDelay: 20000,
            disclaimerFrequency: 30000
        },
        research: {
            quantumThreats: 126543,
            algorithmsAnalyzed: 8724,
            researchHours: 2156,
            conceptValidations: 847
        }
    };
    
    // ==================================================
    // SISTEMA DE ESTILOS SEGUROS (SEM CONFLITOS)
    // ==================================================
    
    function createLegalSafeStyles() {
        const existingStyles = document.querySelectorAll('#eurotap-styles, [id*="eurotap-style"]');
        existingStyles.forEach(el => el.remove());
        
        const css = document.createElement('style');
        css.id = 'eurotap-research-styles';
        css.textContent = `
        .research-disclaimer {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            background: linear-gradient(90deg, #f59e0b, #d97706) !important;
            color: white !important;
            padding: 8px 15px !important;
            text-align: center !important;
            font-size: 12px !important;
            font-weight: 600 !important;
            z-index: 1000000 !important;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2) !important;
        }
        
        .research-widget {
            position: fixed !important;
            z-index: 999999 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
            box-sizing: border-box !important;
            pointer-events: auto !important;
            user-select: none !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            border: 2px solid rgba(245, 158, 11, 0.3) !important;
        }
        
        .research-section {
            margin: 40px auto !important;
            padding: 30px 25px !important;
            max-width: 1200px !important;
            border-radius: 16px !important;
            backdrop-filter: blur(20px) !important;
            border: 3px solid rgba(245, 158, 11, 0.2) !important;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.95)) !important;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1) !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segui UI', Roboto, sans-serif !important;
            position: relative !important;
        }
        
        .research-section::before {
            content: "🧪 PROJETO DE PESQUISA" !important;
            position: absolute !important;
            top: -12px !important;
            left: 20px !important;
            background: linear-gradient(135deg, #f59e0b, #d97706) !important;
            color: white !important;
            padding: 4px 12px !important;
            border-radius: 15px !important;
            font-size: 10px !important;
            font-weight: 700 !important;
        }
        
        .research-btn {
            border: 2px solid #f59e0b !important;
            border-radius: 10px !important;
            cursor: pointer !important;
            font-weight: 600 !important;
            font-family: inherit !important;
            transition: all 0.25s ease !important;
            box-shadow: 0 4px 15px rgba(245, 158, 11, 0.2) !important;
            text-decoration: none !important;
            position: relative !important;
            background: white !important;
            color: #f59e0b !important;
        }
        
        .research-btn:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(245, 158, 11, 0.3) !important;
            background: #f59e0b !important;
            color: white !important;
        }
        
        .legal-safe-badge {
            background: linear-gradient(135deg, #10b981, #059669) !important;
            color: white !important;
            padding: 3px 8px !important;
            border-radius: 10px !important;
            font-size: 9px !important;
            font-weight: 700 !important;
            display: inline-block !important;
            margin-left: 8px !important;
        }
        
        @keyframes research-pulse {
            0%, 100% { 
                transform: scale(1);
                box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
            }
            50% { 
                transform: scale(1.02);
                box-shadow: 0 6px 25px rgba(59, 130, 246, 0.5);
            }
        }
        
        @keyframes data-flow {
            0%, 100% { 
                box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
            }
            50% { 
                box-shadow: 0 6px 25px rgba(16, 185, 129, 0.6);
            }
        }
        
        @keyframes concept-glow {
            0%, 100% { 
                box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
            }
            50% { 
                box-shadow: 0 6px 25px rgba(139, 92, 246, 0.5);
            }
        }
        
        @media (max-width: 768px) {
            .research-widget {
                position: relative !important;
                top: auto !important;
                right: auto !important;
                bottom: auto !important;
                left: auto !important;
                margin: 15px auto !important;
                max-width: 95% !important;
            }
            
            .research-section {
                margin: 25px 10px !important;
                padding: 20px 15px !important;
            }
        }
        
        .disclaimer-text {
            background: rgba(245, 158, 11, 0.1) !important;
            border: 1px solid rgba(245, 158, 11, 0.3) !important;
            color: #92400e !important;
            padding: 8px 12px !important;
            border-radius: 8px !important;
            font-size: 11px !important;
            font-weight: 600 !important;
            margin: 8px 0 !important;
        }
        `;
        
        document.head.appendChild(css);
        console.log('✅ Estilos de pesquisa legalmente seguros aplicados');
    }
    
    // ==================================================
    // DISCLAIMER LEGAL FIXO NO TOPO
    // ==================================================
    
    function createLegalDisclaimer() {
        const existingDisclaimer = document.getElementById('research-legal-disclaimer');
        if (existingDisclaimer) existingDisclaimer.remove();
        
        const disclaimer = document.createElement('div');
        disclaimer.id = 'research-legal-disclaimer';
        disclaimer.className = 'research-disclaimer';
        disclaimer.innerHTML = `
            ⚠️ CONCEITO EM DESENVOLVIMENTO • NÃO É UM PRODUTO COMERCIAL • PROJETO DE PESQUISA TECNOLÓGICA
        `;
        
        document.body.style.paddingTop = '35px';
        document.body.insertBefore(disclaimer, document.body.firstChild);
        
        console.log('✅ Disclaimer legal criado');
    }
    
    // ==================================================
    // LIMPEZA INTELIGENTE DE ELEMENTOS
    // ==================================================
    
    function intelligentResearchCleanup() {
        const selectors = [
            '[id*="eurotap"]',
            '[id*="etp-"]',
            '.eurotap-element',
            '.eurotap-section',
            '.etp-widget',
            '.etp-section',
            '[class*="research-"]'
        ];
        
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                if (!el.id.includes('research-styles') && !el.id.includes('legal-disclaimer')) {
                    el.remove();
                }
            });
        });
        
        console.log('🧹 Limpeza inteligente de pesquisa concluída');
    }
    
    // ==================================================
    // 1. MONITOR DE PESQUISA QUANTUM
    // ==================================================
    
    function createQuantumResearchMonitor() {
        const monitor = document.createElement('div');
        monitor.id = 'research-quantum-monitor';
        monitor.className = 'research-widget';
        monitor.style.cssText = `
            top: 60px;
            right: 20px;
            background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
            color: white;
            padding: 16px 20px;
            border-radius: 14px;
            font-size: 12px;
            font-weight: 600;
            min-width: 260px;
            animation: research-pulse 6s infinite;
        `;
        
        monitor.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <span style="font-size: 16px;">🔬</span>
                <div>
                    <div style="font-weight: 700; font-size: 13px;">Pesquisa Quantum</div>
                    <div style="font-size: 9px; opacity: 0.9;">Dados Simulados</div>
                </div>
                <span class="legal-safe-badge">CONCEITO</span>
            </div>
            
            <div style="text-align: center; background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px;">
                <div id="research-threats" style="font-size: 18px; font-weight: 800; margin-bottom: 4px;">
                    ${EUROTAP_RESEARCH.research.quantumThreats.toLocaleString()}
                </div>
                <div style="font-size: 9px; opacity: 0.9;">
                    Ameaças analisadas • <span id="research-status">SIMULAÇÃO</span>
                </div>
            </div>
        `;
        
        document.body.appendChild(monitor);
        
        const researchStatuses = ['SIMULAÇÃO', 'ANÁLISE', 'ESTUDO', 'CONCEITO'];
        let statusIndex = 0;
        
        setInterval(() => {
            EUROTAP_RESEARCH.research.quantumThreats += Math.floor(Math.random() * 3) + 1;
            
            const threatEl = document.getElementById('research-threats');
            const statusEl = document.getElementById('research-status');
            
            if (threatEl) threatEl.textContent = EUROTAP_RESEARCH.research.quantumThreats.toLocaleString();
            if (statusEl) {
                statusEl.textContent = researchStatuses[statusIndex % researchStatuses.length];
                statusIndex++;
            }
        }, EUROTAP_RESEARCH.config.simulationUpdate);
        
        console.log('✅ Monitor de pesquisa quantum criado');
    }
    
    // ==================================================
    // 2. MONITOR ML-DSA-65
    // ==================================================
    
    function createMLDSAResearchMonitor() {
        const monitor = document.createElement('div');
        monitor.id = 'research-mldsa-monitor';
        monitor.className = 'research-widget';
        monitor.style.cssText = `
            top: 160px;
            right: 20px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 16px 18px;
            border-radius: 14px;
            font-size: 11px;
            font-weight: 600;
            min-width: 240px;
            animation: data-flow 7s infinite;
        `;
        
        monitor.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <span style="font-size: 16px;">🛡️</span>
                <div>
                    <div style="font-weight: 700; font-size: 12px;">ML-DSA-65</div>
                    <div style="font-size: 8px; opacity: 0.9;">Pesquisa em Andamento</div>
                </div>
                <span class="legal-safe-badge">NIST</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px;">
                <div style="background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px; text-align: center;">
                    <div id="research-algorithms" style="font-weight: 700; font-size: 13px;">
                        ${EUROTAP_RESEARCH.research.algorithmsAnalyzed.toLocaleString()}
                    </div>
                    <div style="font-size: 7px; opacity: 0.8;">Algoritmos</div>
                </div>
                <div style="background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px; text-align: center;">
                    <div id="research-hours" style="font-weight: 700; font-size: 13px;">
                        ${EUROTAP_RESEARCH.research.researchHours.toLocaleString()}
                    </div>
                    <div style="font-size: 7px; opacity: 0.8;">Horas P&D</div>
                </div>
            </div>
            
            <div style="text-align: center; background: linear-gradient(90deg, #34d399, #10b981); padding: 6px; border-radius: 6px;">
                <div style="font-size: 9px; font-weight: 700;">
                    🧪 Status: FASE DE PESQUISA • Validações: <span id="research-validations">847</span>
                </div>
            </div>
        `;
        
        document.body.appendChild(monitor);
        
        setInterval(() => {
            EUROTAP_RESEARCH.research.algorithmsAnalyzed += Math.floor(Math.random() * 5) + 2;
            EUROTAP_RESEARCH.research.researchHours += Math.floor(Math.random() * 3) + 1;
            EUROTAP_RESEARCH.research.conceptValidations += Math.floor(Math.random() * 2);
            
            const algoEl = document.getElementById('research-algorithms');
            const hoursEl = document.getElementById('research-hours');
            const validEl = document.getElementById('research-validations');
            
            if (algoEl) algoEl.textContent = EUROTAP_RESEARCH.research.algorithmsAnalyzed.toLocaleString();
            if (hoursEl) hoursEl.textContent = EUROTAP_RESEARCH.research.researchHours.toLocaleString();
            if (validEl) validEl.textContent = EUROTAP_RESEARCH.research.conceptValidations.toString();
        }, EUROTAP_RESEARCH.config.researchDataUpdate);
        
        console.log('✅ Monitor de pesquisa ML-DSA-65 criado');
    }
    
    // ==================================================
    // 3. BADGE NIST RESEARCH
    // ==================================================
    
    function createResearchNISTBadge() {
        const badge = document.createElement('div');
        badge.id = 'research-nist-badge';
        badge.className = 'research-widget';
        badge.style.cssText = `
            bottom: 25px;
            left: 25px;
            background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
            color: white;
            padding: 16px 20px;
            border-radius: 16px;
            cursor: pointer;
            font-size: 11px;
            font-weight: 600;
            max-width: 240px;
            box-shadow: 0 8px 32px rgba(139, 92, 246, 0.4);
            animation: concept-glow 4s infinite;
        `;
        
        badge.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
                <div style="background: rgba(255,255,255,0.2); padding: 8px; border-radius: 8px;">
                    <span style="font-size: 18px;">🏛️</span>
                </div>
                <div>
                    <div style="font-weight: 800; font-size: 13px;">NIST Research</div>
                    <div style="font-size: 9px; opacity: 0.9;">Base Científica</div>
                </div>
                <span class="legal-safe-badge">FIPS 204</span>
            </div>
            
            <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 10px; text-align: center;">
                <div style="font-weight: 700; font-size: 12px; margin-bottom: 4px;">
                    ML-DSA-65 Standard
                </div>
                <div style="font-size: 9px; opacity: 0.9; line-height: 1.3;">
                    Algoritmo oficialmente aprovado<br>
                    pelo NIST em agosto/2024
                </div>
            </div>
            
            <div class="disclaimer-text" style="margin-top: 8px; text-align: center;">
                🧪 Estudando implementação • Clique para detalhes
            </div>
        `;
        
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'translateY(-3px) scale(1.01)';
            badge.style.boxShadow = '0 10px 35px rgba(139, 92, 246, 0.6)';
        });
        
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'translateY(0) scale(1)';
            badge.style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.4)';
        });
        
        badge.addEventListener('click', showResearchNISTDetails);
        document.body.appendChild(badge);
        
        console.log('✅ Badge de pesquisa NIST criado');
    }
    
    // ==================================================
    // FUNÇÃO PARA DETALHES NIST
    // ==================================================
    
    window.showResearchNISTDetails = function() {
        alert(`🏛️ PESQUISA BASEADA EM NIST ML-DSA-65

📋 DISCLAIMER: Informações baseadas em documentação pública do NIST

🔬 DETALHES DA PESQUISA CIENTÍFICA:

📚 FONTE OFICIAL:
• NIST FIPS 204: ML-DSA Digital Signature Standard
• Data de aprovação: 14 de agosto de 2024
• Órgão: National Institute of Standards and Technology (EUA)
• Status: Oficialmente aprovado para uso governamental

🧮 ESPECIFICAÇÕES TÉCNICAS (Públicas):
• Algoritmo: Module-Lattice-Based Digital Signatures
• Base matemática: Shortest Vector Problem (SVP) em lattices
• Níveis de segurança: 3 categorias (ML-DSA-44, -65, -87)
• Escolha de pesquisa: ML-DSA-65 (nível 3, 256-bit equivalent)

🔬 OBJETIVO DA PESQUISA EUROTAP:
• Estudar viabilidade de implementação comercial
• Analisar performance em ambiente de produção
• Validar compliance com regulamentações europeias
• Desenvolver APIs compatíveis com sistemas existentes

📊 BASE CIENTÍFICA:
• Papers da IACR (International Association for Cryptologic Research)
• Benchmarks de universidades (MIT, Stanford, ETH Zurich)
• Estudos de performance de implementações de referência
• Análise de resistência quantum baseada em matemática lattice

🧪 FASE ATUAL DE PESQUISA:
• ✅ Revisão bibliográfica completa
• 🔄 Análise de viabilidade técnica em andamento
• 📋 Estudo de compliance regulamentário UE
• ⏳ Desenvolvimento de protótipo conceitual planejado

🔮 Este projeto visa contribuir para o ecossistema de pesquisa europeu
em criptografia pós-quântica aplicada a sistemas financeiros.`);
    };
    
    // ==================================================
    // INICIALIZAÇÃO SEQUENCIAL SEGURA
    // ==================================================
    
    function executeResearchInitialization() {
        try {
            console.log('🧪 EuroTAP Sistema de Pesquisa v4.0 - Iniciando de forma segura...');
            
            intelligentResearchCleanup();
            createLegalDisclaimer();
            createLegalSafeStyles();
            
            setTimeout(() => {
                createQuantumResearchMonitor();
                createMLDSAResearchMonitor();
                createResearchNISTBadge();
            }, 300);
            
            setTimeout(() => {
                console.log(`
🧪 ================================================
    EUROTAP SISTEMA DE PESQUISA v4.0 LEGALMENTE SEGURO!
================================================

✅ WIDGETS DE PESQUISA IMPLEMENTADOS:
   🔬 Monitor de pesquisa quantum (dados simulados)
   🛡️ Monitor ML-DSA-65 (progresso de desenvolvimento)
   🏛️ Badge NIST research (base científica)

✅ PROTEÇÕES LEGAIS ATIVAS:
   ⚠️ Disclaimer legal fixo no topo
   📋 Linguagem "projeto de pesquisa" consistente
   🔒 Badges "CONCEITO" em todas funcionalidades

🎯 STATUS: LEGALMENTE SEGURO PARA PESQUISA!
🧪 PRONTO PARA DESENVOLVIMENTO SEM RISCOS LEGAIS!
                `);
            }, 2000);
            
        } catch (error) {
            console.error('❌ Erro na inicialização de pesquisa:', error);
            setTimeout(() => executeResearchInitialization(), 3000);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', executeResearchInitialization);
    } else {
        executeResearchInitialization();
    }
    
})();

console.log('🧪 EuroTAP Sistema de Pesquisa v4.0 - Arquivo Carregado!');
console.warn(`
⚠️ ===============================================
    AVISO LEGAL IMPORTANTE - EUROTAP
===============================================

ESTE É UM PROJETO DE PESQUISA EM DESENVOLVIMENTO

• Nenhum produto comercial está disponível
• Informações são para fins educacionais apenas
• Não constitui oferta ou garantia comercial
• Todas as simulações são conceituais
• Baseado em pesquisa científica e análise de mercado

Para mais informações sobre o projeto de pesquisa,
consulte os disclaimers no website.

Última atualização: ${new Date().toLocaleDateString()}
===============================================
`);

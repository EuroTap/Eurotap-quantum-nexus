// Funcionalidades de Demo para EuroTAP Quantum Nexus
class EuroTAPDemos {
    constructor() {
        this.initializeDemos();
    }

    initializeDemos() {
        // Demo de transação quantum
        this.setupTransactionDemo();
        // Demo de segurança
        this.setupSecurityDemo();
        // Calculadora de economia
        this.setupROICalculator();
        // Sistema de feedback
        this.setupFeedbackSystem();
    }

    setupTransactionDemo() {
        const demoButton = document.createElement('button');
        demoButton.innerHTML = ' Testar Transação Quantum';
        demoButton.className = 'demo-btn quantum-btn';
        demoButton.onclick = () => this.simulateQuantumTransaction();
        
        // Adicionar ao final da página
        document.body.appendChild(demoButton);
    }

    simulateQuantumTransaction() {
        const modal = document.createElement('div');
        modal.className = 'demo-modal';
        modal.innerHTML = 
            <div class="demo-content">
                <h3>🔐 Simulação de Pagamento Quantum-Safe</h3>
                <div class="demo-steps">
                    <div class="step active">1. Iniciando criptografia ML-DSA-65...</div>
                    <div class="step">2. Validação quantum distribuída...</div>
                    <div class="step">3. Processamento seguro...</div>
                    <div class="step">4. Transação aprovada ✅</div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()">Fechar</button>
            </div>
        ;
        document.body.appendChild(modal);

        // Animar os steps
        let currentStep = 0;
        const steps = modal.querySelectorAll('.step');
        const interval = setInterval(() => {
            if (currentStep < steps.length - 1) {
                steps[currentStep].classList.remove('active');
                currentStep++;
                steps[currentStep].classList.add('active');
            } else {
                clearInterval(interval);
            }
        }, 1500);
    }

    setupSecurityDemo() {
        // Contador de ameaças bloqueadas
        let threatsBlocked = Math.floor(Math.random() * 10000) + 50000;
        
        const securityCounter = document.createElement('div');
        securityCounter.className = 'security-counter';
        securityCounter.innerHTML = 
            <div class="counter-box">
                <h4> Ameaças Quânticas Bloqueadas</h4>
                <div class="counter-number" id="threats-counter"></div>
                <small>Atualizando em tempo real</small>
            </div>
        ;
        document.body.appendChild(securityCounter);

        // Incrementar contador
        setInterval(() => {
            threatsBlocked += Math.floor(Math.random() * 5) + 1;
            document.getElementById('threats-counter').textContent = threatsBlocked.toLocaleString();
        }, 3000);
    }

    setupROICalculator() {
        const calculator = document.createElement('div');
        calculator.className = 'roi-calculator';
        calculator.innerHTML = 
            <div class="calculator-box">
                <h3>💰 Calculadora de Economia EuroTAP</h3>
                <input type="number" id="monthly-transactions" placeholder="Transações mensais">
                <input type="number" id="current-fee" placeholder="Taxa atual (%)" step="0.1">
                <button onclick="calculateSavings()">Calcular Economia</button>
                <div id="savings-result"></div>
            </div>
        ;
        document.body.appendChild(calculator);

        window.calculateSavings = () => {
            const transactions = document.getElementById('monthly-transactions').value;
            const currentFee = document.getElementById('current-fee').value;
            const euroTapFee = 1.0; // Taxa EuroTAP
            
            if (transactions && currentFee) {
                const currentCost = (transactions * currentFee) / 100;
                const euroTapCost = (transactions * euroTapFee) / 100;
                const savings = currentCost - euroTapCost;
                const annualSavings = savings * 12;
                
                document.getElementById('savings-result').innerHTML = 
                    <div class="savings-display">
                        <p><strong>Economia Mensal:</strong> €</p>
                        <p><strong>Economia Anual:</strong> €</p>
                        <p><strong>+ Proteção Quantum:</strong> Incluída!</p>
                    </div>
                ;
            }
        };
    }

    setupFeedbackSystem() {
        const feedback = document.createElement('div');
        feedback.className = 'feedback-system';
        feedback.innerHTML = 
            <div class="feedback-box">
                <h4> Feedback de Teste (BETA)</h4>
                <textarea id="feedback-text" placeholder="Como está sendo sua experiência com o EuroTAP?"></textarea>
                <select id="feedback-type">
                    <option value="bug"> Bug Report</option>
                    <option value="feature"> Sugestão</option>
                    <option value="general"> Feedback Geral</option>
                </select>
                <button onclick="submitFeedback()">Enviar Feedback</button>
                <div id="feedback-status"></div>
            </div>
        ;
        document.body.appendChild(feedback);

        window.submitFeedback = () => {
            const text = document.getElementById('feedback-text').value;
            const type = document.getElementById('feedback-type').value;
            
            if (text.trim()) {
                // Simular envio
                document.getElementById('feedback-status').innerHTML = 
                    '<p style="color: green;"> Feedback enviado! Obrigado por ajudar a melhorar o EuroTAP.</p>';
                
                // Limpar formulário
                document.getElementById('feedback-text').value = '';
                
                // Log para desenvolvimento
                console.log('Feedback:', { type, text, timestamp: new Date() });
            }
        };
    }
}

// Adicionar badge BETA
function addBetaBadge() {
    const badge = document.createElement('div');
    badge.className = 'beta-badge';
    badge.innerHTML = '🧪 VERSÃO BETA - EM TESTES';
    document.body.appendChild(badge);
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    addBetaBadge();
    new EuroTAPDemos();
});

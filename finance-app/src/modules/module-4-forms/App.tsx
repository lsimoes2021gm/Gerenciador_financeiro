import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ValidationExamples from './components/ValidationExamples'
import MaskedInputs from './components/MaskedInputs'
import MultiStepForm from './components/MultiStepform'
import AdvancedTransactionsForm from './components/AdvancedTransactionsForm'

function App() {
    useEffect(() => {
        console.log('✅ Módulo 4 (Formulários Avançados) carregado!')
        console.log('📝 Formulários com validação e máscaras funcionando')
    }, [])

    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-content">
                <Header />

                <main className="forms-content">
                    {/* Cabeçalho */}
                    <div className="forms-header">
                        <h1>📝 Formulários Avançados</h1>
                        <p>
                            Exemplos de formulários com validação em tempo real, máscaras,
                            upload de arquivos e formulários multi-step
                        </p>
                    </div>

                    {/* Grid de Exemplos */}
                    <div className="examples-grid">
                        <div className="example-card">
                            <h3>✅ Validação em Tempo Real</h3>
                            <p>
                                Validação instantânea de campos com feedback visual.
                                Inclui validação de email, CPF, telefone, senhas fortes e muito mais.
                            </p>
                            <ul className="example-features">
                                <li>Validação enquanto digita</li>
                                <li>Múltiplos tipos de validação</li>
                                <li>Feedback de erro/sucesso</li>
                                <li>Validação de senha forte</li>
                            </ul>
                        </div>

                        <div className="example-card">
                            <h3>🎭 Campos com Máscara</h3>
                            <p>
                                Campos que formatam automaticamente dados como CPF, CNPJ,
                                telefone, moeda, datas e percentuais.
                            </p>
                            <ul className="example-features">
                                <li>Formatação automática</li>
                                <li>Múltiplos tipos de máscara</li>
                                <li>Validação integrada</li>
                                <li>User-friendly</li>
                            </ul>
                        </div>

                        <div className="example-card">
                            <h3>🚀 Formulário Multi-Step</h3>
                            <p>
                                Formulário dividido em etapas com progresso visual,
                                validação progressiva e upload de arquivos.
                            </p>
                            <ul className="example-features">
                                <li>Progresso visual</li>
                                <li>Validação por etapa</li>
                                <li>Upload de arquivos</li>
                                <li>Resumo final</li>
                            </ul>
                        </div>
                    </div>

                    {/* Exemplos de Validação */}
                    <ValidationExamples />

                    {/* Campos com Máscara */}
                    <MaskedInputs />

                    {/* Formulário Multi-Step */}
                    <MultiStepForm />

                    {/* NOVO CARD PARA FORMULÁRIO AVANÇADO */}
                    <div className="example-card">
                        <h3>⚡ Transação Avançada</h3>
                        <p>
                            Formulário completo com categorias hierárquicas, parcelamento,
                            recorrência, tags e upload de comprovante.
                        </p>
                        <ul className="example-features">
                            <li>Categorias hierárquicas</li>
                            <li>Parcelamento</li>
                            <li>Recorrência</li>
                            <li>Upload de arquivos</li>
                        </ul>
                    </div>

                    {/* Rodapé Informativo */}
                    <div className="form-container" style={{
                        background: 'linear-gradient(135deg, #dbeafe 0%, #e0f2fe 100%)',
                        borderColor: '#93c5fd'
                    }}>
                        <h3 style={{ color: '#1e40af' }}>🎯 Módulo 4 Concluído!</h3>
                        <div style={{ color: '#1e40af', lineHeight: '1.6', marginTop: '1rem' }}>
                            <p><strong>✅ Funcionalidades Implementadas:</strong></p>
                            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                                <li>Validação em tempo real com múltiplas regras</li>
                                <li>Campos com máscara automática (CPF, CNPJ, telefone, etc.)</li>
                                <li>Formulários multi-step com progresso visual</li>
                                <li>Upload de arquivos com preview</li>
                                <li>Validação de formulários completos</li>
                                <li>Feedback visual de erro/sucesso</li>
                                <li>Acessibilidade completa (ARIA labels)</li>
                            </ul>

                            <p style={{ marginTop: '1.5rem' }}><strong>🚀 Próximos Passos:</strong></p>
                            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                                <li>Integrar com backend real</li>
                                <li>Adicionar persistência local</li>
                                <li>Criar sistema de temas</li>
                                <li>Implementar exportação de dados</li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default App
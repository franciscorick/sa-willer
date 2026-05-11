import { useState } from 'react'
import './App.css'

function App() {
  const [tab, setTab] = useState('login')

  // Impede o recarregamento da página ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Enviando formulário de ${tab}`)
  }

  return (
    <div className="screen">
      <div className="auth-wrapper">
        
        <aside className="auth-deco">
          <div className="deco-blob"></div>
          <div className="deco-text">
            <span className="deco-brand">Delta</span>
            <p className="deco-quote">
              "Segurança começa
              <br />
              pela identidade."
            </p>
          </div>
        </aside>

        <main className="auth-card">
          <div className="tabs">
            <button
              // CORREÇÃO: Adicionadas as crases e a estrutura correta de template string
              className={`tab ${tab === 'login' ? 'active' : ''}`}
              onClick={() => setTab('login')}
            >
              Entrar
            </button>

            <button
              // CORREÇÃO: Adicionadas as crases
              className={`tab ${tab === 'register' ? 'active' : ''}`}
              onClick={() => setTab('register')}
            >
              Cadastrar
            </button>

            <div
              className={`tab-indicator ${tab === 'register' ? 'right' : ''}`}
            ></div>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            {tab === 'login' ? (
              <>
                <div className="form-header">
                  <h2 className="form-title">Bem-vindo de volta</h2>
                  <p className="form-subtitle">Acesse sua conta</p>
                </div>

                <div className="field">
                  <label htmlFor="email-login">E-mail</label>
                  <div className="input-wrap">
                    <input
                      id="email-login"
                      type="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="pass-login">Senha</label>
                  <div className="input-wrap">
                    <input
                      id="pass-login"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Entrar
                </button>
              </>
            ) : (
              <>
                <div className="form-header">
                  <h2 className="form-title">Criar conta</h2>
                  <p className="form-subtitle">Preencha os dados abaixo</p>
                </div>

                <div className="field">
                  <label htmlFor="name-reg">Nome</label>
                  <div className="input-wrap">
                    <input
                      id="name-reg"
                      type="text"
                      placeholder="João Silva"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="email-reg">E-mail</label>
                  <div className="input-wrap">
                    <input
                      id="email-reg"
                      type="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="pass-reg">Senha</label>
                  <div className="input-wrap">
                    <input
                      id="pass-reg"
                      type="password"
                      placeholder="mínimo 6 caracteres"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Criar conta
                </button>
              </>
            )}
          </form>
        </main>
      </div>
    </div>
  )
}

export default App
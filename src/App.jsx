import { useState } from 'react'
import './App.css'
import logo from './imagens/logo-delta.png'

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [user, setUser] = useState({ nome: '', email: '' });
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({ nome: '', email: '', senha: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuth = (e) => {
    e.preventDefault();
    // Simulação de login enquanto seu colega termina o backend
    setUser({ nome: formData.nome || 'Usuário Delta', email: formData.email });
    setShowWelcome(true);
  };

  if (showWelcome) {
    return (
      <div className="screen">
        <div className="welcome-card">
          <div className="welcome-badge">✦</div>
          <h1 className="welcome-title">Olá, <span>{user.nome}</span>!</h1>
          <p className="welcome-sub">Você está autenticado com sucesso na Delta.</p>
          <div className="welcome-info">
            <span className="info-label">E-mail da sessão</span>
            <span className="info-value">{user.email}</span>
          </div>
          <button onClick={() => setShowWelcome(false)} className="btn btn-ghost">Sair da conta</button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen">
      <div className="auth-wrapper">
        <aside className="auth-deco">
          <div className="deco-blob"></div>
          <div className="logo-container">
            <img src={logo} alt="Delta Logo" />
          </div>
          <p className="deco-quote">"Confiança e Inovação<br/>em cada investimento."</p>
        </aside>

        <main className="auth-card">
          <div className="tabs">
            <button className={`tab ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>Entrar</button>
            <button className={`tab ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>Cadastrar</button>
            <div className={`tab-indicator ${isLogin ? '' : 'right'}`}></div>
          </div>

          <form className="form" onSubmit={handleAuth}>
            <div className="form-header">
              <h2 className="form-title">{isLogin ? 'Bem-vindo de volta' : 'Criar conta'}</h2>
              <p className="form-subtitle">{isLogin ? 'Acesse sua conta Delta' : 'Abra sua conta agora'}</p>
            </div>

            {!isLogin && (
              <div className="field">
                <label>Nome Completo</label>
                <div className="input-wrap">
                  <input type="text" name="nome" placeholder="Seu nome" onChange={handleInputChange} />
                </div>
              </div>
            )}

            <div className="field">
              <label>E-mail</label>
              <div className="input-wrap">
                <input type="email" name="email" placeholder="seu@email.com" onChange={handleInputChange} />
              </div>
            </div>

            <div className="field">
              <label>Senha</label>
              <div className="input-wrap">
                <input type={showPass ? "text" : "password"} name="senha" placeholder="••••••••" onChange={handleInputChange} />
                <button type="button" className="toggle-pass" onClick={() => setShowPass(!showPass)}>
                  {showPass ? '👁️' : '🔒'}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              <span>{isLogin ? 'Entrar' : 'Cadastrar'}</span>
            </button>
          </form>
        </main>
      </div>
    </div>
  )
}

export default App
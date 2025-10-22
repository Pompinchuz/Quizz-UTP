// src/App.jsx
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    // Si el username es "admin", redirigir al panel de administración
    if (userData.username === 'admin') {
      setCurrentView('admin');
    } else {
      setCurrentView('dashboard');
    }
  };

  const handleRegister = (userData) => {
    setUser(userData);
    setCurrentView('dashboard');
  };

  const handleStartQuiz = () => {
    setCurrentView('quiz');
  };

  const handleFinishQuiz = () => {
    setCurrentView('dashboard');
    // Recargar datos del usuario
    window.location.reload();
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('login');
  };

  return (
    <div className="app">
      {currentView === 'login' && (
        <Login
          onLogin={handleLogin}
          onSwitchToRegister={() => setCurrentView('register')}
        />
      )}
      
      {currentView === 'register' && (
        <Register
          onRegister={handleRegister}
          onSwitchToLogin={() => setCurrentView('login')}
        />
      )}
      
      {currentView === 'dashboard' && user && (
        <Dashboard
          user={user}
          onStartQuiz={handleStartQuiz}
          onLogout={handleLogout}
        />
      )}
      
      {currentView === 'quiz' && user && (
        <Quiz
          user={user}
          onFinish={handleFinishQuiz}
        />
      )}
      
      {currentView === 'admin' && user && (
        <AdminDashboard
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;
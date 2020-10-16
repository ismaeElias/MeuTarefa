import React, { Component } from 'react';
import './index.css';
const { ipcRenderer } = window.require('electron');

class App extends Component {
  constructor(props) {
    super(props);
  }

  clicou() {
    ipcRenderer.send('clicou-aqui');
  }

  render() {
    return (
      <div className="container">
        <main className="screen-left">
        </main>
        <aside className="screen-right">
          <div className="conteudo-screen">
            <h2>Meu Tarefa</h2>
            <p>Sistema de gerenciamentos de tarefas.</p>
            <input type="text" />
            <input type="text" />
            <button>Acessar</button>
          </div>
        </aside>
      </div>
    );
  }
}

export default App;

import { useState } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionarTarefa() {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa("");
    }
  }

  // Nova função: cria um novo array sem o item do índice clicado
  function removerTarefa(index) {
    const novaLista = tarefas.filter((_, i) => i !== index);
    setTarefas(novaLista);
  }

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <p>Bem-vindo à sua lista de tarefas!</p>
      <p><i>By <a href="https://github.com/wanessasantos360" target="_blank" rel="noopener noreferrer">Wanessa Santos</a></i></p>

      <div className="input-area">
        <input
          value={novaTarefa}
          onChange={e => setNovaTarefa(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            {}
            <button onClick={() => removerTarefa(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
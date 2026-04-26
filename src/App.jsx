import { useState } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionarTarefa() {
    if (novaTarefa.trim()) {
      setTarefas([
        ...tarefas,
        { texto: novaTarefa, concluida: false }
      ]);
      setNovaTarefa("");
    }
  }

  function concluirTarefa(index) {
    const tarefa = tarefas[index];
    const restante = tarefas.filter((_, i) => i !== index);

    // marca como concluída e manda pro final da lista
    setTarefas([
      ...restante,
      { ...tarefa, concluida: true }
    ]);
  }

  function excluirTarefa(index) {
    setTarefas(tarefas.filter((_, i) => i !== index));
  }


  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <p>Bem-vindo à sua lista de tarefas!</p>
      <p>
        <i>
          By{' '}
          <a
            href="https://github.com/wanessasantos360"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wanessa Santos
          </a>
        </i>
      </p>

      <div className="input-area">
        <input
          value={novaTarefa}
          onChange={e => setNovaTarefa(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      {/* Não mostra nada se não houver tarefas */}
      {tarefas.length > 0 && (
        <ul>
          {tarefas.map((tarefa, index) => (
            <li
              key={index}
              className={tarefa.concluida ? 'concluida' : ''}
            >
              {/* Pendente: ✅ [nome] ❌ */}
              {!tarefa.concluida && (
                <>
                  <button
                    className="btn-concluir"
                    onClick={() => concluirTarefa(index)}
                  >
                    ✅
                  </button>
                  <span className="texto-tarefa">
                    {tarefa.texto}
                  </span>
                  <button
                    className="btn-excluir"
                    onClick={() => excluirTarefa(index)}
                  >
                    ❌
                  </button>
                </>
              )}

              {/* Concluída: ~~[nome]~~ 🗑️ */}
              {tarefa.concluida && (
                <>
                  <span className="texto-tarefa">
                    {tarefa.texto}
                  </span>
                  <button
                    className="btn-lixeira"
                    onClick={() => excluirTarefa(index)}
                  >
                    🗑️
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
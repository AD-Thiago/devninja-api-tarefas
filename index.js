const express = require("express");
const app = express();
const PORT = 3000;

// 🧠 Lista simulada de tarefas
const listaDeTarefas = [
  { id: 1, titulo: "Estudar Git", feito: false },
  { id: 2, titulo: "Criar rota /tarefas", feito: true },
  { id: 3, titulo: "Enviar Pull Request", feito: false }
];

// 🧭 Rota que devolve a lista de tarefas
app.get("/tarefas", (req, res) => {
  res.json(listaDeTarefas);
});

// 🚀 Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

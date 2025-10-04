import tasksService from "../services/tasksService.js";

const tasksController = {
  
  getAllTasks: async (req, res) => {
    try {
      const allTasks = await tasksService.getAllTasks();
      return res.status(200).json(allTasks);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao ler tarefas cadastradas" }); // Retorna erro 500 caso algo de errado aconteca
    }
  },

  createTask: async (req, res) => {
    try {
      
      const task = req.body; // Recebe o Corpo da Req enviado pelo frontend, com os dados necessarios para criar a task

      const newTask = await tasksService.createTask(task); // chama a funcao do service de criar a task

      return res.status(201).json(newTask); // retorna a task criada
      
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar Task" }); // Retorna erro 500 caso algo de errado aconteca
    }
  },

  deleteTask: async (req, res) => {
    try {
      const id = req.params.id; // Pega o id da task que veio na URL

      tasksService.deleteTask(id); // chama a funcao do service de deletar a task

      return res.status(204).end(); // retorna status 204 (No Content)
    } catch (error) {
      return res.status(500).json({ error: "Erro ao deletar Task" }); // Retorna erro 500 caso algo de errado aconteca
    }
  },
};

export default tasksController;

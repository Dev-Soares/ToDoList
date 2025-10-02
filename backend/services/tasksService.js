import prisma from "../config/prisma.js";

// no service, nenhuma funcao lida com req ou res, apenas com a logica de negocio

const tasksService = {

     getAllTasks:  async () => { 
    const allTasks = await prisma.task.findMany();
    return allTasks;
},

    deleteTask:async (id) => {
    await prisma.task.delete ({
        where: { id: Number(id) }
    });
},

    createTask: async (task) => {
    const newTask = await prisma.task.create({
        data: task
    });
    return newTask;
}



};








export default tasksService;

    
import models from "../models/config/associations.js";

class TaskServices {
  async getTasks() {
    return await models.Task.findAll();
  }

  async getTaskById(id) {
    return await models.Task.findByPk(id);
  }

  async createTask(task) {
    return await models.Task.findOrCreate({
      where: task.id,
      defaults: task,
    });
  }

  async updateTask(id, task) {
    return await models.Task.update(task, {
      where: {
        id: id,
      },
    });
  }

  async deleteTask(id) {
    return await models.Task.destroy({
      where: {
        id: id,
      },
    });
  }
}

export const taskServices = new TaskServices();

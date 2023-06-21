const { Tasks } = require("../models/tasks");

const resolver = {
  Query: {
    hello: () => "hello cat",
    getAllTasks: async () => {
      const tasks = await Tasks.find();
      return tasks;
    },
    async getTask(_, { id }) {
      const task = await Tasks.findById(id);
      return task;
    },
  },

  Mutation: {
    createTask: async (_, args) => {
      const { title, description } = args.task;
      const newTask = new Tasks({ title, description });
      const newtask = await newTask.save();
      return newtask;
    },
    async deleteTask(_, { id }) {
      await Tasks.findByIdAndDelete(id);
      return "task delete";
    },
    async updateTask(_, { id, task }) {
      const taskUpdate = await Tasks.findByIdAndUpdate(
        id,
        {
          $set: task,
        },
        {
          new: true,
        }
      );
      return taskUpdate;
    },
  },
};

module.exports = {
  resolver,
};

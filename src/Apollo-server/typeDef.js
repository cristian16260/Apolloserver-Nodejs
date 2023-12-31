const { gql } = require("apollo-server-express");

const typeDef = gql`
  type Task {
    id: ID
    title: String
    description: String
  }

  type Query {
    hello: String
    getAllTasks: [Task]
    getTask(id: ID): Task
  }

  input TaskInput {
    title: String
    description: String
  }

  type Mutation {
    createTask(task: TaskInput!): Task
    deleteTask(id: ID!): String
    updateTask(id: ID!, task: TaskInput): Task
  }
`;

module.exports = {
  typeDef,
};

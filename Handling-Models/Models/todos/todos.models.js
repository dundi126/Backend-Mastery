import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    contant: {
      type: String,
      reuired: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ], // Array of Sub-todos
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);

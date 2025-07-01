import type { RootState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";

export const rootTodoSelector = (state: RootState) => state.todos;

export const todoItemsSelector = createSelector(
  rootTodoSelector,
  (todos) => todos.items
);

export const todoFilterSelector = createSelector(
  rootTodoSelector,
  (todos) => todos.filter
);

export const todoFilteredItemsSelector = createSelector(
  todoItemsSelector,
  todoFilterSelector,
  (items, filter) => {
    if (filter === "Completed") return items.filter((item) => item.completed);
    if (filter === "Active") return items.filter((item) => !item.completed);
    return items;
  }
);

export const totalTodoItemCountSelector = createSelector(
  todoItemsSelector,
  (items) => items.length
);

export const completedTodoItemCountSelector = createSelector(
  todoItemsSelector,
  (items) => items.filter((t) => t.completed).length
);

export const remainingTodoItemCountSelector = createSelector(
  totalTodoItemCountSelector,
  completedTodoItemCountSelector,
  (total, completed) => total - completed
);


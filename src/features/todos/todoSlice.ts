
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Todo } from '../../types/todo';
import { getData, setData, LOCAL_STORAGE_KEY } from '../../utils/localStorage';

interface TodosState {
  items: Todo[];
  filter: 'All' | 'Completed' | 'Active';
}

const initialState: TodosState = {
  items: getData<Todo[]>(LOCAL_STORAGE_KEY) || [],
  filter: 'All',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.items.push(newTodo);
      setData(LOCAL_STORAGE_KEY, state.items);
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      setData(LOCAL_STORAGE_KEY, state.items);
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.items = state.items.filter((t) => t.id !== action.payload);
      setData(LOCAL_STORAGE_KEY, state.items);
    },
    changeFilter(state, action: PayloadAction<'All' | 'Completed' | 'Active'>) {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, changeFilter } = todosSlice.actions;
export default todosSlice.reducer;
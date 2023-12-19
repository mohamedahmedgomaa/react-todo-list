import {createSlice} from '@reduxjs/toolkit'

const initialStateTasks = [
    {id: 1, text: 'Task 1'},
    {id: 2, text: 'Task 2'},
];

const taskSlice = createSlice({
    name: 'task',
    initialState: initialStateTasks,
    reducers: {
        createTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            return state.filter((el) => el.id !== action.payload.id);
        },
    }
});

export const {createTask,deleteTask} = taskSlice.actions
export default taskSlice.reducer;
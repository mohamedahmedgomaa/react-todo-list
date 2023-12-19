import {configureStore} from '@reduxjs/toolkit'
import tasks from './taskSlice'
import auth from './authSlice'
export default configureStore({
    reducer: {
        tasks, auth
    }
})
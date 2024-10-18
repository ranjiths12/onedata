// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import jobReducer from '../slices/jobSlices';
import applicationReducer from '../slices/ApplicationSlices';


const store = configureStore({
    reducer: {
        job: jobReducer, 
        application: applicationReducer,
        
    },
});

export default store;

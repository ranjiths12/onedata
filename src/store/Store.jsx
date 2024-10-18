// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import jobReducer from '../slices/jobSlices'; // Ensure you import the job slice

const store = configureStore({
    reducer: {
        job: jobReducer, // Make sure the reducer is named correctly
    },
});

export default store;

// src/store/jobSlice.js
import { createSlice } from '@reduxjs/toolkit';
const jobSlice = createSlice({
    name: 'job',
    initialState: {
        jobList: [],
    },
    reducers: {
        addJob: (state, action) => {
            state.jobList.push(action.payload);
        },
        updateJob(state, action) {
            const { id, ...updates } = action.payload;
            const jobIndex = state.jobList.findIndex(job => job.id === id);
            if (jobIndex !== -1) {
              state.jobList[jobIndex] = { ...state.jobList[jobIndex], ...updates };
            }
          },
          deleteJob(state, action) {
            const jobId = action.payload;
            state.jobList = state.jobList.filter(job => job.id !== jobId);
          },
          setInitialJobs: (state, action) => {
            state.jobList = action.payload;
          }
    },
});

export const {addJob,updateJob,deleteJob,setInitialJobs  } = jobSlice.actions;
export default jobSlice.reducer;

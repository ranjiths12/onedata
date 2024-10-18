import { createSlice } from '@reduxjs/toolkit';

const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        applicationList: [],
    },
    reducers: {
        addApplication: (state, action) => {
            state.applicationList.push(action.payload);
        },
        updateApplication(state, action) {
            const { id, ...updates } = action.payload;
            const applicationIndex = state.applicationList.findIndex(application => application.id === id);
            if (applicationIndex !== -1) {
                state.applicationList[applicationIndex] = { ...state.applicationList[applicationIndex], ...updates };
            }
        },
        deleteApplication(state, action) {
            const applicationId = action.payload;
            state.applicationList = state.applicationList.filter(application => application.id !== applicationId);
        },
        setInitialApplications: (state, action) => {
            state.applicationList = action.payload;
        }
    },
});

export const { addApplication, updateApplication, deleteApplication, setInitialApplications } = applicationSlice.actions;
export default applicationSlice.reducer;

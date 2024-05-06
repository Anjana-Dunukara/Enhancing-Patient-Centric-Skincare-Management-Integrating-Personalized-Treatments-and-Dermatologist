import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questionInfo: localStorage.getItem('questionInfo')
    ? JSON.parse(localStorage.getItem('questionInfo'))
    : null,
};

const questionsSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload);
      state.questionInfo = action.payload;
      localStorage.setItem('questionInfo', JSON.stringify(action.payload));
    },
  },
});

export const { setCredentials } = questionsSlice.actions;

export default questionsSlice.reducer;

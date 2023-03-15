import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  wordsGame: () => { },
};

export const GameSlice = createSlice({
  name: "game",
  initialState: {
    points: {},
    term: '',
    response: ''
  },
  reducers: {
    setPoints(state, action) {
      state.points = action.payload;
    },

    setSearchTerm(state, action) {
      state.term = action.payload;
    },

    setResetForm(state) {
      state.term = null;
    },

    setResponse(state, action) {
      state.response = action.payload.response
    },

    ...middlewareActions,
  },
});

export const {
  wordsGame,
  setPoints,
  setSearchTerm,
  setResetForm,
  setResponse
} = GameSlice.actions;

export default GameSlice.reducer;

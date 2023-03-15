const selectPoints = (state) => state.game.points;

const selectSearchTerm = (state) => state.game.term;

const selectResponse = (state) => state.game.response;

export {
  selectPoints,
  selectSearchTerm,
  selectResponse
};

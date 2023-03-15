import { put, call, takeLatest, take } from "redux-saga/effects";
import { gameService } from "../../services/WordsGameServices";
import {
  wordsGame,
  setPoints,
  setResponse,
  setResetForm
} from "./slice";

function* wordsGameHandler(action) {
  try {
    const response = yield call(gameService.wordsGame, action.payload.term);
    yield put(setPoints(response));
    yield put(setResetForm())
    yield put(setResponse(response));
  } catch (e) {
    console.log(e);
  }
}

export function* watchForGameSagas() {
  yield takeLatest(wordsGame.type, wordsGameHandler);
}

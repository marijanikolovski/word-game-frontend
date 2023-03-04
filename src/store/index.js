import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./game/slice";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        game: gameReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}

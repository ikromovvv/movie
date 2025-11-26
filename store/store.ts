import { configureStore } from "@reduxjs/toolkit"
import moviesReducer from "./slices/moviesSlice"
import filterReducer from "./slices/filterSlice"
import headerSlice from "@/store/slices/headerSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    filter: filterReducer,
    header: headerSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

import { configureStore } from '@reduxjs/toolkit'
import { Socket } from '../utils/socket'
// import { socketMiddleware } from './middleware/socketMiddleware'
import priceSlice from '../store/slices/marketPriceSlice'
import { multiSocketMiddleware } from './middleware/multiSocketMiddleware'


export const store = configureStore({
    reducer: {
        price: priceSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(multiSocketMiddleware(new Socket())),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from './authentication/auth.service';
import authSlice from './authentication/auth.slice';
import { productApi } from './product';
import toastSlice from './toast';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    auth: authSlice.reducer,
    toast: toastSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(productApi.middleware),
});


setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
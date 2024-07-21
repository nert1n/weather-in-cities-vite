import { configureStore, EnhancedStore } from "@reduxjs/toolkit";

import authReducer, { IAuthState } from "./slices/authSlice";
import cityReducer, { ICityState } from "./slices/citySlice";

export const store: EnhancedStore<{ city: ICityState; auth: IAuthState }> =
  configureStore({
    reducer: {
      auth: authReducer,
      city: cityReducer,
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

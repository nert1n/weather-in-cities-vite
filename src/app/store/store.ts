import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import citySlice, { ICityState } from "./slices/citySlice";
import authSlice, { IAuthState } from "./slices/authSlice";

export const store: EnhancedStore<{ city: ICityState; auth: IAuthState }> =
  configureStore({
    reducer: {
      city: citySlice,
      auth: authSlice,
    },
  });

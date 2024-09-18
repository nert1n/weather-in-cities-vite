import { configureStore, EnhancedStore } from "@reduxjs/toolkit";

import authReducer, { IAuthState } from "./slices/auth-slice.ts";
import cityReducer, { ICityState } from "./slices/city-slice.ts";

export const store: EnhancedStore<{ city: ICityState; auth: IAuthState }> =
	configureStore({
		reducer: {
			auth: authReducer,
			city: cityReducer,
		},
	});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

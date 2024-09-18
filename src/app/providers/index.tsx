import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import IProviders from "./providers.interface.ts";
import { store } from "../store/store.ts";

const Providers = ({ children }: IProviders) => {
	const queryClient = new QueryClient();

	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</Provider>
	);
};

export default Providers;

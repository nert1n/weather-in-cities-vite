import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import { IProviders } from "./providers.interface";
import { store } from "../store/store";

const Providers = ({ children }: IProviders) => {
	const queryClient = new QueryClient();

	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</Provider>
	);
};

export default Providers;

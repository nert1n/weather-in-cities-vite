import IProviders from "./providers.interface.ts";
import { Provider } from "react-redux";
import { store } from "../store/store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({ children }: IProviders) => {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

export default Providers;

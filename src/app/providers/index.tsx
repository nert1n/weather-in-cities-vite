import IProviders from "./providers.interface.ts";
import Layout from "../layout";
import { Provider } from "react-redux";
import { store } from "../store/store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({ children }: IProviders) => {
  const queryClient = new QueryClient();

  return (
    <div>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Layout>{children}</Layout>
        </QueryClientProvider>
      </Provider>
    </div>
  );
};

export default Providers;

import IProviders from "./providers.interface.ts";
import Layout from "../layout";

const Providers = ({ children }: IProviders) => {
  return (
    <div>
      <Layout>{children}</Layout>
    </div>
  );
};

export default Providers;

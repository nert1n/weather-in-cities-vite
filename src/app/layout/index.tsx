import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import ILayout from "./layout.interface.ts";

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

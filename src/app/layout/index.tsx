import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import ILayout from "./layout.interface.ts";

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

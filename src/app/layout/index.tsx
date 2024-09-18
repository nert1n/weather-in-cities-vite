import ILayout from "./layout.interface.ts";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";

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

import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "@shared/lib/ui/components/loader";
import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</>
	);
};

export default Layout;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ComponentsForAll/Navbar";
import Footer from "./components/ComponentsForAll/Footer";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Integration from "./pages/Integration";
import Price from "./pages/Price";
import ChangeLog from "./pages/ChangeLog";

function WrapAllComponent({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}

const routes = [
	{ path: "/", component: <Home /> },
	{ path: "/about", component: <About /> },
	{ path: "/integration", component: <Integration /> },
	{ path: "/price", component: <Price /> },
	{ path: "/changelog", component: <ChangeLog /> },
];

export default function App() {
	return (
		<Router>
			<Routes>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						element={
							<React.Fragment>
								<WrapAllComponent children={route.component}></WrapAllComponent>
							</React.Fragment>
						}
					/>
				))}
				<Route
					path="*"
					element={<div className="text-white">Not found this page</div>}
				></Route>
			</Routes>
		</Router>
	);
}

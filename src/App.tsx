import "./App.css";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/All/Navbar";
import Footer from "./components/All/Footer";
import LastComponent from "./components/All/LastComponent";
import { ReactElement } from "react";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Integration from "./pages/Integration";
import Price from "./pages/Price";
import ChangeLog from "./pages/ChangeLog";

function WrapAllComponent({ children }: { children: ReactElement }) {
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
		<BrowserRouter>
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
		</BrowserRouter>
	);
}

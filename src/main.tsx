import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import PortfolioDetail from "./pages/PortfolioDetail";
import ProjectDetail from "./pages/ProjectDetail";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/portfolio/",
		element: <App />,
		children: [
			{
				path: "/portfolio/",
				element: <Index />,
			},
			{
				path: "/portfolio/projects/:id",
				element: <ProjectDetail />,
			},
			{
				path: "/portfolio/models/:id",
				element: <PortfolioDetail />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

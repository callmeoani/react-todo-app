import { createBrowserRouter, RouterProvider } from "react-router";
// import Layout from "./layouts/Layout";
import Layout from "./layouts/Layout";
import PrimaryLayout from "./layouts/PrimaryLayout";
import LandingRoutes from "./routes/LandingRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [LandingRoutes],
  },
  {
    path: "/dashboard",
    element: <PrimaryLayout />,
    children: [DashboardRoutes],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;

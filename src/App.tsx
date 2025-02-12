import { createBrowserRouter, RouterProvider } from "react-router";
// import Layout from "./layouts/Layout";
import PrimaryLayout from "./layouts/PrimaryLayout";
import LandingRoutes from "./routes/LandingRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [LandingRoutes],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;

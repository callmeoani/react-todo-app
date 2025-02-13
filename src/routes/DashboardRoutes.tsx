import { Outlet, RouteObject } from "react-router";
import DashboardPage from "../pages/dashboard";
import SettingsPage from "../pages/dashboard/settings";
import VitalTasksPage from "../pages/dashboard/vital-tasks";
import MyTaskPage from "../pages/dashboard/my-task";
import TaskCategoriesPage from "../pages/dashboard/task-categories";
import HelpPage from "../pages/dashboard/help";

const DashboardRoutes: RouteObject = {
  path: "/dashboard",
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <DashboardPage />,
    },
    {
      path: "settings",
      element: <SettingsPage />,
    },
    {
      path: "vital-task",
      element: <VitalTasksPage />,
    },
    {
      path: "my-task",
      element: <MyTaskPage />,
    },
    {
      path: "task-categories",
      element: <TaskCategoriesPage />,
    },
    {
      path: "help",
      element: <HelpPage />,
    },
  ],
};

export default DashboardRoutes;

import { Outlet, RouteObject } from "react-router";

import { lazy } from "react";

const DashboardPageComponent = lazy(() => import("../pages/dashboard"));
const SettingsPageComponent = lazy(() => import("../pages/dashboard/settings"));
const VitalTasksPageComponent = lazy(
  () => import("../pages/dashboard/vital-tasks")
);
const MyTaskPageComponent = lazy(() => import("../pages/dashboard/my-task"));
const TaskCategoriesPageComponent = lazy(
  () => import("../pages/dashboard/task-categories")
);
const HelpPageComponent = lazy(() => import("../pages/dashboard/help"));

const DashboardRoutes: RouteObject = {
  path: "/dashboard",
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <DashboardPageComponent />,
    },
    {
      path: "settings",
      element: <SettingsPageComponent />,
    },
    {
      path: "vital-task",
      element: <VitalTasksPageComponent />,
    },
    {
      path: "my-task",
      element: <MyTaskPageComponent />,
    },
    {
      path: "task-categories",
      element: <TaskCategoriesPageComponent />,
    },
    {
      path: "help",
      element: <HelpPageComponent />,
    },
  ],
};

export default DashboardRoutes;

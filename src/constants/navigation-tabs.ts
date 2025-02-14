import DashboardIconComp from "../assets/comps/DashboardIconComp";
import HelpIconComp from "../assets/comps/HelpIconComp";
import MyTaskIconComp from "../assets/comps/MyTaskIconComp";
import SettingsIconComp from "../assets/comps/SettingsIconComp";
import TaskCategoriesIconComp from "../assets/comps/TaskCategoriesIconComp";
import VitalTaskIconComp from "../assets/comps/VitalTaskIconComp";

const NavigationTabs = [
  { name: "Dashboard", path: "/dashboard", icon: DashboardIconComp },
  {
    name: "Vital Task",
    path: "/dashboard/vital-task",
    icon: VitalTaskIconComp,
  },
  { name: "My Task", path: "/dashboard/my-task", icon: MyTaskIconComp },
  {
    name: "Task Categories",
    path: "/dashboard/task-categories",
    icon: TaskCategoriesIconComp,
  },
  { name: "Settings", path: "/dashboard/settings", icon: SettingsIconComp },
  { name: "Help", path: "/dashboard/help", icon: HelpIconComp },
];

export default NavigationTabs;

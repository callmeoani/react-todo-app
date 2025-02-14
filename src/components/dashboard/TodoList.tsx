import AddIcon from "../../assets/images/addIcon.svg";
import TodoIcon from "../../assets/images/todoIcon.svg";
import { todoTasksData } from "../../data/todo-tasks-data";
import TaskSummaryCard from "../common/TaskSummaryCard";

export default function TodoList() {
  return (
    <div className="px-[12px] py-[12px] xl:px-[23px] xl:py-[20px] ">
      <div className="flex justify-between items-center">
        <div className="flex itemss-center gap-0.5">
          <img src={TodoIcon} alt="" />
          <span className="text-sm text-primary pt-1">To-Do</span>
        </div>
        <button className="flex items-center gap-1">
          <img src={AddIcon} alt="add new task" />
          <span className="text-grey-light text-xs">Add task</span>
        </button>
      </div>
      <p className="text-xs">
        20 June <span className="text-grey-light">.Today</span>
      </p>
      <ul className="flex flex-col gap-4">
        {todoTasksData.map((item) => (
          <li key={item.id}>
            <TaskSummaryCard
              title={item.title}
              status={item.status}
              objective={item.objective}
              priority={item.priority}
              createdOn={item.createdOn}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

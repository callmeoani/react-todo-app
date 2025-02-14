import Container from "../../components/common/Container";
import CompletedTaskList from "../../components/dashboard/CompletedTaskList";
import TaskStatus from "../../components/dashboard/TaskStatus";
import TodoList from "../../components/dashboard/TodoList";

export default function DashboardPage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex justify-between">
        <div>Welcome back, Amid!</div>
        <div>
          <p>images</p>
        </div>
      </div>
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="shadow-lg flex-1 w-full">
            <TodoList />
          </div>
          <div className="flex-1">
            <TaskStatus />
            <CompletedTaskList />
          </div>
        </div>
      </Container>
    </div>
  );
}

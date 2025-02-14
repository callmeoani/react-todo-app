import TaskImage from "../../assets/images/taskImage.png";

type TaskSummaryCardTypes = {
  title: string;
  status: string;
  objective: string;
  priority: string;
  createdOn: string;
};
export default function TaskSummaryCard({
  title,
  status,
  objective,
  priority,
  createdOn,
}: TaskSummaryCardTypes) {
  return (
    <div className="px-[16px] py-[8px] rounded-[14px] border-solid border-[1px] border-[#A1A3AB] flex gap-[15px] ">
      <div className="">O</div>
      <div className="flex flex-col flex-1">
        <div className="flex">
          <div className="flex-1">
            <p>{title}</p>
            <p>{objective}</p>
          </div>
          <img src={TaskImage} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-[8px]">
            <p>Priority: {priority}</p>
            <p>
              Status: <span>{status}</span>
            </p>
          </div>
          <p>Created on: {createdOn}</p>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import InputWithIcon from "./ui/common/components/InputWithIcon";
import PrimaryButton from "./ui/common/components/PrimaryButton";
import TaskSummaryCard from "./ui/common/components/TaskSummaryCard";

function App() {
  const [firstName, setFirstName] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<string>("");
  return (
    <>
      <h1>Hello world!</h1>
      <div>===========</div>
      {/* <InputWithIcon
        // placeholder="Enter First Name"
        title="firstName"
        error={firstNameError}
        value={firstName}
        setValue={setFirstName}
        // icon="./src/assets/firstNameIcon.svg"
        label="First Name"
      /> */}
      {/* <PrimaryButton label="Done" handleEvent={()=>{}} /> */}
      <TaskSummaryCard
        title="Submit Documents"
        objective="Make sure to submit all the..."
        priority={"moderate"}
        status="Not Started"
        createdOn={"20/06/2023"}
      />
    </>
  );
}
export default App;

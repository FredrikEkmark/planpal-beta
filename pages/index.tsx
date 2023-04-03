import { NextPage } from "next"
import tempGetTaskData from "@/components/tempGetTaskData"
import DisplayTasksDashboard from "@/components/displayTask/displayTaskDashboard"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <DisplayTasksDashboard data={tempGetTaskData()}></DisplayTasksDashboard>
    </div>
  )
}

export default Index

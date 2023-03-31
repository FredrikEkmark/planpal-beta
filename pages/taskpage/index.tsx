import DisplayTasks from "@/components/displayTask"
import tempGetTaskData from "@/components/tempGetTaskData"
import { NextPage } from "next"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <DisplayTasks data={tempGetTaskData()}></DisplayTasks>
    </div>
  )
}

export default Index

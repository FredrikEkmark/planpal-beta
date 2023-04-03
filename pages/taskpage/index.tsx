import DisplayTasksTaskPage from "@/components/displayTask/displayTasksTaskPage"
import tempGetTaskData from "@/components/tempGetTaskData"
import { NextPage } from "next"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <DisplayTasksTaskPage data={tempGetTaskData()}></DisplayTasksTaskPage>
    </div>
  )
}

export default Index

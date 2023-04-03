import DisplayTaskCategories from "@/components/displayTask/displayTaskCategories"
import DisplayTasksTaskPage from "@/components/displayTask/displayTasksTaskPage"
import tempGetTaskData from "@/components/tempGetTaskData"
import { NextPage } from "next"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <DisplayTasksTaskPage data={tempGetTaskData()}></DisplayTasksTaskPage>
      <DisplayTaskCategories
        data={tempGetTaskData()}
        categories={["skola", "fritid", "övrigt"]}
      ></DisplayTaskCategories>
    </div>
  )
}

export default Index

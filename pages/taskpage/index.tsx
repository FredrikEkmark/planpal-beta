import DisplayTaskCategories from "@/components/displayTask/displayTaskCategories"
import DisplayTasksTaskPage from "@/components/displayTask/displayTasksTaskPage"
import tempGetTaskData from "@/components/tempGetTaskData"
import { NextPage } from "next"
import NavBar from "@/components/navBar"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <DisplayTasksTaskPage data={tempGetTaskData()}></DisplayTasksTaskPage>
      <DisplayTaskCategories
        data={tempGetTaskData()}
        categories={["skola", "fritid", "övrigt"]}
      ></DisplayTaskCategories>
      <NavBar />
    </div>
  )
}

export default Index

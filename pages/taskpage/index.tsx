import DisplayTaskCategories from "@/components/displayTask/displayTaskCategories"
import DisplayTasksTaskPage from "@/components/displayTask/displayTasksTaskPage"
import { NextPage } from "next"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <DisplayTasksTaskPage></DisplayTasksTaskPage>
      <DisplayTaskCategories
        categories={["skola", "fritid", "övrigt"]}
      ></DisplayTaskCategories>
    </div>
  )
}

export default Index

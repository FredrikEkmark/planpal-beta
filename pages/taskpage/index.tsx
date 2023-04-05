import DisplayTaskCategories from "@/components/displayTask/displayTaskCategories"
import DisplayTasksTaskPage from "@/components/displayTask/displayTasksTaskPage"
import { NextPage } from "next"
import NavBar from "@/components/navBar"
import Header from "@/components/header"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <Header />
      <DisplayTasksTaskPage></DisplayTasksTaskPage>
      <DisplayTaskCategories
        categories={["skola", "fritid", "övrigt"]}
      ></DisplayTaskCategories>
      <NavBar />
    </div>
  )
}

export default Index

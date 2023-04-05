import AddTaskCard from "@/components/addTaskCard"
import NavBar from "@/components/navBar"
import { NextPage } from "next"

interface Props {}

const AddTaskPage: NextPage<Props> = ({}) => {
  return (
    <div>
      <AddTaskCard></AddTaskCard>
      <NavBar />
    </div>
  )
}

export default AddTaskPage

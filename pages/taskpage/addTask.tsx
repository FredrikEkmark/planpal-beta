import NavBar from "@/components/navBar"
import { NextPage } from "next"

interface Props {}

const AddTask: NextPage<Props> = ({}) => {
  return (
    <div>
      Add New Task
      <NavBar />
    </div>
  )
}

export default AddTask

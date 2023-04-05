import { NextPage } from "next"
import DisplayTasksDashboard from "@/components/displayTask/displayTaskDashboard"
import NavBar from "@/components/navBar"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <DisplayTasksDashboard></DisplayTasksDashboard>
      <NavBar />
    </div>
  )
}

export default Index

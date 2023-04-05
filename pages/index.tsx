import { NextPage } from "next"
import DisplayTasksDashboard from "@/components/displayTask/displayTaskDashboard"
import NavBar from "@/components/navBar"
import Header from "@/components/header"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <Header />
      <DisplayTasksDashboard></DisplayTasksDashboard>
      <NavBar />
    </div>
  )
}

export default Index

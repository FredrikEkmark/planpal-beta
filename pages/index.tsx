import { NextPage } from "next"
import DisplayTasksDashboard from "@/components/displayTask/displayTaskDashboard"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <DisplayTasksDashboard></DisplayTasksDashboard>
    </div>
  )
}

export default Index

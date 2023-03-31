import { NextPage } from "next"
import DisplayTasks from "@/components/displayTask"
import { useState } from "react"
import tempGetTaskData from "@/components/tempGetTaskData"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <DisplayTasks data={tempGetTaskData()}></DisplayTasks>
    </div>
  )
}

export default Index

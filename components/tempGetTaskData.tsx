import React, { useState } from "react"

function tempGetTaskData() {
  const [tasksList, setTasksList] = useState([
    {
      id: 1,
      title: "Gå ut med Hunden!",
      description: "Gå ut med hunden så den inte blir fet",
      date: 20230328,
    },
    {
      id: 2,
      title: "Tandläkaren!",
      description: "Fixa tänderna",
      date: 20230328,
    },
    {
      id: 3,
      title: "Löptur!",
      description: "Spring lite så du inte blir fet",
      date: 20230328,
    },
  ])
  return tasksList
}

export default tempGetTaskData

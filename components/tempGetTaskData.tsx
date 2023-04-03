import React, { useState } from "react"

function tempGetTaskData() {
  const [tasksList, setTasksList] = useState([
    {
      id: 1,
      title: "Gå ut med Hunden!",
      description: "Gå ut med hunden så den inte blir fet",
      date: "2023-03-28",
      category: "skola",
    },
    {
      id: 2,
      title: "Tandläkaren!",
      description: "Fixa tänderna",
      date: "2023-03-28",
      category: "skola",
    },
    {
      id: 3,
      title: "Löptur!",
      description: "Spring lite så du inte blir fet",
      date: "2023-03-29",
      category: "skola",
    },
  ])
  return tasksList
}

export default tempGetTaskData

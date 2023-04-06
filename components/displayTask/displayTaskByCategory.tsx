import { UserContext } from "@/context/user-context-provider"
import { useContext, useEffect, useState } from "react"

interface Item {
  date: string
  id: number
  description: string
  title: string
  category: string
  done: boolean
}

interface Props {
  category: any
}

const DisplayTasksByCategory = (props: Props) => {
  // change to a today read in when we have a more dynamic database
  const specificDate = new Date("2023-03-28").toISOString().slice(0, 10)

  const { taskList, setTaskList } = useContext(UserContext)

  const [data, setData] = useState<Item[]>([])

  useEffect(() => {
    if (props.category === "all") {
      setData(taskList.tasks)
    } else {
      setData(taskList.tasks.filter((item) => item.category === props.category))
    }
  }, [props.category, taskList.tasks])

  const todayData = data.filter((item) => item.date === specificDate)

  const todayTitles = todayData.map((item) => (
    <div className=" border-b border-black" key={item.id}>
      <input
        className=" mr-3"
        type="checkbox"
        id={`task_${item.id}`}
        name={item.title}
        value={item.id}
      />
      <label htmlFor={`task_${item.id}`}>{item.title}</label>
    </div>
  ))

  const comingData = data.filter((item) => item.date > specificDate)

  const comingTitles = comingData.map((item) => (
    <div className=" border-b border-black" key={item.id}>
      <input
        className=" mr-3"
        type="checkbox"
        id={`task_${item.id}`}
        name={item.title}
        value={item.id}
        checked={item.done}
        onChange={(event) => {
          const updatedTasks = data.map((task) =>
            task.id === item.id ? { ...task, done: event.target.checked } : task
          )
          const updatedTaskList = {
            tasks: updatedTasks,
            categorys: taskList.categorys,
          }
          setTaskList(updatedTaskList)
        }}
      />
      <label htmlFor={`task_${item.id}`}>{item.title}</label>
      <br />
      <p>
        {new Date(item.date).getDate()}{" "}
        {new Date(item.date).toLocaleString("sv-SE", { month: "short" })}
      </p>
    </div>
  ))

  return (
    <div>
      <div className="max-w-sm bg-slate-400 p-4">
        <div>Today</div>
        {todayTitles}
      </div>
      <div className="max-w-sm bg-slate-400 p-4">
        <div>Coming up</div>
        {comingTitles}
      </div>
    </div>
  )
}

export default DisplayTasksByCategory

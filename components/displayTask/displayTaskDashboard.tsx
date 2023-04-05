import { UserContext } from "@/context/user-context-provider"
import Link from "next/link"
import { useContext } from "react"

interface Item {
  date: string
  id: number
  title: string
  category: string
}

const DisplayTasksDashboard = () => {
  const specificDate = new Date("2023-03-28").toISOString().slice(0, 10)

  const { tasks } = useContext(UserContext)

  const data = tasks

  const todayData = data.filter((item) => item.date === specificDate)

  const titles = todayData.map((item) => (
    <div key={item.id}>
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
  return (
    <div>
      <div className="max-w-sm bg-slate-400 p-4">
        <div>Today&apos;s Tasks</div>
        {titles}
        <div>
          <Link href="/taskpage/addTaskPage">Add new task</Link>
        </div>
      </div>
    </div>
  )
}

export default DisplayTasksDashboard

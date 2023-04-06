import { UserContext } from "@/context/user-context-provider"
import Link from "next/link"
import { useContext } from "react"

const DisplayTasksTaskPage = () => {
  // change to a today read in when we have a more dynamic database
  const specificDate = new Date("2023-03-28").toISOString().slice(0, 10)

  const { taskList, setTaskList } = useContext(UserContext)

  const data = taskList.tasks

  const todayData = data.filter((item) => item.date === specificDate)

  const titles = todayData.map((item) => (
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
    </div>
  ))
  return (
    <div>
      <div className="max-w-sm bg-slate-400 p-4">
        <div>Today</div>
        {titles}
        <div>
          <Link href="/taskpage/addTaskPage">Add new task</Link>
        </div>
      </div>
    </div>
  )
}

export default DisplayTasksTaskPage

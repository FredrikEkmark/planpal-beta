import Link from "next/link"

interface Item {
  id: number
  title: string
}

interface Props {
  data: Item[]
}

const DisplayTasks = (props: Props) => {
  const data = props.data
  const titles = data.map((item) => (
    <div key={item.id}>
      <input
        type="checkbox"
        id={`task_${item.id}`}
        name={item.title}
        value={item.id}
      />
      <label htmlFor={`task_${item.id}`}>{item.title}</label>
    </div>
  ))
  return (
    <div className="max-w-sm bg-slate-400 p-4">
      <div>Today's Tasks</div>
      {titles}
      <div>
        <Link href="/taskpage/addTask">Add new task</Link>
      </div>
    </div>
  )
}

export default DisplayTasks

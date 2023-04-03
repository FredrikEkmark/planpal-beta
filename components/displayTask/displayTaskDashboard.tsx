import Link from "next/link"

interface Item {
  date: string
  id: number
  title: string
  category: string
}

interface Props {
  data: Item[]
}

const DisplayTasksDashboard = (props: Props) => {
  // change to a today read in when we have a more dynamic database
  const specificDate = new Date("2023-03-28").toISOString().slice(0, 10)

  const data = props.data

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
        <div>Today's Tasks</div>
        {titles}
        <div>
          <Link href="/taskpage/addTask">Add new task</Link>
        </div>
      </div>
    </div>
  )
}

export default DisplayTasksDashboard

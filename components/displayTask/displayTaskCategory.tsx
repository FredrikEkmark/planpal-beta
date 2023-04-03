import Link from "next/link"

interface Item {
  date: string
  id: number
  title: string
  category: string
}

interface Props {
  data: Item[]
  category: any
}

const DisplayTasksCategory = (props: Props) => {
  // change to a today read in when we have a more dynamic database
  const specificDate = new Date("2023-03-28").toISOString().slice(0, 10)

  const data = props.data.filter((item) => item.category === props.category)

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

export default DisplayTasksCategory

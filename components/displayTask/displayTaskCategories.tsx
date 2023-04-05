import { UserContext } from "@/context/user-context-provider"
import Link from "next/link"
import { useState, useEffect, useContext } from "react"

interface Item {
  date: string
  id: number
  title: string
  category: string
}

interface Props {
  categories: string[]
}

const DisplayTasksCategories = (props: Props) => {
  type ButtonType = {
    category: string
    count: number
  }
  const [buttons, setButtons] = useState<ButtonType[]>([])

  const { tasks } = useContext(UserContext)

  const [categories, setCategories] = useState<string[]>(props.categories)

  useEffect(() => {
    const newButtons = categories.map((buttonCategory) => {
      const count = tasks.filter(
        (item) => item.category === buttonCategory
      ).length
      return {
        category: buttonCategory,
        count: count,
      }
    })
    setButtons(newButtons)
  }, [])

  return (
    <div>
      <div>Categories</div>
      {buttons.map((button) => (
        <div key={button.category} className="max-w-sm bg-slate-400 p-4">
          <Link href={`/taskpage/${button.category}`}>
            {button.category.charAt(0).toUpperCase() + button.category.slice(1)}{" "}
            ({button.count})
          </Link>
        </div>
      ))}
      <div key={"all"} className="max-w-sm bg-slate-400 p-4">
        <Link href={`/taskpage/${"all"}`}>
          {"All"} ({tasks.length})
        </Link>
      </div>
    </div>
  )
}

export default DisplayTasksCategories

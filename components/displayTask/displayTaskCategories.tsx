import Link from "next/link"
import { useState, useEffect } from "react"

interface Item {
  date: string
  id: number
  title: string
  category: string
}

interface Props {
  data: Item[]
  categories: string[]
}

const DisplayTasksCategories = (props: Props) => {
  type ButtonType = {
    category: string
    count: number
  }
  const [buttons, setButtons] = useState<ButtonType[]>([])

  useEffect(() => {
    const newButtons = props.categories.map((buttonCategory) => {
      const count = props.data.filter(
        (item) => item.category === buttonCategory
      ).length
      return {
        category:
          buttonCategory.charAt(0).toUpperCase() + buttonCategory.slice(1),
        count: count,
      }
    })
    setButtons(newButtons)
  }, [])

  return (
    <div>
      {buttons.map((button) => (
        <div className="max-w-sm bg-slate-400 p-4">
          <Link key={button.category} href={`/taskpage/${button.category}`}>
            {button.category} ({button.count})
          </Link>
        </div>
      ))}
    </div>
  )
}

export default DisplayTasksCategories

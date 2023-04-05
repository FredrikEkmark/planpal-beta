import DisplayTaskByCategory from "@/components/displayTask/displayTaskByCategory"
import { NextPage } from "next"
import { useRouter } from "next/router"

interface Props {}

const Category: NextPage<Props> = ({}) => {
  const router = useRouter()
  const value = router.query.category
  return (
    <div>
      <DisplayTaskByCategory category={value}></DisplayTaskByCategory>
    </div>
  )
}

export default Category

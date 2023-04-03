import DisplayTaskByCategory from "@/components/displayTask/displayTaskByCategory"
import tempGetTaskData from "@/components/tempGetTaskData"
import { NextPage } from "next"
import { useRouter } from "next/router"

interface Props {}

const Category: NextPage<Props> = ({}) => {
  const router = useRouter()
  const value = router.query.category
  return (
    <div>
      <DisplayTaskByCategory
        data={tempGetTaskData()}
        category={value}
      ></DisplayTaskByCategory>
    </div>
  )
}

export default Category

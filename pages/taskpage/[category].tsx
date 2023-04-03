import DisplayTaskCategory from "@/components/displayTask/displayTaskCategory"
import tempGetTaskData from "@/components/tempGetTaskData"
import { NextPage } from "next"
import { useRouter } from "next/router"

interface Props {}

const Category: NextPage<Props> = ({}) => {
  const router = useRouter()
  const value = router.query.category
  return (
    <div>
      <DisplayTaskCategory
        data={tempGetTaskData()}
        category={value}
      ></DisplayTaskCategory>
    </div>
  )
}

export default Category

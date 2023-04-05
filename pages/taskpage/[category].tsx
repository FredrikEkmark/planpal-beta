import DisplayTaskByCategory from "@/components/displayTask/displayTaskByCategory"
import NavBar from "@/components/navBar"
import { NextPage } from "next"
import { useRouter } from "next/router"

interface Props {}

const Category: NextPage<Props> = ({}) => {
  const router = useRouter()
  const value = router.query.category
  return (
    <div>
      <DisplayTaskByCategory category={value}></DisplayTaskByCategory>
      <NavBar />
    </div>
  )
}

export default Category

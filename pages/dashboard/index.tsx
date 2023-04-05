import { NextPage } from "next"
import NavBar from "@/components/navBar"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <>
      <div>
        <NavBar />
      </div>
    </>
  )
}

export default Index

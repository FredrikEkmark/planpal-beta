import { NextPage } from "next"
import NavBar from "@/components/navBar"
import Header from "@/components/header"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <>
      <Header />
      <NavBar />
    </>
  )
}

export default Index

import { UserContext } from "@/context/user-context-provider"
import { Button } from "@mui/material"
import Link from "next/link"
import { useContext, useState } from "react"

const AddTaskCard = () => {
  const [inputTitle, setInputTitle] = useState<string>("")
  const [inputDescription, setInputDescription] = useState<string>("")
  const [inputDate, setInputDate] = useState<string>("")
  const [inputCategory, setInputCategory] = useState<string>("")
  const [inputReminder, setInputReminder] = useState<string>("")
  const { addTask } = useContext(UserContext)

  function addTaskContext() {
    addTask({
      id: 0,
      date: inputDate,
      title: inputTitle,
      description: inputDescription,
      category: inputCategory,
      done: false,
    })
  }

  return (
    <div className=" bg-slate-400">
      <input
        type="text"
        placeholder="Write a task"
        onChange={(input) => {
          setInputTitle(input.target.value)
        }}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(input) => {
          setInputDescription(input.target.value)
        }}
      />
      <br></br>
      <br></br>
      <label htmlFor="date">Date: </label> <br></br>
      <input
        type="date"
        name="date"
        onChange={(input) => {
          setInputDate(input.target.value)
        }}
      />
      <br></br>
      <br></br>
      <label htmlFor="category">Category: </label> <br></br>
      <select
        name="category"
        onChange={(input) => {
          setInputCategory(input.target.value)
        }}
      >
        <option value="skola">Skola</option>
        <option value="fritid">Fritid</option>
        <option value="övrigt">Övrigt</option>
      </select>
      <br></br>
      <Link href="/taskpage/">
        <Button
          color="primary"
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => {
            addTaskContext()
          }}
        >
          Save
        </Button>
      </Link>
    </div>
  )
}

export default AddTaskCard

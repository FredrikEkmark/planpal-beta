import TempGetTaskData from "@/components/tempGetTaskData"
import { ReactNode, useState, createContext } from "react"

// boilerplate
interface UserProviderProps {
  children: ReactNode
}

interface TaskList {
  tasks: Task[]
  categorys: string[]
}

interface Task {
  date: string
  id: number
  title: string
  description: string
  category: string
  done: boolean
}

interface Calendar {
  id: number
}

interface UserContextProps {
  username: string
  password: string
  taskList: TaskList
  calendar: Calendar

  setUsername: (username: string) => void
  setPassword: (password: string) => void
  setTaskList: (taskList: TaskList) => void
  addTask: (task: Task) => void
  setCalendar: (calendar: Calendar) => void
}

// Default

const initialTaskList = {
  tasks: TempGetTaskData(),
  categorys: ["skola", "fritid", "övrigt"],
}

const initialUserContext: UserContextProps = {
  username: "",
  password: "",
  taskList: initialTaskList,
  calendar: { id: 0 },
  setUsername: () => {},
  setPassword: () => {},
  setTaskList: () => {},
  addTask: () => {},
  setCalendar: () => {},
}

export const UserContext = createContext<UserContextProps>(initialUserContext)

const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [taskList, setTaskList] = useState<TaskList>(initialTaskList) // This should be changed to Database later
  const [calendar, setCalendar] = useState<Calendar>({ id: 0 })

  // Connect
  const contextValue: UserContextProps = {
    username,
    password,
    taskList,
    calendar,
    setUsername: (username: string) => setUsername(username),
    setPassword: (password: string) => setPassword(password),
    setTaskList: (taskList: TaskList) => setTaskList(taskList),
    setCalendar: (calendar: Calendar) => setCalendar(calendar),
    addTask: (task: Task) => {
      setTaskList((taskList) => ({
        ...taskList,
        tasks: [...taskList.tasks, task],
      }))
    },
  }
  return <UserContext.Provider value={contextValue} children={children} />
}

export default UserContextProvider

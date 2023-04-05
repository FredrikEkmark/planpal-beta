import TempGetTaskData from "@/components/tempGetTaskData"
import { ReactNode, useState, createContext } from "react"

// boilerplate
interface UserProviderProps {
  children: ReactNode
}

interface Task {
  date: string
  id: number
  title: string
  description: string
  category: string
}

interface Calendar {
  id: number
}

interface UserContextProps {
  username: string
  password: string
  tasks: Task[]
  calendar: Calendar
  setUsername: (username: string) => void
  setPassword: (password: string) => void
  setTasks: (tasks: Task[]) => void
  setCalendar: (calendar: Calendar) => void
}

// Default

const initialTasks = TempGetTaskData()

const initialUserContext: UserContextProps = {
  username: "",
  password: "",
  tasks: initialTasks,
  calendar: { id: 0 },
  setUsername: () => {},
  setPassword: () => {},
  setTasks: () => {},
  setCalendar: () => {},
}

export const UserContext = createContext<UserContextProps>(initialUserContext)

const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [tasks, setTasks] = useState<Task[]>(initialTasks) // This should be changed to Database later
  const [calendar, setCalendar] = useState<Calendar>({ id: 0 })

  // Connect
  const contextValue: UserContextProps = {
    username,
    password,
    tasks,
    calendar,
    setUsername: (username: string) => setUsername(username),
    setPassword: (password: string) => setPassword(password),
    setTasks: (tasks: Task[]) => {
      setTasks(tasks)
    },
    setCalendar: (calendar: Calendar) => {
      setCalendar(calendar)
    },
  }
  return <UserContext.Provider value={contextValue} children={children} />
}

export default UserContextProvider

import { useContext } from "react"
import Navbar from "./components/Navbar"
import { UserStore } from "./context/UserContext"
import Form from "./components/Form"
import UserCard from "./components/UserCard"

const App = () => {
  const {toggle,usersData} = useContext(UserStore)
  return (
    <div>
      <Navbar />
      {
        toggle ? <Form /> : usersData.length > 0 ? <div className="flex flex-wrap gap-4">
          {usersData.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div> : <p>No users found</p>
      }
    </div>
  )
}

export default App
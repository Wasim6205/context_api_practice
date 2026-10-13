import { createContext, useState } from "react";

// store
export const UserStore = createContext()

export const UserContextProvider = ({children}) => {
    const [toggle,setToggle] = useState(false)
    const [usersData,setUsersData] = useState([])
    const [isEditedUser,setIsEditedUser] = useState(null)

    const deleteUser = (id) => {
        const newUsersData = usersData.filter((user) => user.id !== id)
        setUsersData(newUsersData)
    }
    
    return <UserStore.Provider value={{toggle,setToggle,usersData,setUsersData,deleteUser,isEditedUser,setIsEditedUser}}>
        {children}
    </UserStore.Provider>
}
import { Navigate, Outlet } from 'react-router-dom'

const IfUserNotLogin = () => {
    const localData = localStorage.getItem("levitation-access-token")
    console.log("localData",localData)
  return (
    <div>
       {
        !localData ? <Outlet/> : <Navigate to={"/"}/>
       }
    </div>
  )
}

export default IfUserNotLogin

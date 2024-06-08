import { Navigate, Outlet } from "react-router-dom"

const RequiredUser = () => {
    const localData = localStorage.getItem("levitation-access-token")
    console.log('localData requried user',localData)
  return (
    <div>
      {
        localData ? <Outlet/> : <Navigate to={"/login"}/>
      }
    </div>
  )
}

export default RequiredUser

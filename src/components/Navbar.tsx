import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const localData = localStorage.getItem("levitation-access-token")
    const handleLogout = () =>{
       localStorage.removeItem("levitation-access-token")
       navigate("/login")
    }
  return (
    <>
     <div className='nav'>
       <NavLink className={({isActive}) => {return isActive ? "text-red" : "" }} to={"/"}>Home</NavLink>
       <NavLink className={({isActive}) => {return isActive ? "text-red" : "" }} to={"/cart"}>cart</NavLink>
       <NavLink className={({isActive}) => {return isActive ? "text-red" : "" }} to={"/profile"}>profile</NavLink>
       {
         !localData && <>
         <NavLink className={({isActive}) => {return isActive ? "text-red" : "" }} to={"/login"}>login</NavLink>
         <NavLink className={({isActive}) => {return isActive ? "text-red" : "" }} to={"/signup"}>signup</NavLink>
         </>
       }
       {localData && <button onClick={handleLogout}>logout</button>}
    </div>

    <Outlet/>
    </>
   
  )
}

export default Navbar

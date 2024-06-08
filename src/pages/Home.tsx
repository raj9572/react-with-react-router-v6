import { Outlet } from 'react-router-dom'

const Home = () => {
 
  return (
    <div className='container'>
      home page
      <Outlet/>
    </div>
  )
}

export default Home

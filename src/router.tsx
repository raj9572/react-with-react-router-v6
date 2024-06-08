
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.tsx';
import Cart from './pages/Cart.tsx';
import Profile from './pages/Profile.tsx';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';
import UserProfile from './components/UserProfile.tsx';
import Navbar from './components/Navbar.tsx';
import IfUserNotLogin from './components/IfUserNotLogin.tsx';
import RequiredUser from './components/RequiredUser.tsx';


export const router = createBrowserRouter([
    {
      element : <Navbar/>,
       children:[
        {
          element:<RequiredUser/>,
           children:[
            {
              path: "/",
              element:<>
              
               <Home/>
              </> ,
              errorElement:<>page not found</>,
              children:[
                {
                  path: "/cart",
                  element: <Cart/>,
                },
                {
                  path: "/profile",
                  element: <Profile/>,
                },
                {
                  path: "/profile/:profileId",
                  element: <UserProfile/>,
                },
              ]
            },
           ]
      
        },

        
        {
          element: <IfUserNotLogin/>,
          children:[
            {
              path: "/login",
              element: <Login/>,
            },
            {
              path: "/signup",
              element: <Signup/>,
            },
          ]
         },
       ]
    }
  ]);
  
  
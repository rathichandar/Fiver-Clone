import Navbar from "./components/navbar/Navbar"
import "./App.scss"
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Gigs from "./pages/gigs/Gigs";
import MyGigs from "./pages/myGigs/MyGigs";
import Orders from "./pages/orders/Orders";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import Success from "./pages/success/Success"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Pay from "./pages/pay/Pay";
function App() {
  const queryClient = new QueryClient()


  const Layout = ()=>{
    
    return (
      <>
         <QueryClientProvider client={queryClient}>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </QueryClientProvider>

       </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        
          {
            path:"/gigs",
            element:<Gigs/>
          },
          
            {
              path:"/gig/:id",
              element:<Gig/>
            }, 
             {
              path:"/mygigs",
              element:<MyGigs/>
            },
            
              {
                path:"/orders",
                element:<Orders/>
              },
              {
                path:"/add",
                element:<Add/>
              },
              {
                path:"/messages",
                element:<Messages/>
              },
              {
                path:"/message/:id",
                element:<Message/>
              },
              {
                path:"/register",
                element:<Register/>
              },
              {
                path:"/pay/:id",
                element:<Pay/>
              },
              {
                path:"/success",
                element:<Success/>
              },
      ]
    },
  ]);
 

  return (
    <div className="App">
       <RouterProvider router={router} />
   
    
    </div>
  )
}

export default App
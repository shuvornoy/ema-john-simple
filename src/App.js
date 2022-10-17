
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Main from './layouts/Main/Main';
import Shop from './components/Shop/Shop';
import Order from './components/Orders/Order';
import Manage from './components/Manage/Manage';
import Review from './components/Review/Review';
import { loader } from './loaders/Loader';
import About from './components/About/About';
import SingUp from './components/SingUp/SingUp';
import Shipping from './components/Shipping/Shipping';
import Privetaraoute from './components/routes/Privetaraoute';
import PrivetRoute from './components/routes/Privetaraoute';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader: () =>fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'order',
          loader: loader,
          element: <Order></Order>
        },
        {
          path: 'review',
          element: <Review></Review>
        },
        {
          path: 'manage',
          element: <Manage></Manage>
        },
        {
          path:'shipping',
          element: <PrivetRoute><Shipping /></PrivetRoute>
        },
        {
          path:'about',
          element:<About />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <SingUp />
        }
      ]

    },

    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

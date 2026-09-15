
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App.tsx';
import Header from './components/Header';
import './index.css';
import UserList from './pages/UserList.tsx';
import User from './components/User.tsx';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element : <Layout/>,
    children: [
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/userList",
      element: <UserList/>,
    },
    {
      path: "/user/:username",
      element: <User/>,
    }
  ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)


import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App.tsx';
import Header from './components/Header';
import Recipe from './components/Recipe.tsx';
import User from './components/User.tsx';
import './index.css';
import Connexion from './pages/Connexion.tsx';
import UserList from './pages/UserList.tsx';

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
      path: "/user/:id",
      element: <User/>,
    },
    {
      path: "/:id",
      element: <Recipe/>,
    },
    {
      path: "/connexion",
      element: <Connexion/>,
    }
  ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

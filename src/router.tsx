import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexView from "./views/IndexView";
import FavoritesView from "./views/FavoritesView";
import Layout from "./layout/Layout";


const router = createBrowserRouter([
    {
        path: "/",
        Component:Layout,
        children:[
            {index:true, Component:IndexView},
            {path:"favoritos", Component:FavoritesView}
        ],
    }
])

function AppRouter() {
  return (
    <RouterProvider router={router}/>
  ) 
}

export default AppRouter
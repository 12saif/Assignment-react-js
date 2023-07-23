import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Shoping from './Pages/Shoping/Shoping'; 
import API from "./Pages/ApiIntigration/API"; 
import "./App.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* ! Home page content  Using Outlet layout  */}
      {/* <Footer /> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shoping",
        element: <Shoping />,
      },
      {
        path: "/api",
        element: <API />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

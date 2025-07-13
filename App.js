import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
//import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ResMenu from "./src/components/ResMenu";
import Error from "./src/components/Error";
import UserContext from "./src/utils/UserContext";
import LoginUser from "./src/components/LoginUser";

const About = lazy(() => import("./src/components/About"));

const App = () => {
  const [user, setUser] = useState("Bhanu");

  return (
    <div>
      <UserContext.Provider value={{loggedInUser:user, setUser}}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <ResMenu />,
      },
      {
        path:"/login",
        element:<LoginUser />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

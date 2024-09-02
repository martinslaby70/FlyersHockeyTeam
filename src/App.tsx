import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { LandingPage } from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/shop",
    element: <>shop</>,
  },
  {
    path: "/schedule",
    element: <>Schedule</>,
  },
]);

function App() {
  return (
    <>
      <div
        className="
          h-screen w-full absolute top-0 left-0 -z-0
          before:content-['']
          before:absolute
          before:inset-0
          before:block
          before:bg-gradient-to-b
          before:from-transparent
          before:to-primary
          before:z-[-5]
          overflow-hidden
          bg-primary"
      >
        <img
          src="/assets/team.jpg"
          className="h-screen w-full bg-cover object-cover -z-10 absolute top-0 left-0 fade-in-image bg-primary"
          loading="lazy"
          unselectable="on"
          color="#000044E6"
        />
      </div>
      <div className="bg-primary w-full -z-0 ">
        <NavigationBar />

        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

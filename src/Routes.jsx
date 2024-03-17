import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import EduviCoursesDetails from "pages/EduviCoursesDetails";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "home", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <EduviCoursesDetails />,
    },
  ]);

  return element;
};

export default ProjectRoutes;

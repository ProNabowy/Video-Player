import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// Pages
const CourseDetails = lazy(() => import("../pages/CourseDetails"));

export default function useHandleRoutes() {
  let routes = useRoutes([{ path: "/", element: <CourseDetails /> }]);

  return { routes };
}

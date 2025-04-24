import { Fragment, lazy, Suspense } from "react";
import useHandleRoutes from "./routes/routes";

const Navbar = lazy(() => import("./layouts/Navbar"));

function App() {
  const { routes } = useHandleRoutes();

  return (
    <Fragment>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-successbgbtn"></div>
            <span className="ml-3 text-lg">Loading...</span>
          </div>
        }
      >
        <Navbar />

        <main className="flex-1">{routes}</main>
      </Suspense>
    </Fragment>
  );
}

export default App;

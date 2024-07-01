import { Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { appRoutes } from "./router/appRoutes";
import Loader from "./utils/Loader";

function App() {
  return (
    <Suspense
      fallback={<Loader color="secondary.500" emptyColor="transparent" />}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            {appRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((childRoute, childIndex) => (
                    <Route
                      key={childIndex}
                      index={childRoute.index} // Use `index` prop for index route
                      path={childRoute.path}
                      element={childRoute.element}
                    />
                  ))}
              </Route>
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

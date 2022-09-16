import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { publicRoutes } from "./routers";

function App() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        const DefaultLayout = route.layout || Layout;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <DefaultLayout>
                <Page />
              </DefaultLayout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;

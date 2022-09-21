import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { publicRoutes } from "./routers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
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

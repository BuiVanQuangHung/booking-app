import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { publicRoutes } from "./routers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Chatbot from "react-chatbot-kit";
import { ActionProvider, MessageParser } from "./chatbot/Chatbot";
import config from "./chatbot/chatConfig";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  //! State
  const [show, setShow] = useState(false);
  //! Funcion
  const handleShow = () => {
    setShow(!show);
  };
  const handleClose = () => {
    setShow(false);
  };
  //! Ref
  const showRef = useRef(null);
  //! Effect
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  //! Render
  return (
    <>
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
                  <div className="wrap-chatbox" ref={showRef}>
                    {show === true ? (
                      <div
                        style={{ position: "relative" }}
                        data-aos="zoom-in-up"
                      >
                        <button
                          onClick={handleClose}
                          style={{
                            position: "absolute",
                            zIndex: "2",
                            top: "1px",
                            right: "3rem",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          <CloseIcon fontSize="large" />
                        </button>
                        <div className="chatbot">
                          <Chatbot
                            config={config}
                            actionProvider={ActionProvider}
                            messageParser={MessageParser}
                          />
                        </div>
                      </div>
                    ) : (
                      <button className="mes-icon" onClick={handleShow}>
                        <ChatIcon color="secondary" />
                      </button>
                    )}
                  </div>
                </DefaultLayout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;

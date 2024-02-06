import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Header from "./MyComponents/Header/header";
import Footer from "./MyComponents/Footer/footer";

import {
  Home,
  Events,
  Sponsors,
  Speakers,
  RegisterLogin,
  Teams,
} from "./MyComponents/Pages";
import { UserAuthContextProvider } from "./context/userAuthContext";

const menuItemsData = [
  { label: "Events", link: "/Events", component: <Events /> },
  { label: "Sponsors", link: "/Sponsors", component: <Sponsors /> },
  { label: "Speakers", link: "/Speakers", component: <Speakers /> },
  { label: "ContactUs", link: "/Contact-Us", component: <Teams /> },
  { label: "RegisterLogin", link: "/Register-Login", component: <RegisterLogin />, },
];

function App() {
  
  return (
    <ScrollContainer>
    <div className="App" >
      <Header />

      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          {/*mapping all the routes*/}
          {menuItemsData.map((menuItem) => (
            <Route
              key={menuItem.link}
              path={menuItem.link}
              element={menuItem.component}
            />
          ))}
        </Routes>
      </UserAuthContextProvider>

      {/* <Footer /> */}
    </div>
    </ScrollContainer>
  );
}

export default App;

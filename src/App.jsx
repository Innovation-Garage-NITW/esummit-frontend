import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./MyComponents/Header/header";
import Footer from "./MyComponents/Footer/footer";

import {
  Home,
  Events,
  Sponsors,
  Speakers,
  RegisterLogin,
  ContactUs,
} from "./MyComponents/Pages";

const menuItemsData = [
  { label: "Events", link: "/Events", component: <Events /> },
  { label: "Sponsors", link: "/Sponsors", component: <Sponsors /> },
  { label: "Speakers", link: "/Speakers", component: <Speakers /> },
  { label: "ContactUs", link: "/Contact-Us", component: <ContactUs /> },
  { label: "RegisterLogin", link: "/Register-Login", component: <RegisterLogin />, },
];

function App() {
  return (
    <div className="App">
      <Header />

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

      {/* <Footer /> */}
    </div>
  );
}

export default App;

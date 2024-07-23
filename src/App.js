import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./page/home";
import Header from "./page/header";
import Footer from "./page/footer";
import "antd/dist/reset.css";
import Report from "./page/report/Report";
import Contact from "./page/home/components/contact";
import ScrollToTop from "./utils/scrollToTop";
import Fund from "./page/fund/Fund";
import Profile from "./page/profile/Profile";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const pathSegments = pathname.split("/"); // Tách đường dẫn thành các phần riêng biệt
  const lastPathSegment = pathSegments[pathSegments.length - 1];

  return (
    <div className="App">
      <ScrollToTop>
        {lastPathSegment != "profile" && <Header />}
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/to-cao-lua-dao" element={<Report />} />
          <Route path="/admin-fund" element={<Fund />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Contact />
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;

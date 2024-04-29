import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from './Pages/Home'
import Profile from './Pages/Profile'
const App = () => {
  const 
    profile= {
      name: "sridhar",
      image:
        "data:image/jpeg;base64,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",
      profession: "software engineer",
      workExperience: "somtehij",
      rating: 3.5,
      interests: "football",
  };
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile profile={profile} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

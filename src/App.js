import FormPendataa from "./pages/FormPendataa";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      {/* <Register /> */}
      {/* <Login /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
      {/* <Login /> */}
      {/* <ProfilePage /> */}
      {/* <FormPendataa /> */}
    </div>
  );
}

export default App;

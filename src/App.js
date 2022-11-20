import FormPendataa from "./pages/FormPendataa";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Login />
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
      {/* <Login /> */}
      {/* <ProfilePage /> */}
      {/* <FormPendataa /> */}
    </div>
  );
}

export default App;

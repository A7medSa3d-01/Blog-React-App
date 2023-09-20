import Topbar from "./components/topbar/Topbar";
import HomePage from "./pages/homepage/Homepage"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
        <Topbar />
      <Routes>
        <Route  path="/" element={<HomePage />}>
        </Route>
        <Route  path="/Blog-React-App/" element={<HomePage />}>
        </Route>
        <Route  path="/posts" element={<HomePage />}>
        </Route>
        <Route  path="/register" element={currentUser ? <HomePage /> : <Register />}>
        </Route>
        <Route  path="/login" element={currentUser ? <HomePage /> : <Login />}>
        </Route>
        <Route  path="/post/:id" element={<Single />}>
        </Route>
        <Route  path="/write" element={currentUser ? <Write /> : <Login />}>
        </Route>
        <Route  path="/settings" element={currentUser ? <Settings /> : <Login />}>
        </Route>
        <Route  path="/single" element={currentUser ? <Single /> : <Login />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

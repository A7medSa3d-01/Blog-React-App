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
        <Route exact path="/" element={<HomePage />}>
        </Route>
        <Route exact path="/Blog-React-App/" element={<HomePage />}>
        </Route>
        <Route exact path="/posts" element={<HomePage />}>
        </Route>
        <Route exact path="/register" element={currentUser ? <HomePage /> : <Register />}>
        </Route>
        <Route exact path="/login" element={currentUser ? <HomePage /> : <Login />}>
        </Route>
        <Route exact path="/post/:id" element={<Single />}>
        </Route>
        <Route exact path="/write" element={currentUser ? <Write /> : <Login />}>
        </Route>
        <Route exact path="/settings" element={currentUser ? <Settings /> : <Login />}>
        </Route>
        <Route exact path="/single" element={currentUser ? <Single /> : <Login />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import Home from "./pages/home/Home";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  const user = true;
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />

        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />

        {user && (
          <>
            <Route path="/watch" element={<Watch />} />

            <Route path="/movies"  element={<Home type= "movie" />} />
            <Route path="/series" element={<Home type="series" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

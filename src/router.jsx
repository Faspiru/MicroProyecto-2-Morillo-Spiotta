import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
/* import Layout from "./components/Layout";
  import BlankPage from "./views/BlankPage";
  import ErrorPage from "./views/ErrorPage";
  import HomePage from "./views/HomePage";
  import LoginPage from "./views/LoginPage"; */

export default createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<BlankPage />} />
      </Route>
    </Route>
  )
);

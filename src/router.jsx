import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import BlankPage from "./views/BlankPage";
import ErrorPage from "./views/ErrorPage";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<BlankPage />} />
    </Route>
  )
);

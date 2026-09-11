import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import BucketListPage from "./pages/BucketListPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

return (
<Routes>
<Route path=
"/" element={<Layout />}>
<Route index element={<HomePage />} />
<Route path=
"countries" element={<CountriesPage />} />
<Route path=
"bucket-list" element={<BucketListPage />} />
Lab Activity 07: Countries of the World with React Router 6
<Route path=
"about" element={<AboutPage />} />
<Route path=
"*" element={<NotFoundPage />} />
</Route>
</Routes>
);
 
  export default App;

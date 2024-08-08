import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
// import DetailPage from "./pages/DetailPage";
// import { categoryLoader } from "./pages/DetailPage/loader";
// import AddPage from "./pages/AddPage";
// import BasketPage from "./pages/BasketPage";

// eslint-disable-next-line react-refresh/only-export-components
export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,

        element: <Home />,
      },
    ],
  },
  //   {
  //     path: "/add-product",
  //     element: <AddPage />,
  //     // children: [

  //     // ],
  //   },
  //   {
  //     path: "/edit/:categoryId",
  //     loader: categoryLoader,
  //     element: <AddPage />,
  //   },
  //   {
  //     path: "/basket",
  //     element: <BasketPage />,
  //   },
]);

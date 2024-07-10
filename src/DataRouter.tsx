import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Contact from "./components/pages/contact/Contact";
import ProductList from "./components/pages/product/ProductList";

const DataRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/product",
      element: <ProductList />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default DataRouter;

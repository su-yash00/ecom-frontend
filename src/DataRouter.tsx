import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Contact from "./components/pages/contact/Contact";
import ProductList from "./components/pages/product/ProductList";
import Cart from "./components/pages/cart/Cart";
import NavbarComponent from "./components/common/NavbarComponent";
import Login from "./components/common/Login";

const DataRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: (
        <>
          <NavbarComponent />
          <Dashboard />,
        </>
      ),
    },
    {
      path: "/product",
      element: (
        <>
          <NavbarComponent />
          <ProductList />,
        </>
      ),
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/cart",
      element: (
        <>
          <NavbarComponent />
          <Cart />,
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default DataRouter;

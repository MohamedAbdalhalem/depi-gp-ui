import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Products from "./pages/Products";

import SignIn from "./pages/SignIn";

import ProductDetials from "./pages/ProductDetials";
import SignUp from './pages/SignUp';

import Cart from "./pages/Cart";
import Addresses from "./pages/Addresses";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "product-details/:id", element: <ProductDetials /> },
      { path: "cart", element: <Cart /> },
      { path: "addresses", element: <Addresses /> },
      { path: "profile", element: <Profile /> },
      { path: "orders", element: <Orders /> },
      { path: "order-details/:id", element: <OrderDetail /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "../src/features/menu/Menu";
import Cart from "../src/features/cart/Cart";
import Order from "../src/features/order/Order";
import CreatOrder from "../src/features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        { path: "/cart", element: <Cart /> },
        { path: "/order/new", element: <CreatOrder /> },
        { path: "/order/:Orderid", element: <Order /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

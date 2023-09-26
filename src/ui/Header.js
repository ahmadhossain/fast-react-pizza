import { Link } from "react-router-dom";

import SrearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SrearchOrder />
      <p>Ahmad</p>
    </header>
  );
};

export default Header;

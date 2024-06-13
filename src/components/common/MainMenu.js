import Link from "next/link";

const MainMenu = () => {
  return (
    <ul className="ace-responsive-menu ">
      <li className="visible_list dropitem">
        <Link className="list-item" href="/">
          Home
        </Link>
      </li>
      <li className="visible_list dropitem">
        <Link className="list-item" href="/marketplace">
          Marketplace
        </Link>
      </li>

      <li className="megamenu_style dropitem">
        <Link className="list-item" href="/about">
          About
        </Link>
      </li>
      {/* End listings */}

      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          Faq
        </a>
      </li>
    </ul>
  );
};

export default MainMenu;

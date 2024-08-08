import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";
import Logo from '../../../assets/images/logo.png';

const Header = () => {

  const [showMenu, setShowMenu] = useState('');


  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="headerMid">
          <ul className={showMenu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>
                Category
              </Link>
            </li>
            <li>
              <Link>
                Latest
              </Link>
            </li>
            <li>
              <Link>
                Blog
              </Link>
            </li>
            <li>
              <Link>
                Pages
              </Link>
            </li>
            <li>
              <Link>
                Contact
              </Link>
            </li>
            <button onClick={()=> setShowMenu('')}>
              <i className="fa fa-times"></i>
            </button>
          </ul>
          <div>
            <button onClick={()=> setShowMenu('active')}>
               <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
        <div className="headerRight">
          <div className="search">
            <input type="text" placeholder="Search products"/>
            <button>
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="favs">
            <a href="">
            <i className="fa fa-heart"></i>
            </a>
          </div>
          <div className="basket">
            <a href="">
            <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
          <a href="" className="signin">
            Sign in
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

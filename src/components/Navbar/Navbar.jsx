import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch((error) => console.error(error));
      }
    const NavOptions = <>
        <li><Link to = "/"><a>Home</a></Link></li>
      <li>
      </li>
      <li><a>Item 3</a></li>
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {NavOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Majestic Villas</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {NavOptions}
    </ul>
  </div>
  <div className="navbar-end">
          {!user? <>
            <Link to="/signin">
              {" "}
              <a className="btn">Login</a>
            </Link>
          </>: <>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
  <img 
    alt="photo of user" 
    src={
      user?.photoURL ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
    }
    onError={(e) => {
      console.error('Error loading user photo, falling back to default image');
      e.target.src = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
    }}
  />
</div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    {user?.displayName? user.displayName : "User"}
                  </a>
                </li>

                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
            </>}
        </div>
      </div>
    </div>
    );
};

export default Navbar;
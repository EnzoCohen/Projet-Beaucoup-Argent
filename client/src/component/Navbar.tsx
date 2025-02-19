import {Link} from "react-router-dom";

export const Navbar = ()=> {
    return(
    
        <div className="navbar bg-base-100 shadow-sm max-w-6xl w-full mx-auto rounded-xl ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                </svg>
              </div>
              <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Plannify</a>
          </div>
          <div className="navbar-center hidden lg:flex flex-grow">
            <input type="text" placeholder="Search" className="input  w-100 md:w-auto rounded-r-lg"/>
            <input type="text" placeholder="Search" className="input  w-100 md:w-auto rounded-l-lg"/>

          </div>
          <div className="navbar-end">
          <div className="flex gap-2">
              <div className="dropdown dropdown-end">
                  <Link to={"/login"}>
                  <button className="btn bg-white text-black border-[#e5e5e5]" >
                      <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24">
                          <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="black">
                              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </g>
                      </svg>
                      Se connecter
                  </button>
                  </Link>
              </div>
          </div>
          </div>
        </div>
    )
}
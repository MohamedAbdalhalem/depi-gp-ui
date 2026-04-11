import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCartFlatbed, faCircleUser, faCoffee, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost ps-0 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className=" menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className='cursor-pointer'><a>Home</a></li>
      <li className='cursor-pointer'><a>Products</a></li>
      <li className='cursor-pointer'><a>SkinQuiz</a></li>
      <li className='cursor-pointer'><a>Orders</a></li>
      <li className='cursor-pointer'><a>Sign-in</a></li>
      <li className='cursor-pointer'><a>Sign-out</a></li>
      <li className='cursor-pointer'><a>Sign-up</a></li>
      </ul>
    </div>
    <a className="text-xl">LUMIÈRE</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu-horizontal gap-5  px-1 ">
      <li className='cursor-pointer'><a>Home</a></li>
      <li className='cursor-pointer'><a>Products</a></li>
      <li className='cursor-pointer'><a>SkinQuiz</a></li>
      <li className='cursor-pointer'><a>Orders</a></li>
      <li className='cursor-pointer'><a>Sign-in</a></li>
      <li className='cursor-pointer'><a>Sign-out</a></li>
      <li className='cursor-pointer'><a>Sign-up</a></li>
    </ul>
  </div>
<div className="navbar-end gap-3">
    
      <FontAwesomeIcon className='cursor-pointer' icon={faSearch} />
    
      <FontAwesomeIcon className='cursor-pointer' icon={faCircleUser} />
        
      <FontAwesomeIcon className='cursor-pointer' icon={faCartArrowDown} />
  </div>
</div>
  )
}
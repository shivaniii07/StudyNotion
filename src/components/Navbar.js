import React from 'react'
import logo from "../assests/Logo.svg";
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';

 const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn= props.setIsLoggedIn;

  return (
    <div className="flex justify-between  items-center w-11/12 max-w-[1160px] py-4 mx-auto" >
        {/* return( */}
        {/* study notion logo */}
           <Link to ="/">
                <img src={logo} alt="logo" width={160} height={32} loading='lazy'/>
           </Link>
         {/* pages */}
           <nav >
            <ul className="text-richblack-100 flex gap-x-6">
                <li >
                    <Link to ="/">Home</Link>
                </li>
                <li >
                    <Link to ="/">About</Link>
                </li>
                <li >
                    <Link to ="/">Contact</Link>
                </li>
            </ul>
           </nav>

           {/* 4 buttons = login , signup , logout , dashboard */}
           
            <div  className='flex items-center gap-x-4'>
            { 
               ! isLoggedIn &&
                <Link to = "/login">
                <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                    Log in
                </button>
               </Link>
             }
             { 
               ! isLoggedIn &&
               <Link to = "/signup">
                <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                    Sign up
                </button>
               </Link>
              }
              { 
                 isLoggedIn &&
               <Link to = "/">
                <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'
                   
                    onClick={() =>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                 }} >
                    Log Out
                </button>
               </Link>
              }
              { 
                 isLoggedIn &&
               <Link to = "/dashboard">
                <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                    Dashboard
                </button>
               </Link>
              } 
           </div>
          


      
    </div>
  )
}
export default Navbar;
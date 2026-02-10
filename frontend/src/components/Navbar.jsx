// import React, { useState } from 'react'
// import { BiRightArrowAlt } from "react-icons/bi";
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import Popup from './Popup';
// const Navbar = () => {
//     const {user}=useAuth()
//     const [popup,setPopup]=useState(false);
//   return (
//    <> <div className='flex justify-between gap-4 px-4 md:px-12 bg-blue-50 py-2'>
//        <Link to={'/'}> <h1 className='text-blue-500 text-[28px] font-bold'>Auth</h1></Link>
//         {
//             !user?<Link to={'/login'}><button className='flex items-center gap-2 px-4 py-1 rounded-full bg-black text-white'>Login <BiRightArrowAlt/></button></Link>: <div className='flex items-center gap-2'><p className='bg-red-400 w-6 h-6 text-center font-bold text-white rounded-full cursor-pointer' onClick={()=>setPopup(!popup)}>{user?.name?.[0]?.toUpperCase()}</p><div className=''><p>{user?.name}</p><p>{user?.email}</p></div></div>
//         }
//     </div>
//     {popup && <Popup close={() => setPopup(false)} />}
//     </>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Popup from './Popup';

const Navbar = () => {
    const { user } = useAuth();
    const [popup, setPopup] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
            <div className="flex justify-between items-center px-4 md:px-12 py-3">


                <Link to="/" className="flex items-center gap-2">
                    <span className="text-blue-600 text-2xl font-bold tracking-tight">
                        Auth
                    </span>
                </Link>


                {!user ? (
                    <Link to="/login">
                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg">
                            Login <BiRightArrowAlt />
                        </button>
                    </Link>
                ) : (
                    <div className="relative flex items-center gap-3">

                        <div
                            onClick={() => setPopup(prev => !prev)}
                            className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold cursor-pointer select-none"
                        >
                            {user?.name?.[0]?.toUpperCase()}
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-sm font-semibold text-slate-900">
                                {user?.name}
                            </span>
                            <span className="text-xs text-slate-500">
                                {user?.email}
                            </span>
                        </div>

                        {popup && <Popup close={() => setPopup(false)} />}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

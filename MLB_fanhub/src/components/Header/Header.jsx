import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/png;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-red-400 hover:bg-yellow-300 focus:ring-2 focus:ring-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-300" : "text-red-400"} border-b border-gray-100 hover:bg-yellow-300 lg:hover:bg-transparent lg:border-0 hover:texthover:bg-yellow-300 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-300" : "text-red-400"} border-b border-gray-100 hover:bg-yellow-300 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-300" : "text-red-400"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
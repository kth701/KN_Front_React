import { Link } from "react-router-dom"

const BasicMenu = () => {
    return (
        <nav id='navbar' className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left side: Main Menu */}
                <ul className="flex items-center space-x-4">
                    <li>
                        <Link to="/" className="block py-4 px-2 text-lg font-semibold text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            Main
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="block py-4 px-2 text-lg font-semibold text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/todo/" className="block py-4 px-2 text-lg font-semibold text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            Todo
                        </Link>
                    </li>
                </ul>
                {/* Right side: Login Button */}
                <div className="flex items-center">
                    <Link to="/login" className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300">Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default BasicMenu
import { Link } from "react-router-dom"

const BasicMenu = () => {

    // 네비게이션 구조를 반환
    return(
        <>
            <nav id='navbar' className="flex bg-blue-300 mb-1">
                <div className="w-4/5 bg-blue-500 text-white">
                    <ul className="flex p-4 font-bold">
                        <li className="pr-4 text-2xl">
                            <Link to="/">Main</Link>
                        </li>
                        <li className="pr-4 text-2xl">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="pr-4 text-2xl">
                             <Link to="/todo/">Todo</Link>
                        </li>

                    </ul>
                </div>

                <div className="w-1/5  bg-blue-500 text-white flex justify-center items-center">
                    <div>Login</div>
                </div>
            </nav>
        </>
    )
}

export default BasicMenu
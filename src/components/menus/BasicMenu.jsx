import { Link } from "react-router-dom"

const BasicMenu = () => {

    // 네비게이션 구조를 반환
    return(
        <>
            <nav id='navbar' className="flex bg-blue-300">
                <div className="w-4/5 bg-blue-500 text-white">
                    <ul className="flex p-4 font-bold">
                        <li className="pr-4 text-2xl">
                            <Link to="/">Main</Link>
                        </li>
                        <li className="pr-4 text-2xl">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="pr-4 text-2xl">Todo</li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default BasicMenu
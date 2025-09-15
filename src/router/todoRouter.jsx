import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import TodoRead from "../pages/todo/ReadPage";
import AddPage from "../pages/todo/AddPage";
import TodoModify from "../pages/todo/ModifyPage";


const Loading = <div>Loading....</div>
const TodoList = lazy( () => import("../pages/todo/LIstPage"))

const todoRouter = () => {
    return [
        {
            path: "list",
            element: <Suspense fallback={Loading}><TodoList /></Suspense>
        },
        // "/todo/" 경로 접근 => 자동으로 "/todo/list" 연결 => 리다이렉션 처리
        {
            path: "",
            element: <Navigate replace to="list" /> // 리다이렉션 처리
        },
        {
            path: "read/:tno", // "/todo/read/100"
            element: <Suspense fallback={Loading}><TodoRead /></Suspense>
        },
        {
            path: "add",
            element: <Suspense fallback={Loading}><AddPage /></Suspense>
        },
        {
            path: "modify/:tno", // "/todo/modify/100",
            element: <Suspense fallback={Loading}><TodoModify /></Suspense>
        }
    ]
}

export default todoRouter;
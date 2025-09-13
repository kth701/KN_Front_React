
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom"; // jsx 인식
// const {createBrowserRouter} = require("react-router-dom") // js인식

const Loading = <div>Loading....</div>

const Main = lazy(()=> import("../pages/MainPage"))
const About = lazy(  () => import("../pages/AboutPage"))

const root = createBrowserRouter([ // 주소(url) 와 페이지 맵핑
    {
        path:"",   // "http://localhost:5173/"->"MainPage.jsx"
        element: <Suspense fallback={Loading}><Main /></Suspense>
    },

    {
        path:"about",
        element: <Suspense fallback={Loading}><About /></Suspense>
    }
    

])


export default root

// createBrowserRouter=> 브라우저에 특정 주소을 특정 화면페이지연결
// "/list"-> 리스트 페이지 연결

// <Suspense>, lazy() 필요할 때 컴포넌트를 메모리상에 로딩: 지연 로딩
//  컴포넌트 처리가 끊나지 않으면 'Loading'메시지 처리
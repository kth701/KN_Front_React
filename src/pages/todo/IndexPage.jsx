import { Outlet, useNavigate } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";
import { useCallback } from "react";

const IndexPage = () => {
    // 동적으로 데이터를 처리해서 이동할 때 사용하는 객체
    const navigate = useNavigate();

    // useCallback(): 함수를 기억 해두고 특정 조건에서만 함수를 사용 => 성능 향상 => 특정 함수 재사용
    const handleClickList = useCallback( () => {
        console.log("LIST click...")
        // 페이지 이동 => 상대 경로로 이동(현재 경로 위치에 이동)
        navigate({pathname: "list"}) // "todo/list" 설정된다.
    })
    const handleClickAdd =useCallback( () => {
        console.log("ADD click...")

        navigate({pathname: "add"})
    })


    return (
        <BasicLayout>
            <div className="w-full flex">
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
                        onClick={handleClickList}>
                    LIST
                </div>
                <div  className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
                        onClick={handleClickAdd}>
                    ADD
                </div>
            </div>
            <div className="w-full flex-wrap">
                <Outlet />
            </div>
        </BasicLayout>
        )
}

export default IndexPage;
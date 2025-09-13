import { Outlet, useNavigate } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";

const IndexPage = () => {
    const navigate = useNavigate();

    const handleClickList = () => {
        console.log("LIST click...")
        navigate({pathname: "list"}) // 상대 경로로 이동
    }


    return (
        <BasicLayout>
            <div className="w-full flex">
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
                        onClick={handleClickList}>
                    LIST
                </div>
                <div  className="text-xl m-1 p-2 w-20 font-extrabold text-center underline">
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
import { useParams } from "react-router-dom";
import ModifyComponent from "../../components/todo/ModifyComponent";

// 컴포넌트에 전달받는 매개변수는 Props객체를 통해 전달 받음
const ModifyPage = ()=>{
    const {tno} = useParams();// url 경로 매개변수 추출

    return(
        <div>
            <div className="text-3xl font-extrabold text-gray-800 border-b-2 border-gray-200 pb-4 mb-6">
                Todo Modify Page
            </div>

            <ModifyComponent tno={tno} />
        </div>
    )
}
export default ModifyPage;
import { useParams } from "react-router-dom";

// 컴포넌트에 전달받는 매개변수는 Props객체를 통해 전달 받음
const ModifyPage = ()=>{
    const {tno} = useParams();// url 경로 매개변수 추출

    return(
        <div>Modify Page Component: tno={tno}</div>
    )

}
export default ModifyPage;
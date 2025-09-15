import { useParams } from "react-router-dom";

const TodoRead = () => {
    // url 경로 매개변수 추출
    // "/todo/read/100" => 100을 추출
    const {tno} = useParams();

    console.log(tno)

    return (
        <div>Todo Read Page Component: tno={tno}</div>
    )
}

export default TodoRead;
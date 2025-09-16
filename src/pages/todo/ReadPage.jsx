import { use, useCallback } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {
    // url 경로 매개변수 추출
    // "/todo/read/100" => 100을 추출
    const {tno} = useParams();
    const navigate = useNavigate()

    const [queryParams] =  useSearchParams()// 쿼리 스트링 처리
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    // page, size값을 이용해서 쿼리 스트링 객체 생성 => "?page=1&size=10"
    const queryStr = createSearchParams({page, size}).toString();

    // 수정 버튼 클릭 처리하는 함수 선언
    // useCallback(수행함수,[의존성배열])
    const moveToModify = useCallback( (tno)=> {
         // "/todo/modify/100"=> 동적 데이터를 이용해서 이동 : useNavigate()이용
        navigate(
            {
                pathname: `/todo/modify/${tno}`,
                search: queryStr,
            }, // "/todo/modify/100?page=1&size=10"
           
        )},
        [tno, page, size]) // 의존성 배열 => tno, page, size 변경될 때 함수를 새로 생성해서 수행

        // 목록 버튼 클릭 처리하는 함수 선언
        // 페이지 정보를 가지고 List 요청 처리
        const moveToList = useCallback( () => {
            navigate( {pathname:`/todo/list`, search: `?page=${page}&size=${size}`})
        },[page, size] )

                    
    return (
        <div className="text-3xl">
            Todo Read Page Component: tno={tno}

            <ReadComponent tno={tno} />
            
            <div onClick={ () => moveToModify(33) }>수정(Modify)</div>
            <div onClick={ ()=> moveToList()}>목록(List)</div>
            {/* <div className="flex justify-end p-4">
                <button type="button" 
                        className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                        onClick={() => moveToModify(tno)}>
                    Modify
                </button>
                <button type="button" 
                        className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
                        onClick={moveToList}>
                    List
                </button>
            </div> */}
        </div>
    )
}

export default ReadPage;
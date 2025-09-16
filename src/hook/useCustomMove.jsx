
/* 컴포넌트들 내부에서 만들어지는 공통적인 코드 인 경우 => 커스텀훅(custom hook_이용) */

import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

// 전달 받을 인자값 유무 체크
const getNum = (param, defaultValue) => {
    if (!param){ // 인자값이 없으면
        return defaultValue
    } else {
        return parseInt(param)
    }
}

const useCustomMove = () => {
    const navigate = useNavigate() // 동적으로 데이터처리 해서 이동할 때 사용하는 객체

    const [queryParams]= useSearchParams() // 쿼리 스트링 처리
    const page = getNum(queryParams.get("page"), 1)
    const size = getNum(queryParams.get("size"), 10)

    const queryDefault = createSearchParams({page, size}).toString()// "?page=1&size=10"

    const moveToList = (pageParam) => {
        let queryStr= ""

        if (pageParam){// age, size 매개변수가 있을 경우
             const pageNum = getNum(pageParam.page, 1)
             const sizeNum = getNum(pageParam.size, 10)

             queryStr = createSearchParams({page:pageNum, size:sizeNum}).toString()

        } else {
            //  page, size 매개변수가 없을 경우 기본값으로 설정
            queryStr = queryDefault
        }

        navigate( { 
            pathname: `../list`,        // 상대 경로(현재 위치가 => /todo/read)
            search: queryStr            // 페이지 정보를 쿼리스트링으로 전달
        }) 

        return { moveToList, page, size}// moveToList()함수, page, size 객체 반환
    }


}
export default useCustomMove;
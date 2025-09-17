import axios from "axios";

// 서버 주소와 기본 경로 설정
export const host = "http://localhost:8099";
const base = `${host}/api/v1/todos`;

// todo에서 특정 tno에대한 조회
export const getOne = async ( tno) => {
    const res = await axios.get(`${base}/${tno}`)// 서버에 조회 요청
    return res.data

}

// 목록
export const getList =  async (pageParam) => {
    const { page, size }= pageParam // 페이지 정보
    //const res = await axios.get(`${base}?page=${page}&size=${size}`)// 서버에 목록 요청
    const res = await axios.get(
            `${base}/list`, // 서버에 요청할 url=> /api/v1/todos/list
            {               // 서버에 전달할 파라미터
                params : {page, size} 
            }
            )// 서버에 목록 요청

    return res.data
}

// 등록
export const postAdd = async(todoObj) => {
    const res = await axios.post(`${base}/`, todoObj)
    return res.data

}

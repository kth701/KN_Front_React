// 서버에서 전달한 todoDTO ->JSON 객체에 전달 받기

import { useEffect, useState } from "react";
import { getOne } from "../../api/TodoApi";

const initState = {
    tno:0,
    title:'',
    writer:'',
    dueDate: null,
    complete: false
}


// 컴포넌트에서 데이터 전달 담당은 Props객체
const ReadComponent = ({tno}) =>{
    // 상태 관리
    const [todo, setTodo] = useState(initState)

    // 상태 관리에서 적용되는 함수
    // useEffect() : 컴포넌트 실행 과정에서 한 번만 실행, 특정한 상태만 변경되었을 경우 비동기 처리
    //1. useEffect(() => {}, []),    2.  useEffect(() => {}, [의존성배열]),
    useEffect(()=>{
                if (tno){
                    getOne(tno).then(data => {
                        console.log(data)

                        setTodo(data) //서버로 부터 전달  받은 todoDTO
                    }) 
                }
            },
            [tno]) // tno변경될 때, 서버에 요청하는 함수

    return ( 
        <div className="border-1 border-wky-200 mt-10 p-4 m-4">
            {makeDiv('Tno', todo.tno)}
            {makeDiv('Title', todo.title)}
            {makeDiv('Writer', todo.writer)}
            {makeDiv('DueDate', todo.dueDate)}
        </div>

    )
}


const makeDiv = (title, value) => 
    <div className="flelx justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">{title}</div>
            <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">{value}</div>
        </div>
    </div>
export default ReadComponent;
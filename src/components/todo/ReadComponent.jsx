// 서버에서 전달한 todoDTO ->JSON 객체에 전달 받기

import { useEffect, useState } from "react";
import { getOne } from "../../api/TodoApi";
import useCustomMove from "../../hook/useCustomMove";

//  서버에서 전달 받은 todoDTO 객체 -> initState객체 저장
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
    
    // 커스트 훅 
    const  {moveToList, moveToModify} = useCustomMove()

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
            [tno]) // tno변경될 때, 서버에 요청하는 비동기 처리함수 수행

    return ( 
        <div className="bg-white rounded-lg shadow-xl p-8 mt-6">
            <div className="space-y-6">
                {/* 반복되는 태그 생성을 makeDiv()함수에 처리 */}
                {makeDiv('Tno', todo.tno)}
                {makeDiv('Title', todo.title)}
                {makeDiv('Writer', todo.writer)}
                {makeDiv('DueDate', todo.dueDate)}
                {makeDiv('Complete', todo.complete ? 'Completed' : 'Not Yet')}
            </div>

            {/* List버튼 */}
            <div className="flex justify-end space-x-4 mt-8">
                <button type="button" 
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
                        onClick={ ()=> moveToList() }>
                    List
                </button>

                <button type="button" 
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
                        onClick={ ()=> moveToModify(tno) }>
                    Modify
                </button>
            </div>
        </div>
    )
}


const makeDiv = (title, value) => 
    <div>
        <h3 className="text-gray-500 text-sm font-semibold">{title}</h3>
        <div className="mt-2 p-4 bg-gray-100 rounded-lg text-gray-800 text-lg">
            {value}
        </div>
    </div>
export default ReadComponent;
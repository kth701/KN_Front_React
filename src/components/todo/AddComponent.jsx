import { useState } from "react";
import ResultModal from "../../common/ResultModal";
import useCustomMove from "../../hook/useCustomMove";
import { postAdd } from "../../api/TodoApi";

const initState = {
  title: '',
  writer: '',
  complete: false,
  dueDate: '' // 'yyyy-MM-dd' 형식의 문자열
};

const AddComponent = () => {
    const [todo, setTodo] = useState(initState)
    // 결과 상태  => 결과 데이터가 있는 경우 => ResultModal창에 띄우기
    const [result, setResult] = useState(null)
    const {moveToList} = useCustomMove()


    // 수정할 항목에 값이 변경되는 호출되는 함수
    const handleChangeTodo = (e) => {
        setTodo({
            ...todo,
            // e.target.type이 checkbox이면 e.target.checked 값을, 아니면 e.target.value를 사용
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
    }

    // 비동기 처리 
    const handleClickAdd =  () => {
        postAdd(todo).then(result => {
            // {TNO: 101}
            setResult(result.TNO)
            setTodo({...initState})
        })
        .catch(e => { console.error(e)})

    }

    //  모달 닫기 콜백 함수
    const closeModal = () => {
        // 모달 창 닫을 때 처리 하는 부분
        setResult(null) // 모달 상태 초기화 하여 닫기
        moveToList()    // 목록으로 이동
    }


    return(
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {/* 모달 처리 */}
            {
                result && (
                    <ResultModal 
                        title={'Add Result'} 
                        content={`New ${result} Added`} 
                        callbackFn={closeModal} />
                )

            }
                


            {/* Title */}
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                           name="title" type={'text'} value={todo.title} onChange={handleChangeTodo} />
                </div>
            </div>
            {/* Writer */}
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                           name="writer" type={'text'} value={todo.writer} onChange={handleChangeTodo} />
                </div>
            </div>
            {/* DueDate */}
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">DUEDATE</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                           name="dueDate" type={'date'} value={todo.dueDate} onChange={handleChangeTodo} />
                </div>
            </div>
            {/* Complete */}
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">COMPLETE</div>
                    <div className="w-4/5 p-6 rounded-r">
                        완료 <input className="ml-2 w-6 h-6" name="complete" type={'checkbox'} checked={todo.complete} onChange={handleChangeTodo} />
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
                    <button type="button"
                            className="rounded p-4 w-36 bg-blue-500 text-xl text-white"
                            onClick={handleClickAdd}>
                        ADD
                    </button>
                </div>
            </div>
        </div>
    )

}

export default AddComponent;
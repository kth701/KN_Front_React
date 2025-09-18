import { useState } from "react";
import ResultModal from "../../common/ResultModal";
import useCustomMove from "../../hook/useCustomMove";
import { postAdd } from "../../api/TodoApi";

const initState = {
  title: '',
  writer: '',
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
        // dueDate가 빈 문자열이면 null로 설정하여 API로 전송
        const todoData = {...todo, dueDate: todo.dueDate === '' ? null : todo.dueDate};
        postAdd(todoData).then(data => {
            setResult({title: '등록 성공', content: 'New '+data.tno+' 등록되었습니다.'});
            setTodo({...initState});
        })
        .catch(e => { 
            console.error(e);
            const errorData = e.response?.data;
            let errorMsg = '등록에 실패했습니다. 다시 시도해주세요.';

            // if (errorData) {
            //     if (typeof errorData === 'object') {
            //         // 유효성 검사 오류 메시지 포맷팅
            //         errorMsg = Object.entries(errorData).map(([key, value]) => `${key}: ${value}`).join('\n');
            //     } else {
            //         errorMsg = errorData.error || errorData;
            //     }
            // }
            setResult({title: '등록 실패', content: errorMsg});
        })

    }

    //  모달 닫기 콜백 함수
    const closeModal = () => {
        const isSuccess = result && result.title.includes('성공');
        
        // 모달 상태 초기화
        setResult(null);

        if (isSuccess) {
            moveToList(); // 성공 시에만 목록으로 이동
        }
    }


    return(
        <div className="bg-white rounded-lg shadow-xl p-8 mt-6">
            {/* 모달 처리 */}
            {
                result && (
                    <ResultModal
                        title={result.title}
                        content={result.content}
                        callbackFn={closeModal} 
                    />
                )
            }
            
            <div className="space-y-6">
                {/* Title */}
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">TITLE</label>
                    <input className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                           name="title" type={'text'} value={todo.title} onChange={handleChangeTodo} placeholder="Enter title" />
                </div>
                {/* Writer */}
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">WRITER</label>
                    <input className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                           name="writer" type={'text'} value={todo.writer} onChange={handleChangeTodo} placeholder="Enter writer" />
                </div>
                {/* DueDate */}
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">DUE DATE</label>
                    <input className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                           name="dueDate" type={'date'} value={todo.dueDate} onChange={handleChangeTodo} />
                </div>
            </div>

            <div className="flex justify-end mt-8">
                <button type="button"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
                        onClick={handleClickAdd}>
                    ADD
                </button>
            </div>
        </div>
    )

}

export default AddComponent;
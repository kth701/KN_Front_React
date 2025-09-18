import { useEffect, useState } from "react";
import { getOne, deleteOne, putOne } from "../../api/TodoApi";
import useCustomMove from "../../hook/useCustomMove";
import ResultModal from "../../common/ResultModal";

const initState = {
    tno: 0,
    title: '',
    writer: '',
    dueDate: '',
    complete: false
};

const ModifyComponent = ({ tno }) => {

    const [todo, setTodo] = useState(initState);
    const [result, setResult] = useState(null); // 모달창을 위한 상태

    const { moveToRead, moveToList } = useCustomMove();

    useEffect(() => {
        getOne(tno).then(data => {
            setTodo(data);
        });
    }, [tno]);

    const handleChangeTodo = (e) => {
        const { name, value, type, checked } = e.target;
        // 'complete' 필드의 경우, 문자열 "true"를 boolean true로 변환
        setTodo(prevTodo => ({
            ...prevTodo,
            // [name]: type === 'checkbox' ? checked : value,
            [name]: type === 'checkbox' ? checked : (name === 'complete' ? value === 'true' : value)
        }));
    };

    const handleClickModify = () => {
        putOne(todo).then(data => {
            setResult({ title: '수정 완료', content: '성공적으로 수정되었습니다.' });
        }).catch(e => {
            console.error(e);
            setResult({ title: '수정 실패', content: '수정에 실패했습니다.' });
        });
    };

    const handleClickDelete = () => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            deleteOne(tno).then(data => {
                setResult({ title: '삭제 완료', content: '성공적으로 삭제되었습니다.' });
            }).catch(e => {
                console.error(e);
                setResult({ title: '삭제 실패', content: '삭제에 실패했습니다.' });
            });
        }
    };

    const closeModal = () => {
        const isSuccess = result && (result.title.includes('수정') || result.title.includes('삭제'));
        setResult(null);

        if (isSuccess && result.title.includes('수정')) {
            moveToRead(tno);
        } else if (isSuccess && result.title.includes('삭제')) {
            moveToList();
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-xl p-8 mt-6">
            {result && <ResultModal title={result.title} content={result.content} callbackFn={closeModal} />}

            <div className="space-y-6">
                {/* TNO */}
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">TNO</label>
                    <div className="bg-gray-100 border border-gray-300 text-gray-600 rounded w-full py-3 px-4">
                        {todo.tno}
                    </div>
                </div>
                {/* Writer */}
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">WRITER</label>
                    <div className="bg-gray-100 border border-gray-300 text-gray-600 rounded w-full py-3 px-4">
                        {todo.writer}
                    </div>
                </div>
                {/* Title */}
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">TITLE</label>
                    <input
                        className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        name="title" type={'text'} value={todo.title} onChange={handleChangeTodo} />
                </div>
                {/* DueDate */}
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">DUE DATE</label>
                    <input
                        className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        name="dueDate" type={'date'} value={todo.dueDate} onChange={handleChangeTodo} />
                </div>
                {/* Complete */}
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">COMPLETE</label>
                    <select
                        name="complete"
                        value={todo.complete}
                        onChange={handleChangeTodo}
                        className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value={false}>Not Yet</option>
                        <option value={true}>Complete</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-end space-x-4 mt-8">
                <button type="button"
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
                    onClick={moveToList}>
                    List
                </button>
                <button type="button"
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
                    onClick={handleClickDelete}>
                    DELETE
                </button>
                <button type="button"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
                    onClick={handleClickModify}>
                    MODIFY
                </button>
            </div>
        </div>
    );
};

export default ModifyComponent;
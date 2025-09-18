import { useEffect, useState } from "react";
import useCustomMove from "../../hook/useCustomMove";
import { getList } from "../../api/TodoApi";
import PageComponent from "../menus/PageComponent";

// 페이지 정보담는 객체(PageResponseDTO)
const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  start: 0,
  end: 0,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

const ListComponent = () => {
    const {page, size, moveToList, moveToRead} = useCustomMove()
    // 서버로 부터 전달 받은 객체 저장
    const [pageResponseDTO, setPageResponseDTO] = useState(initState)

    useEffect(() => {
        // 서버에 todo 목록요청 처리
        getList({page, size}).then(data => {
            console.log(data)
            setPageResponseDTO(data)
        })

    },[page, size])

    return (
        <div className="mt-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <ul className="divide-y divide-gray-200">
                    {pageResponseDTO.dtoList.map(todo =>
                        <li key={todo.tno}
                            className="p-5 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                            onClick={() => moveToRead(todo.tno)} // 상세 조회로 이동
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-indigo-600 truncate">
                                        Task #{todo.tno}
                                    </p>
                                    <p className="text-lg font-semibold text-gray-900 mt-1">
                                        {todo.title}
                                    </p>
                                </div>
                                <div className="ml-4 flex-shrink-0 text-right">
                                    <p className="text-sm text-gray-500">
                                        Due: {todo.dueDate}
                                    </p>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <PageComponent serverData={pageResponseDTO} movePage={moveToList}></PageComponent>
        </div>
    )
}
export default ListComponent;
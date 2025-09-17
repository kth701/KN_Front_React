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
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">
            <div className="flex flex-wrap mx-auto justify-center p-6">
                {pageResponseDTO.dtoList.map(todo =>
                    <div key={todo.tno}
                         className="w-full min-w-[400px] p-2 m-2 rounded shadow-md hover:bg-sky-100 cursor-pointer"
                         onClick={() => moveToRead(todo.tno)} // 상세 조회로 이동
                    >
                        <div className="flex">
                            <div className="font-extrabold text-2xl p-2 w-1/12">
                                {todo.tno}
                            </div>
                            <div className="text-1xl m-1 p-2 w-8/12 font-extrabold">
                                {todo.title}
                            </div>
                            <div className="text-1xl m-1 p-2 w-2/10 font-medium">
                                {todo.dueDate}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* 페이지네이션 - 주석 처리
             <div className="flex justify-center p-4">
                 <ul className="flex">
                     {pageResponseDTO.prev &&
                         <li className="p-2 m-2 cursor-pointer" onClick={() => moveToList({page: pageResponseDTO.prevPage})}> PREV </li>
                     }
                     {pageResponseDTO.pageNumList.map(pageNum =>
                         <li key={pageNum}
                             className={`p-2 m-2 cursor-pointer ${pageResponseDTO.current === pageNum ? 'text-red-500' : ''}`}
                             onClick={() => moveToList({page: pageNum})}>
                             {pageNum}
                         </li>
                     )}
                     {pageResponseDTO.next &&
                         <li className="p-2 m-2 cursor-pointer" onClick={() => moveToList({page: pageResponseDTO.nextPage})}> NEXT </li>
                     }
                 </ul>
             </div> */}
            <PageComponent serverData={pageResponseDTO} movePage={moveToList}></PageComponent>
        </div>
    )
}
export default ListComponent;
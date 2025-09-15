import { useSearchParams } from "react-router-dom"




const ListPage = () => {   

    // 쿼리스트링의 값 추출
    const [queryParams] = useSearchParams()
    // "/todo/list?page=1&size=10"
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10


    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl">
                Todo List Page Component : page={page}, size={size}
            </div>
        </div>
    )
}

export default ListPage
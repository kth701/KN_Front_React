const PageComponent = ({ serverData, movePage }) => {

    return (
        <div className="flex justify-center p-4">
            <ul className="flex">
                {serverData.prev &&
                    <li 
                        className="p-2 m-2 cursor-pointer" 
                        onClick={() => movePage({ page: serverData.prevPage })}>
                        PREV
                    </li>
                }
                {serverData.pageNumList.map(pageNum =>
                    <li 
                        key={pageNum}
                        className={`p-2 m-2 cursor-pointer ${serverData.current === pageNum ? 'text-red-500' : ''}`}
                        onClick={() => movePage({ page: pageNum })}>
                        {pageNum}
                    </li>
                )}
                {serverData.next &&
                    <li 
                        className="p-2 m-2 cursor-pointer" 
                        onClick={() => movePage({ page: serverData.nextPage })}>
                        NEXT
                    </li>
                }
            </ul>
        </div>
    )
}
export default PageComponent;


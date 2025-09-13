import BasicMenu from "../components/menus/BasicMenu";

const BasicLayout = ({children}) =>{
    return(
        <>
            {/* 1행 레이아웃 설정 */}
            {/* <header className="text-2xl bg-gray-100  mt-1my-2 p-2 ">Header</header> */}
            <BasicMenu></BasicMenu>

            {/* 2행 레이아웃 설정 */}
            <div className="bg-white   w-full flex flex-col \
                                        space-y-4 md:flex-row md:space-x-4 md:space-y-0 ">

                {/* 2행 1열 =>좌측 영역 : 콘텐츠 영역 */}
                <main className="md:w-2/3 lg:w-3/4  bg-gray-200   ">
                    {children}
                </main>
                
                {/* 2행 2열 => 우측영역: 사이드바 */}
                <aside className="md:w-1/3 lg:w-1/4 bg-gray-300 ">Sidebar</aside>
            </div>
        </>
    )
}

export default BasicLayout;
import BasicMenu from "../components/menus/BasicMenu";

const BasicLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
            {/* 헤더: 스크롤 시 상단에 고정 */}
            <header className="bg-white shadow-lg sticky top-0 z-50">
                <BasicMenu />
            </header>

            {/* 메인 콘텐츠 영역 */}
            <main className="flex-grow w-full">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                    {children}
                </div>
            </main>

            {/* 푸터 */}
            <footer className="bg-gray-900 text-white">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} KN Shopping Mall. All rights reserved.</p>
                        <p className="mt-2 text-sm">Your one-stop shop for everything.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default BasicLayout;
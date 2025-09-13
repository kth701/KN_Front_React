// JSX: JavaScript확장판 => HTML+Javascript

import BasicLayout from "../layout/BasicLayout";

// React: 함수 컴포넌트, 객체 컴포넌트
const MainPage = () => {
    return (
        // BasicLayout 컴포넌트 호출하여 실행
        <BasicLayout>
            <div className="text-3xl">Main Page</div>
        </BasicLayout>

    )
}

// 내보내기 설정 : 다른 컴포넌트에서 사용가능
export default MainPage;   
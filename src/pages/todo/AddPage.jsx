import AddComponent from "../../components/todo/AddComponent";

const AddPage = () => {
    return(
        <div>
            <div className="text-3xl font-extrabold text-gray-800 border-b-2 border-gray-200 pb-4 mb-6">
                Todo Register Page
            </div>
            
            <AddComponent />
        </div>
    )
}

export default AddPage;
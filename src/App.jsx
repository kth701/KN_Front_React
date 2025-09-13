
import { RouterProvider } from 'react-router-dom'
import './App.css'
import root from './router/root'

function App() {

  return (
    // <div className='text-3xl font-bold underline'>React App</div>

    // RouterProvider에 라우터객체 전달 : "root객체해당"
    <RouterProvider router={root} />
  )
  
}

export default App

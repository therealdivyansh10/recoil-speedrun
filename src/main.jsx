import ReactDOM from 'react-dom/client'
import './index.css'
import { RecoilRoot } from 'recoil'
import Todo from './Todo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <Todo />
  </RecoilRoot>,
)

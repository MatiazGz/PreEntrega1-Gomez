import './App.css'
import { CartWidget } from './components/CartWidget'
import { ILC } from './components/ItemListContainer'
import {NavBar} from "./components/NavBar"

function App() {
  return (
    <>
      <NavBar/>
      <CartWidget/>
      <ILC greetings="Hello"/>
    </>
  )
}

export default App

import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'


function App() {

  return (
    <>
    <Card/>   
    <hr />
    <Input type={"search"} bck={"searcBck"}/> 
    <Input type={"password"} bck={"passBck"} /> 
    <Input type={"file"} /> 
    </>
  
  )
}

export default App

import MyForm from './Components/MyForm'
import './App.css'

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: 'Antonio', email:'antonio@example.com'}}/>
    </div>
   
  )
}

export default App

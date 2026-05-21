import Car from './Components/Car'
import './App.css'

function App() {
   const myCars = [
    { id: 1, name: "Fusca", km: 50000, color: "Prata"},
    { id: 2, name: "Fiat", km: 0, color: "Vermelho"},
    { id: 3, name: "Ford", km: 100000, color: "Preto"}
  ]
  return (
  <div className='App'>
    <h1>Showroom de carros</h1>
    <div className='car-container'>
      {myCars.map((car) => (
      <Car key={car.id} car={car} />
      ))}

    </div>
  </div>
  )
}

export default App

import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName' 
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Messege from './components/Messege'
import { useState } from 'react'
import Conteiner from './components/Conteiner' 

import './App.css'

import City from './assets/City.jpg'
import ExecuteFunction from './components/ExecuteFunction'
import ChangeMessageState from './components/ChangeMessageState'
import UsersDetails from './components/UsersDetails'


function App() {
  const name = "Matheus";
  const [userName] = useState("Antonio");

  const cars = [
    {id: 1, brand: "Volkswagen", km: 50000, color: "Prata", newCar: false},
    {id: 2, brand: "Fiat", Km: 0, color: "Vermelho", newCar: true},
    {id: 3 , brand: 'Ford', Km: 100000, color: 'Preto', newCar: false}
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [messege, setMessege] = useState("")

  const handleMessage = (msg) => {
    setMessege(msg)

  }

  const users = [
    {id: 1, name: "Matheus", age: 30, job: "Programador"},
    {id: 2, name: "Maria", age: 25, job: "Designer"},
    {id: 3, name: "João", age: 35, job: "Gerente"},
    {id: 4, name: "Antonio", age: 17, job: "Estudante"}
  ]
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
       <img src="/img1.jpg" alt="paisagem" />
      </div>
      <div>
       <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} />
      <CarDetails brand="Volkswagen" km={50000} color="Prata" newCar={false} />
      {/* reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Ford" km={100000} color="Preto" newCar={false}/>
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
          brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />

        ))}
        {/* fragment */}
        <Fragment propFragment='teste' />
        {/* children */}
        <Conteiner MayValue="teste">
         <p>Conteúdo do container</p>
        </Conteiner>

        <Conteiner MayValue="teste2">
         <h5>Teste 2</h5>
         <p>Conteúdo do container</p>
        </Conteiner>
        {/* Executar função */}
        <ExecuteFunction myFunction={showMessage} />
        {/*state lift */}
        <Messege msg={messege} />
        <ChangeMessageState handleMessage={handleMessage} />
          {/* Desafio */}
         {users.map((users) => (
         <UsersDetails key={users.id} name={users.name} age={users.age} job={users.job} />
        ))}
       
        
    </div>
    );
}


export default App

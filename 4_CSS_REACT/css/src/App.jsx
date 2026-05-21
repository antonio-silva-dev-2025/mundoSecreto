import './App.css'
import MyComponent from './components/MyComponent'
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState('Antonio')
  const redTitle = true
  
   return (
    <div className="App">
      {/* CSS global */}
      <h1>React com css</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este é um parágrafo dentro do App</p>
      <p className="app-paragraph">Este é outro parágrafo dentro do App</p>
      {/* CSS inline */}
      <p style={{ color: 'blue', padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado com css inline</p>

      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? {color: 'purple'} : {color: 'pink'}}>css dinamico</h2>
      <h2 style={n > 10 ? {color: 'purple'} : {color: 'pink'}}>css dinamico</h2>
      <h2 style={name === 'Antonio' ? {color: 'green', backgroundColor: '#000'} : null}>teste nome</h2>
      {/*classe dinamica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este Título vai ter classe dinâmica</h2>
      {/*css modules */}
      <Title />
    </div>
 )
}

export default App

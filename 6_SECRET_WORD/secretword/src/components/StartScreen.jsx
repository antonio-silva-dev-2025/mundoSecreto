import './StartScreen.css'

const StartScreen = ({ startGmame }) => {
  return (
    <div className='start'>
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar!</p>
        <button onClick={startGmame}>Começa o jogo</button>
    </div>
  )
}

export default StartScreen
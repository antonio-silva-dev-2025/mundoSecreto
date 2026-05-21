

const Conteiner = ({ children, MayValue }) => {
  return (
    <div>
      <h2>Este é um container</h2>
      {children}  
      <p>O valor é:{MayValue}</p>
   
    </div>
  )
}

export default Conteiner
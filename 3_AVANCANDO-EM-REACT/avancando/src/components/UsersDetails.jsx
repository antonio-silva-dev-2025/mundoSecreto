import React from 'react'

const UsersDetails = ({ name, age, job }) => {
  return (
    <div>
       <h2>{name}</h2> 
       <p>Idade: {age}</p>
       <p>Profissão: {job}</p>
       {age >= 18 ? (<p>Pode dirigir!</p>) : (<p>Menor de idade não pode dirigir!</p>)}

    </div>
  )
}

export default UsersDetails
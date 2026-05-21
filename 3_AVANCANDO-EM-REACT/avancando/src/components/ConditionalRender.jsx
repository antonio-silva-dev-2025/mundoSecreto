import { useState } from "react";

const ConditionalRender = () => {
        const [x] = useState(false);

        const [name, setName] = useState("Pedro");
  return (
    <div>
        <h1>Isso sera exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é false</p>}
        {name === "Antonio" ? (
            <div>
                <p>O nome é Antonio</p>
            </div>
        ) : (
            <div>
                <p> nome não encontrado!</p>
            </div>
        )}
        <button onClick={() => setName("Antonio")}>Cliqui aqui!</button>
    </div>
  );
};

export default ConditionalRender;
const Events = () => {
    const handleMyEvents = (e) => {
        console.log(e);

        console.log("Evento disparado!");
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvents}>Clique aqui!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
};

export default Events;
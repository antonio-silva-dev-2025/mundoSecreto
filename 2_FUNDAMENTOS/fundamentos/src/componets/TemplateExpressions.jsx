const TemplateExpressions = () => {
  const name = 'Antonio';
  const data = {
    age: 30,
    job: 'Programador'
  }

    return (
        <div>
            <h1>Olá {name}, Tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log('Hello, World!')}</p>
        </div>
    )
}
export default TemplateExpressions;

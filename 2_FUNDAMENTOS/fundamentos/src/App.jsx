import FirstComponent from "./componets/FirstComponent";
import TemplateExpressions from "./componets/TemplateExpressions";
import MyComponent from "./componets/MyComponent";
import Events from "./componets/Events";
import Challeger from "./componets/Challeger";

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challeger />
    </div>
  );
}

export default App;
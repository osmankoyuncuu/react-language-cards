import "./App.css";
import reactImg from "./assets/react.svg";
import data from "./helper/data";
import Card from "./component/card/Card";

const App = () => {
  return (
    <div className="container">
      <img className="react" src={reactImg} alt="" />
      <div className="card-container">
        <h1>Language</h1>
        <div className="card-box">
          {data.map((item) => (
            <Card name={item.name} img={item.img} options={item.options} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

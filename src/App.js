import "./App.css";
import axios from "axios";

function App() {
  return (
    <div className="App">
      {/* axios post */}

      <button onClick={data}>Click</button>
    </div>
  );
}

const data = () => {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

/* if the button is clicked, the data will be fetched from the api */





export default App;

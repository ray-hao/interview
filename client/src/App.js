import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const FetchData = async () => {

  try {
    const res = await fetch('http://localhost:8080/test', {
      method: "GET", 
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      },
    });

    return await res.json();
  } catch (err) {
    
  }

}

function App() {
  return (
    <Router>
      <div className="container">
        <button onClick={() => FetchData().then((res) => console.log(res))}>hi</button>
      </div>
    </Router>
  );
}

export default App;

import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import Body from "./components/Body";

export default function App() {
  return (
    <>
      <NavBar />
      <Body />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));
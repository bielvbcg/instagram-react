import  ReactDOM  from "react-dom";
import FundoMobile from "./jsx/FundoMobile";
import Corpo from "./jsx/Corpo";
import Navbar from "./jsx/Navbar";

function App(){
  return (
    <div>
      <Navbar />
      <Corpo />
      <FundoMobile />
    </div>
  );
}

ReactDOM.render(<App /> , document.querySelector(".root"));
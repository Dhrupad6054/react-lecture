import logo from "./logo.svg";
import "./App.css";
import Garage from "./Components/Garage";
import Car from "./Components/Car";
import Events from "./Components/Events";
import Goal from "./Components/Goal";
import Employee from "./Components/Employee";
import School from "./Components/School";

function App() {

  let listOFEmployee = ['mikita' , 'dhrupad', 'vruta' , 'hema'];
  // // console.log(listOFEmployee);

  return (
    <div >

      <School/>
    {/* <Car/> */}
    {/* <Garage/> */}
    {/* <Events/> */}
    {/* <Goal isGoal={false} /> */}
    {/* <Employee listOFEmployee = {listOFEmployee}/> */}
    </div>
  );
}

export default App;

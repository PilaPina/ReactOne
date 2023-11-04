// Importing components from their respective files
import Button from './Button';
import Card from './Card';
import Navbar from './Navbar';
import InfoCards from './InfoCards';


// This is the main App component of our React application. The Navbar, Card and Button components are rendered within the main App component
function App() {
  return (
    <> 
      <Navbar></Navbar>   
      <br></br>
      <div className="infocardcontainter">
        <InfoCards text="Liquid adheres to the surface of a solid." />
        <InfoCards text="Liquid adheres to the surface of a solid." />
      </div>
      <Card></Card>
      <br></br>
      <h2 className="text">CLICKING BUTTONS WILL OUTPUT IN CONSOLE</h2>
      <div>
        <Button color="rgb(147, 190, 223)" radius={50}></Button>
        <Button color="rgb(142, 249, 243)" radius={15}></Button>
        <Button color="rgb(94, 252, 141)"></Button>
        <Button color="" radius={36}></Button>  {/* leave it empty bc we want to use the default color*/}
      </div>
      
    </>
  );
}


// The App component is exported for use in other parts of the application
export default App;

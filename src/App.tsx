// Importing components from their respective files
import Button from './Button';
import Card from './Card';
import Navbar from './Navbar';

//This function below is a component. 
//Any function that returns JSX is a component in React. 
// we import components from their location 
// and we can use them like they were any other html element, 
// except they start with a capital letter 

// This is the main App component of our React application. The Navbar, Card and Button components are rendered within the main App component
function App() {
  return (
    <> 
      <Navbar></Navbar>   
      <br></br>
      <Card />
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

// There has to be a div around the whole thing, unwrapped divs can't be adjacent to one another
// If you feel like your code is nothing but divs inside of divs you can use the <> </> to wrap, like a div with no name. 
// Basically: The <> and </> are shorthand for React Fragments which let you group a list of children without adding extra nodes to the DOM.

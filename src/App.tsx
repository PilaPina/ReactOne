// Importing components from their respective files
import Button from './Button';
import Card from './Card';
import Navbar from './Navbar';
import InfoCards from './InfoCards';
import imageSrc from './images/benjamin-lehman-k8xJOnA3zYM-unsplash (1).jpg'


// This is the main App component of our React application. The Navbar, Card and Button components are rendered within the main App component
function App() {
  return (
    <> 
      <Navbar></Navbar>   
      <br></br>
      <div className="infoCardContainer">
        <InfoCards text="Attempting Props for these components." imageSrc={imageSrc} />
        <InfoCards text="CSS animation creates the rotation." imageSrc={imageSrc} />
        <InfoCards text="The text flips over too so it's still readable." imageSrc={imageSrc} />
      </div>  
      <div className='buttonContainer'>
        <h2 className="text">These buttons are customized through props. They also log the clicks in the console.</h2>
        <div className='buttonDiv'>
          <Button color="rgb(147, 190, 223)" radius={50}></Button>
          <Button color="rgb(142, 249, 243)" radius={15}></Button>
          <Button color="rgb(94, 252, 141)"></Button>
          <Button color="" radius={36}></Button>  {/* leave it empty bc we want to use the default color*/}
        </div>
      </div>
      <div className="bottomContainer">
        <Card></Card>
      </div>  
    </>
  );
}


// The App component is exported for use in other parts of the application
export default App;

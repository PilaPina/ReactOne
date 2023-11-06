// Importing components from their respective files
import Button from './Button';
import Card from './Card';
import Navbar from './Navbar';
import InfoCards from './InfoCards';
// Importing images from their respective files
import imageSrc1 from './images/3.jpg';
import imageSrc2 from './images/4.jpg';
import imageSrc3 from './images/5.jpg';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image6 from './images/6.jpg';

// This is the main App component of our React application. 
// The Navbar, InfoCards, Card and Button components are rendered within the main App component with different props.
function App() {
  return (
    <> 
      <Navbar></Navbar>   
      <br></br>  
      <div className="infoCardContainer">  
        <InfoCards text="Attempting Props for these components." imageSrc={imageSrc1} />
        <InfoCards text="CSS animation creates the rotation." imageSrc={imageSrc2} />
        <InfoCards text="The text flips over too so it's still readable." imageSrc={imageSrc3} />
      </div>  
      <div className='buttonContainer'>
        <h2 className="text">Buttons are customized with Props and use State for counting the clicks!</h2>
        <div className='buttonDiv'>
          <Button color="rgb(147, 190, 223)" radius={50}></Button>
          <Button color="rgb(142, 249, 243)" radius={30}></Button>
          <Button color="rgb(94, 252, 141)"></Button>
          <Button color="rgba(94, 69, 141, 0.6)" radius={18}></Button>
          <Button color="" radius={36}></Button>  {/* leave it empty bc we want to use the default color*/}
        </div>
      </div>
      <div className="bottomContainer">
        <Card image={image1}></Card>
        <Card image={image2}></Card>
        <Card image={image6}></Card>
      </div>  
    </>
  );
}
// The App component is exported for use in other parts of the application
export default App;

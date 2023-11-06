// // Define a type `Props` for the properties that the `Button` component can accept.
type Props = {
    color?:string   // this is if we want different colors, it's a parameter, but it complains at first and then we specify color. Also put {color} inside the const Button 
                    // we define the color for buttons int the app.tsx 
                    // this button will not show up in our root div unless we import this into our app.tsx file
                    // the ? tells us the color is an optional thing
    radius?:number
} 
// We added more buttons into app.tsx with different styles, we use props for that (same as html attributes, like href, class, id etc)

const Button  = ({color, radius}:Props) => {   // have to add color and radius in the button variable
    const styles = {    // this needs to be an object. Here I am adding more styles to the button below. 
        backgroundColor: color || "rgb(109, 90, 114)",
        borderRadius: radius? radius+"px": "5px",   // this is saying if radius is defined then we'll add px to it or else have the radius be 10px. 
        height: "100px",
        width: "100px",
        fontSize: "20px",
        color: "rgb(35, 9, 21)",
        margin: "20px",
        cursor: "pointer",
        borderStyle: "hidden",
    }  
    // Define a function `handleClick` that will be called when the button is clicked.
    const handleClick = () => {
        console.log("This Button Was Clicked!");
    }
    // Return a button element with the defined styles and click handler.
    return (
    <>
     <button style={styles} className="button" onClick={handleClick}>CLICK</button> 
       {/*  <button style={{backgroundColor:color}}>click me</button>  ||  style={{}} we can create a css file but we can also use a style tag and put double curly. First curly says we're using JS in our html, that means an object is coming. Our object will represent color. In JS we use Capitals and not dashes*/}
    </>
    )
}

export default Button;

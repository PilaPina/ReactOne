import {useState} from 'react';
// useState and setFunction. When we create a variable using useState, it returns an array with two elements: the current state value and a function to update that state. That function is called setFunction.

// Define a type `Props` for the properties that the `Button` component can accept.
type Props = {
    color?:string   // this is if we want different colors, it's a parameter, but it complains at first and then we specify color. Also put {color} inside the const Button 
                    // we define the color for buttons int the app.tsx 
                    // this button will not show up in our root div unless we import this into our app.tsx file
                    // the ? tells us the color is an optional thing
    radius?:number
} 
// We added more buttons into app.tsx with different styles, we use props for that (same as html attributes, like href, class, id etc)

const Button  = ({color, radius}:Props) => {   // have to add color and radius in the button variable
    const [count, setCount] = useState(0);   //  The count is the current state value. And setCount is the setFunction. 
    
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

    const textStyle = {
        backgroundColor: "rgba(4, 88, 94, 0.3)",
        height: "30px",
        width: "50px",
        fontSize: "20px",
        color: "rgb(35, 9, 21)",
        margin: "20px",
        borderRadius: "50px",
        borderStyle: "hidden",
    }
    // Define a function `handleClick` that will be called when the button is clicked. Adding `state` (count) to it. 
    const handleClick = () => {
        setCount(count + 1);
        console.log("This Button Was Clicked!");
    }
    // Return a button element with the defined styles and click handler. 
    // Added onMouseEnter/onMouseLeave to buttons. When mouse enters it changes color, when mouse leaves it reverts to it's original color.
    return (
    <>
     <button style={styles} 
        className="button" 
        onClick={handleClick} 
        onMouseEnter={e => {
            (e.target as HTMLElement).style.backgroundColor = 'rgba(147, 190, 223, 0.2)';
            console.log('onMouseEnter')
        }}
        onMouseLeave={e => {
            (e.target as HTMLElement).style.backgroundColor = color || "rgb(109, 90, 114)";
            console.log('onMouseLeave')
        }}>
            CLICK
    </button> 
     <p style={textStyle} className="counter">{count}</p>
    </>
    )
}

export default Button;

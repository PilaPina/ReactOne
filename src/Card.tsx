import MyImage from "./images/mrjn-photography-YpZ2cj4s0oo-unsplash.jpg"

// This is a component named Card
const Card: React.FC = ()  => { 
    // `look` is an object that contains CSS properties for the card.
    const look:React.CSSProperties = {
        width: "400px",
        height: "600px",
        borderRadius: "30px",
        backgroundColor: "rgb(131, 119, 209)",
        cursor: "pointer",
    }
 
    // `text` is another object that contains CSS properties specifically for the text inside the card.
    const text:React.CSSProperties = {
        color: "white",
        fontSize: "30px",
    }
    // The component returns a single `<div>` element with a paragraph `<p>` inside it.
    return (
        <div style={{...look, ...text}} className="card">
            <p>HOVER HERE</p>
            <img src={MyImage} alt="Water pouring over hands" className="cardImage"></img>   
        </div>  
    )   // The style of the `<div>` is a combination of the `look` and `text` objects.
}

export default Card
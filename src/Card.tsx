
type props ={
    image:string;
}

// This is a component named Card
const Card: React.FC <props> = ({image}) =>{ 
    // `look` is an object that contains CSS properties for the card.
    const look:React.CSSProperties = {
        width: "400px",
        height: "500px",
        borderRadius: "30px",
        backgroundColor: "rgba(131, 119, 209, 0.8)",
        cursor: "pointer",
    }
 
    // `text` is another object that contains CSS properties specifically for the text inside the card.
    const text:React.CSSProperties = {
        color: "rgb(35, 9, 21)",
        fontSize: "30px",
    }
    // The component returns a single `<div>` element with a paragraph `<p>` inside it.
    return (
        <div style={{...look, ...text }} className="cardBottom">
            <p>HOVER HERE</p>
            <img src={image} alt="" className="cardImage" />     
        </div>  
    )   // The style of the `<div>` is a combination of the `look` and `text` objects.
}

export default Card
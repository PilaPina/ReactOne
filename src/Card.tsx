
// This is a component named Card
const Card = () => { 
    // `look` is an object that contains CSS properties for the card.
    const look:React.CSSProperties = {
        maxWidth: "30%",
        height: "200px",
        borderRadius: "30px",
        padding: "30px",
        margin: "30px",
        backgroundColor: "rgb(131, 119, 209)",
        borderColor: "rgb(123, 0, 12)",
        border: "5px",
        cursor: "pointer",
    }
    // `text` is another object that contains CSS properties specifically for the text inside the card.
    const text:React.CSSProperties = {
        color: "white",
        fontSize: "40px"
    }
    // The component returns a single `<div>` element with a paragraph `<p>` inside it.
    return (
        <div style={{...look, ...text}} className="card"><p>HOVER HERE</p></div>
    )   // The style of the `<div>` is a combination of the `look` and `text` objects.
}


export default Card
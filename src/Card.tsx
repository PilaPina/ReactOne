const Card = () => { 
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
    const text:React.CSSProperties = {
        color: "white",
        fontSize: "40px"
    }
    return (
        <div style={{...look, ...text}} className="card"><p>HOVER HERE</p></div>
    )
}


export default Card

const Navbar = () => {
    const look:React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "25px",
        listStyle: "none",
        fontSize: "30px",
        cursor: "pointer",
        backgroundColor: "rgb(147, 190, 223)", 
    }
    return (
      <>
      <ul style={look}>
        <li>COLOR</li>
        <li>CHANGE</li>
        <li>ON</li>
        <li>HOVER</li>
      </ul>
      </>
    )
  }
  export default Navbar
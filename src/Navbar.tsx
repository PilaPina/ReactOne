
// This is a component named Navbar 
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
        // React.CSSProperties is an interface from the React library that represents a CSS style object.
        // This interface includes all the CSS properties you might use, 
        // and TypeScript will check that any object you assign to a React.CSSProperties variable has properties that are known CSS properties, 
        // and that those properties’ values are of the correct type.
        // For example, if you try to assign an unknown property or a value of the wrong type to the look variable, 
        // TypeScript will give you an error. This helps catch potential bugs in your code.  
      }
    return ( 
        // Navbar below  
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
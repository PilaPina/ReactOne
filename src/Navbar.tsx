
// This is a component named Navbar 
const Navbar = () => {
    const look:React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: "25px",
        listStyle: "none",
        fontSize: "30px",
        cursor: "pointer",
        backgroundColor: "rgba(147, 190, 223, 0.2)", 
        // React.CSSProperties is an interface from the React library that represents a CSS style object.
        // This interface includes all the CSS properties you might use, 
        // and TypeScript will check that any object you assign to a React.CSSProperties variable has properties that are known CSS properties, 
        // and that those properties’ values are of the correct type.
        // For example, if you try to assign an unknown property or a value of the wrong type to the look variable, 
        // TypeScript will give you an error. This helps catch potential bugs in your code.  
      }
    return ( 
        // Navbar below - I got a warning when adding target blank in link. It poses a security risk. Adding rel="noopener noreferrer" fixes that. 
      <>   
      <ul style={look}>  
        <li>React:</li>
        <li><a href="https://react.dev/learn/your-first-component" target="_blank" rel="noopener noreferrer">Components</a></li>  
        <li><a href="https://react.dev/learn/passing-props-to-a-component" target="_blank" rel="noopener noreferrer">Props</a></li>
        <li>State</li>
        <li>Fetch</li>
        <li>Styled Components</li>
      </ul>
      </>
    )
  }
  export default Navbar
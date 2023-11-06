
// Defining the props I want to send to the component
type InfoCardsProps = {
  text: string;
  imageSrc: string;
}
// InfoCards is my component and adding props so I can customize the cards
const InfoCards = ({ text, imageSrc }: InfoCardsProps) => {
    const style = {
      width: "300px",
      height: "500px",
      border: "2px",
      borderRadius: "30px",
      backgroundColor: "rgba(131, 119, 209, 0.8)",
      margin: "10px",
      cursor: "pointer",
    }
    const textStyle = {
      color:"rgb(35, 9, 21)",
      fontSize: "25px",
      paddingLeft: "30px",
      paddingRight: "15px",
      paddingBottom: "0px",
    }
    return (  
      <div style={style} className="card">
        <p className="infocardsText" style={textStyle}>{text}</p>  
        <img src={imageSrc} alt="" className="cardImage" />
      </div>
    )
  }

  export default InfoCards
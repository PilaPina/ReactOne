import imgSrc from './images/benjamin-lehman-k8xJOnA3zYM-unsplash (1).jpg'

const InfoCards: React.FC<{text: string}> = ({text}) => {
    const style = {
      width: "300px",
      height: "500px",
      border: "2px",
      borderRadius: "30px",
      backgroundColor: "rgb(131, 119, 209)",
      margin: "10px",
      cursor: "pointer",
    }
    const textStyle = {
      color:"black",
      fontSize: "20px",
    }
    return (
      <div style={style} className="card">
        <p style={textStyle}>{text}</p>
        <img src={imgSrc} alt="" className="cardImage" />
      </div>
    )
  }

  export default InfoCards
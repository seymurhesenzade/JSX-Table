import asusImg from '../../assets/Media/Asus.jpg'
import lenovoImg from '../../assets/Media/Lenovo.jpg'



const Card = () => {
  return (
    <>
      <div className="card" style={{border: "1px solid", borderRadius: "20px", maxWidth: "300px"}}>
  <img className="card-img-top" src={lenovoImg} alt="Card image cap" width={200}/>
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:"1.5rem"}}>Lenovo</h5>
    <p className="card-text" style={{fontStyle:"italic"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary">More Info</button>
  </div>
</div>
    </>
  )
}

export default Card

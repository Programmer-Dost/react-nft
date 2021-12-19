import "./CollectionCard.css";
import weth from "../assets/weth.png";
function CollectionCard({ id, name, traits, image }) {
  return (
    <div className="collectionCard">
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">.#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} alt="" className="weth_img" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
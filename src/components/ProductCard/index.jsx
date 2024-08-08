
const ProductCard = (props) => {
  return (
    <div className="productCard">
      <button className="addToFav">
        <i className="fa fa-heart"></i>
      </button>
      <div className="productImg">
        <img src={props.product.img} alt="" />
      </div>
      <div className="productInfo">
        <a href="">{props.product.name}</a>
        <p>${props.product.price}</p>
      </div>
      <button className="addToCard">Add to cart</button>
    </div>
  );
};

export default ProductCard;

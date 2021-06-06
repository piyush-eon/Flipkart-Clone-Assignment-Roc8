import "./SingleCard.css";

const SingleCard = ({ product }) => {
  // const pricecalc = (pri) => {};

  return (
    <div className="singlecard">
      <img src={product.image} className="singlecard__img" alt={product.name} />
      <div className="singlecard__data">
        <span className="singlecard__brand">{product.brand}</span>
        <span className="singlecard__name">
          {product.name.length < 23 ? (
            product.name
          ) : (
            <span>
              {product.name.substring(0, 23)}
              ...
            </span>
          )}
          {product.assured && (
            <img
              className="px-2"
              height="20"
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
              alt={product.name}
            />
          )}
        </span>
        <span className="singlecard__data--price">
          <span style={{ fontWeight: 500 }}>₹{product.price}</span>{" "}
          <strike className="singlecard__brand">₹{product.price}</strike>{" "}
          <span style={{ fontWeight: 500, color: "green" }}>
            {product.offer} off
          </span>
        </span>
        <div>
          <span className="singlecard__brand">SIZE: </span>
          {product.size.map((m) => `${m}, `)}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;

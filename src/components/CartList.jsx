const CartList = ({ data }) => {
  return (
    <main>
      <li>
        <div>
          <img src={data.image.desktop} alt={data.name} />
          <img src={data.image.tablet} alt={data.name} />
          <img src={data.image.mobile} alt={data.name} />
        </div>
      </li>
    </main>
  );
};

export default CartList;

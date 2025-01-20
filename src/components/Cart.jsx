import data from '@/services/data.json';
import CartList from '@/components/CartList';

const Cart = () => {
  return (
    <main>
      <h1>cart</h1>
      <ul>
        {data.map((data, i) => (
          <CartList data={data} key={i} />
        ))}
      </ul>
    </main>
  );
};

export default Cart;

import data from '@/services/data.json';
import CartList from '@/components/CartList';
import YourCart from './YourCart';
import OrderConfirmation from './OrderConfirmation';
const Cart = () => {
  return (
    <main className="py-8 px-6 relative ">
      <h1 className="font-bold text-2xl mb-4 ">Desserts</h1>
      <ul className="grid gap-4 lg:grid-cols-3 lg:pr-80 relative">
        {data.map((data, i) => (
          <CartList data={data} key={i} />
        ))}
      </ul>
      <div className="lg:absolute cartPosition ">
        <YourCart />
      </div>
      <div className="absolute orderPosition">
        <OrderConfirmation />
      </div>
    </main>
  );
};

export default Cart;

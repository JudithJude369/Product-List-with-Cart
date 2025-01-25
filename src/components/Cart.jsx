import data from '@/services/data.json';
import CartList from '@/components/CartList';

const Cart = () => {
  return (
    <main className="py-8 px-6 relative ">
      <h1 className="font-bold text-2xl mb-4 ">Desserts</h1>
      <ul className="grid gap-4 lg:grid-cols-3 lg:pr-80 relative">
        {data.map((data, i) => (
          <CartList data={data} key={i} />
        ))}
      </ul>
      <h2 className="block lg:hidden ">many men</h2>
      <h2 className="absolute position hidden lg:block">many men</h2>
    </main>
  );
};

export default Cart;

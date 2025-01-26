import emptyCart from '@/assets/images/illustration-empty-cart.svg';

const YourCart = () => {
  return (
    <div className="rounded-2xl bg-Rose-50 px-6 py-4">
      <h1 className="capitalize font-bold text-xl text-Red">your cart (0)</h1>
      <img src={emptyCart} alt="" className="mx-auto mt-12" />
      <p className=" text-Rose-500 mt-12 text-center font-medium">
        Your added items will appear here
      </p>
    </div>
  );
};

export default YourCart;

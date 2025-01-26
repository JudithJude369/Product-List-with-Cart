import Button from '@/components/Button';
import addToCart from '@/assets/images/icon-add-to-cart.svg';
const CartList = ({ data }) => {
  return (
    <main>
      <li className="">
        <div className="relative">
          <img
            src={data.image.mobile}
            alt={data.name}
            className="rounded-xl  lg:hidden md:hidden"
          />
          <img
            src={data.image.tablet}
            alt={data.name}
            className="rounded-xl lg:hidden hidden md:block "
          />
          <img
            src={data.image.desktop}
            alt={data.name}
            className="rounded-xl hidden md:hidden lg:block"
          />
          <Button className="font-semibold flex gap-2 border-Rose-500 border-2 rounded-3xl bg-Rose-50 px-4 py-2  absolute btn  ">
            <img src={addToCart} alt="" />
            <p className="self-center">Add to Cart</p>
          </Button>
        </div>
        <div className="mt-12 mb-4 font-medium">
          <p className="text-Rose-500 ">{data.name}</p>
          <p className="text-xl font-semibold">{data.category}</p>
          <p className="text-Red">${data.price}</p>
        </div>
      </li>
    </main>
  );
};

export default CartList;

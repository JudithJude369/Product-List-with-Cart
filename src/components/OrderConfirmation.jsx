import iconOrder from '@/assets/images/icon-order-confirmed.svg';
import Button from '@/components/Button';

const OrderConfirmation = () => {
  return (
    <main className="rounded-2xl bg-Rose-50 px-8  ">
      <img src={iconOrder} alt="" className=" mb-4 pt-8" />
      <h1 className="capitalize font-bold text-3xl">
        order <br />
        confirmed
      </h1>
      <p className=" text-Rose-500 font-medium">We hope you enjoy your food!</p>
      <Button className="font-semibold rounded-3xl bg-Red px-8 lg:px-12 py-2 mt-24 mx-auto mb-8 ">
        <p className="capitalize text-Rose-50">start new order</p>
      </Button>
    </main>
  );
};

export default OrderConfirmation;

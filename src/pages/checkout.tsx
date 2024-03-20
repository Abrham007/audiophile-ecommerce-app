import Cart from "@/components/Cart/Cart";
import CheckoutForm from "@/components/CheckoutPage/CheckoutForm";
import CheckoutSummary from "@/components/CheckoutPage/CheckoutSummary";
import Header from "@/components/Header/Header";
import Modal from "@/components/Modal";
import SuccessMessage from "@/components/SuccessMessage";

export default function Checkout() {
  return (
    <>
      <div className="px-6 md:px-10 lg:px-0 pt-[106px] md:pt-[122px] lg:pt-[170px] pb-[120px] bg-DarkWhite">
        <div className="w-full max-w-[1110px] mx-auto mb-6">
          <button className="self-start ">Go Back</button>
        </div>

        <section className="w-full max-w-[1110px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-[30px] lg:items-start">
          <CheckoutForm></CheckoutForm>
          <CheckoutSummary></CheckoutSummary>
        </section>
      </div>

      <Modal isOpen={false} setIsOpen={() => {}} className="rounded-lg">
        <SuccessMessage></SuccessMessage>
      </Modal>

      <Modal isOpen={true} setIsOpen={() => {}} className="rounded-lg">
        <Header></Header>
        <div className="w-full max-w-[1110px] mx-auto fixed  top-0 left-0 right-0">
          <Cart></Cart>
        </div>
      </Modal>
    </>
  );
}

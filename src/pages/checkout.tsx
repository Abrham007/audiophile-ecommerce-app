import CheckoutForm from "@/components/CheckoutPage/CheckoutForm";

export default function Checkout() {
  return (
    <div className="w-full max-w-[1110px] mx-auto flex flex-col gap-6 px-6 md:px-10 lg:px-0 mt-[106px] md:mt-[122px] lg:mt-[170px] mb-[120px] bg-DarkWhite">
      <button className="self-start">Go Back</button>

      <section className="flex flex-col gap-8">
        <CheckoutForm></CheckoutForm>
      </section>
    </div>
  );
}

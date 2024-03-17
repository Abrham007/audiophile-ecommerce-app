import CheckoutForm from "@/components/CheckoutPage/CheckoutForm";
import CheckoutSummary from "@/components/CheckoutPage/CheckoutSummary";

export default function Checkout() {
  return (
    <div className="px-6 md:px-10 lg:px-0 pt-[106px] md:pt-[122px] lg:pt-[170px] pb-[120px] bg-DarkWhite">
      <section className="w-full max-w-[1110px] mx-auto flex flex-col gap-8">
        <button className="self-start -mb-2">Go Back</button>
        <CheckoutForm></CheckoutForm>
        <CheckoutSummary></CheckoutSummary>
      </section>
    </div>
  );
}

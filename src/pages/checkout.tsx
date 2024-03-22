import CheckoutForm from "@/components/CheckoutPage/CheckoutForm";
import CheckoutSummary from "@/components/CheckoutPage/CheckoutSummary";
import { useRouter } from "next/router";

export default function Checkout() {
  const router = useRouter();
  return (
    <>
      <div className="px-6 md:px-10 lg:px-0 pt-[106px] md:pt-[122px] lg:pt-[170px] pb-[120px] bg-DarkWhite">
        <div className="w-full max-w-[1110px] mx-auto mb-6">
          <button
            className="self-start text-Black opacity-50 hover:text-Orange hover:opacity-100"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>

        <section className="w-full max-w-[1110px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-[30px] lg:items-start">
          <CheckoutForm></CheckoutForm>
          <CheckoutSummary></CheckoutSummary>
        </section>
      </div>
    </>
  );
}

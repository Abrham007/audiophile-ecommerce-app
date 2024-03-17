import Button from "../UI/Button/Button";
import SummaryItem from "./SummaryItem";

export default function CheckoutSummary() {
  return (
    <div className="lg:w-[350px] px-6 py-8 md:p-8 flex flex-col gap-8 bg-White rounded-lg">
      <h2 className="text-lg text-Black uppercase">summary</h2>
      <ul className="flex flex-col gap-6">
        <SummaryItem title="XX99 MK II"></SummaryItem>
        <SummaryItem title="XX59"></SummaryItem>
        <SummaryItem title="YX1"></SummaryItem>
      </ul>
      <div className="flex flex-col gap-2">
        <p className="flex justify-between">
          <span className="text-base text-Black opacity-50 uppercase">
            TOTAL
          </span>
          <span className="text-lg tracking-normal text-Black uppercase">
            $ 5,396
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-base text-Black opacity-50 uppercase">
            SHIPPING
          </span>
          <span className="text-lg tracking-normal text-Black uppercase">
            $ 50
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-base text-Black opacity-50 uppercase">
            VAT (INCLUDED)
          </span>
          <span className="text-lg tracking-normal text-Black uppercase">
            $ 1,079
          </span>
        </p>
        <p className="flex justify-between mt-4">
          <span className="text-base text-Black opacity-50 uppercase">
            GRAND TOTAL
          </span>
          <span className="text-lg tracking-normal text-Orange uppercase">
            $ 5,446
          </span>
        </p>
      </div>
      <Button $type="1">CONTINUE & PAY</Button>
    </div>
  );
}

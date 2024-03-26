import VisaLogo from "../../../public/payment-method-icons/1.png";
import MasterCardLogo from "../../../public/payment-method-icons/2.png";
import AmericanExpressLogo from "../../../public/payment-method-icons/3.png";
import CirrusLogo from "../../../public/payment-method-icons/4.png";
import Image from "next/image";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

export default function CardForm() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-1">
        <Image src={VisaLogo} alt="visa logo" width={30}></Image>
        <Image src={MasterCardLogo} alt="master card logo" width={30}></Image>
        <Image
          src={AmericanExpressLogo}
          alt="amerian express logo"
          width={30}
        ></Image>
        <Image src={CirrusLogo} alt="cirrus logo" width={30}></Image>
      </div>
      <label className="flex flex-col gap-[9px]">
        <div className="flex justify-between">
          <span className="text-Black text-[0.75rem] -tracking-[0.01338rem] font-bold">
            Cardholder Name
          </span>
        </div>
        <input
          name="card-holder-name"
          placeholder="Alexei Ward"
          type="text"
          className="py-[18px] pl-6 hover:cursor-pointer border border-solid border-[#CFCFCF] rounded-lg focus:border-Orange hover:border-Orange text-sm -tracking-[0.01563rem] font-bold outline-none"
        ></input>
      </label>
      <label className="flex flex-col gap-[9px]">
        <div className="flex justify-between">
          <span className="text-Black text-[0.75rem] -tracking-[0.01338rem] font-bold">
            Card Number
          </span>
        </div>
        <CardNumberElement className="py-[18px] pl-6 hover:cursor-pointer border border-solid border-[#CFCFCF] rounded-lg focus:border-Orange hover:border-Orange text-sm -tracking-[0.01563rem] font-bold outline-none"></CardNumberElement>
      </label>

      <div className="w-full flex gap-4">
        <label className="flex flex-col gap-[9px] flex-1">
          <div className="flex justify-between">
            <span className="text-Black text-[0.75rem] -tracking-[0.01338rem] font-bold">
              Card Expiration
            </span>
          </div>
          <CardExpiryElement className="py-[18px] pl-6 hover:cursor-pointer border border-solid border-[#CFCFCF] rounded-lg focus:border-Orange hover:border-Orange text-sm -tracking-[0.01563rem] font-bold outline-none"></CardExpiryElement>
        </label>
        <label className="flex flex-col gap-[9px] flex-1">
          <div className="flex justify-between">
            <span className="text-Black text-[0.75rem] -tracking-[0.01338rem] font-bold">
              Card Verification Code
            </span>
          </div>
          <CardCvcElement className="py-[18px] pl-6 hover:cursor-pointer border border-solid border-[#CFCFCF] rounded-lg focus:border-Orange hover:border-Orange text-sm -tracking-[0.01563rem] font-bold outline-none"></CardCvcElement>
        </label>
      </div>
    </div>
  );
}

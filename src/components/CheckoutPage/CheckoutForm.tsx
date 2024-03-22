import Image from "next/image";
import RadioInput from "../UI/Inputs/RadioInput";
import TextInput from "../UI/Inputs/TextInput";
import CashIcon from "../../../public/checkout/icon-cash-on-delivery.svg";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  zipCode: number;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber: string;
  eMoneyPin: string;
};

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  let paymentMethodDispaly = (
    <div className="flex flex-col md:flex-row gap-6 md:gap-4">
      <div className="flex-1">
        <TextInput
          name="eMoneyNumber"
          register={register}
          errors={errors}
          label="e-Money Number"
          placeholder="238521993"
        ></TextInput>
      </div>
      <div className="flex-1">
        <TextInput
          name="eMoneyPin"
          register={register}
          errors={errors}
          label="e-Money PIN"
          placeholder="6891"
        ></TextInput>
      </div>
    </div>
  );

  if (watch("paymentMethod") === "cash-on-delivery") {
    paymentMethodDispaly = (
      <div className="flex gap-6 md:gap-8 flex-col md:flex-row items-center md:items-start">
        <Image
          src={CashIcon}
          alt=""
          width={48}
          height={48}
          className="shrink-0"
        ></Image>
        <p className="text-base text-Black opacity-50">
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </p>
      </div>
    );
  }

  return (
    <div className="lg:w-[730px] p-6 md:px-[28px] lg:py-[30px] flex flex-col gap-8 bg-White rounded-lg">
      <h1 className="text-xl2 md:text-xl3 text-Black tracking-[0.0625rem] uppercase">
        CHECKOUT
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
        id="checkout-form"
        noValidate
      >
        <fieldset>
          <legend className="text-xs text-Orange uppercase mb-4">
            Billing details
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
            <TextInput
              name="name"
              register={register}
              errors={errors}
              label="Name"
              placeholder="Alexei Ward"
            ></TextInput>
            <TextInput
              name="email"
              register={register}
              errors={errors}
              type="email"
              label="Email Address"
              placeholder="alexei@mail.com"
            ></TextInput>
            <TextInput
              name="phoneNumber"
              register={register}
              errors={errors}
              label="Phone Number"
              placeholder="Alexei Ward"
            ></TextInput>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-xs text-Orange uppercase mb-4">
            shipping info
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
            <div className="md:col-span-2">
              <TextInput
                name="address"
                register={register}
                errors={errors}
                label="Your Address"
                placeholder="1137 Williams Avenue"
              ></TextInput>
            </div>

            <TextInput
              name="zipCode"
              register={register}
              errors={errors}
              label="ZIP Code"
              placeholder="ZIP Code"
            ></TextInput>
            <TextInput
              name="city"
              register={register}
              errors={errors}
              label="City"
              placeholder="New York"
            ></TextInput>
            <TextInput
              name="country"
              register={register}
              errors={errors}
              label="Country"
              placeholder="Country"
            ></TextInput>
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-8">
          <legend className="text-xs text-Orange uppercase mb-4">
            payment details
          </legend>
          <fieldset className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex-1">
              <legend className="text-Black text-[0.75rem] -tracking-[0.01338rem] font-bold ">
                Payment Method
              </legend>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <RadioInput
                name="paymentMethod"
                register={register}
                value="e-Money"
                label="e-Money"
                checked={true}
              ></RadioInput>
              <RadioInput
                name="paymentMethod"
                register={register}
                value="cash-on-delivery"
                label="Cash on Delivery"
              ></RadioInput>
            </div>
          </fieldset>
          {paymentMethodDispaly}
        </fieldset>
      </form>
    </div>
  );
}

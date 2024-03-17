import RadioInput from "../UI/Inputs/RadioInput";
import TextInput from "../UI/Inputs/TextInput";

export default function CheckoutForm() {
  return (
    <div className="lg:w-[730px] p-6 md:px-[28px] lg:py-[30px] flex flex-col gap-8 bg-White rounded-lg">
      <h1 className="text-xl2 md:text-xl3 text-Black tracking-[0.0625rem] uppercase">
        CHECKOUT
      </h1>
      <form className="flex flex-col gap-8">
        <fieldset>
          <legend className="text-xs text-Orange uppercase mb-4">
            Billing details
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
            <TextInput
              name="name"
              label="Name"
              placeholder="Alexei Ward"
            ></TextInput>
            <TextInput
              name="email"
              label="Email Address"
              placeholder="alexei@mail.com"
            ></TextInput>
            <TextInput
              name="phone-number"
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
                label="Your Address"
                placeholder="1137 Williams Avenue"
              ></TextInput>
            </div>

            <TextInput
              name="zip-code"
              label="ZIP Code"
              placeholder="ZIP Code"
            ></TextInput>
            <TextInput
              name="city"
              label="City"
              placeholder="New York"
            ></TextInput>
            <TextInput
              name="country"
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
              <RadioInput name="payment-method" label="e-Money"></RadioInput>
              <RadioInput
                name="payment-method"
                label="Cash on Delivery"
              ></RadioInput>
            </div>
          </fieldset>
          <div className="flex flex-col md:flex-row gap-6 md:gap-4">
            <div className="flex-1">
              <TextInput
                name="e-money-number"
                label="e-Money Number"
                placeholder="238521993"
              ></TextInput>
            </div>
            <div className="flex-1">
              <TextInput
                name="e-money-pin"
                label="e-Money PIN"
                placeholder="6891"
              ></TextInput>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

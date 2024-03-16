import RadioInput from "../UI/Inputs/RadioInput";
import TextInput from "../UI/Inputs/TextInput";

export default function CheckoutForm() {
  return (
    <div className="p-6 flex flex-col gap-8 bg-White">
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
            <TextInput
              name="address"
              label="Your Address"
              placeholder="1137 Williams Avenue"
            ></TextInput>
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
          <fieldset>
            <legend className="text-Black text-[0.75rem] -tracking-[0.01338rem] font-bold mb-4">
              Payment Method
            </legend>
            <div className="flex flex-col gap-4">
              <RadioInput name="payment-method" label="e-Money"></RadioInput>
              <RadioInput
                name="payment-method"
                label="Cash on Delivery"
              ></RadioInput>
            </div>
          </fieldset>
          <div className="flex flex-col gap-6">
            <TextInput
              name="e-money-number"
              label="e-Money Number"
              placeholder="238521993"
            ></TextInput>
            <TextInput
              name="e-money-pin"
              label="e-Money PIN"
              placeholder="6891"
            ></TextInput>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

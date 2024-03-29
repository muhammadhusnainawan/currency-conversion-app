import React, { useId } from "react";

const inputBox = ({
  label,
  selectCurrency,
  onCurrencyChange,
  onAmountChange,
  amount,
  currencyOptions = [],
}) => {
  const amountInputId = useId();
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent border border-gray  py-1.5"
          type="number"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray cursor-pointer outlie-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default inputBox;

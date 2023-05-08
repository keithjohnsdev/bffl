import "./SelectInput.scss";
import "./TextInput.scss";
import { useState } from "react";

var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const countryObj = countries.getNames("en", { select: "official" });

const countryArr = Object.entries(countryObj).map(([key, value]) => {
  return {
    label: value,
    value: key,
    // disabled: false,
    // selected: false
  };
});

const countryArrWithPlaceholder = [
  {
    label: "Select Country",
    value: "",
    disabled: true,
    selected: true,
  },
  ...countryArr,
];

export const CountrySelectInput = ({
  classes,
  label,
  type,
  placeholder,
  value,
  name,
  onChange
}) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  function selectCountryHandler(e) {
    setSelectedCountry(e.target.value);
    onChange(e)
  }

  return (
    <div className={`input-wrapper ${classes}`}>
      <label>{label}</label>
      <div className="select-wrapper">
        <select
          type={type}
          placeholder={placeholder}
          name={name}
          style={{ width: "100%" }}
          value={selectedCountry}
          onChange={selectCountryHandler}
          defaultValue={countryArrWithPlaceholder[0]}
        >
          {!!countryArr?.length &&
            countryArr.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

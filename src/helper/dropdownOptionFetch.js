import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { selectBoxOptions } from "./FilteredData";

export const GetOptionData = ({ setOption, type, children }) => {
  const [selectedValue, setSelectedValue] = useState([]);
  const { clans, villages, kekkeigenkai, tailedBeasts, teams } =
    useContext(selectBoxOptions);

  const handleChange = (selectedOption) => {
    const values =
      selectedOption === null
        ? ""
        : selectedOption.length
        ? selectedOption.map((option) => option.value)
        : selectedOption.value;
    setSelectedValue(values);
  };

  useEffect(() => {
    setOption(selectedValue);
  }, [selectedValue, setOption]);

  let options;

  switch (type) {
    case "clan":
      options =
        clans && clans.map((clan) => ({ value: clan.name, label: clan.name }));
      break;
    case "village":
      options =
        villages &&
        villages.map((village) => ({
          value: village.name,
          label: village.name,
        }));
      break;
    case "kekkeigenkai":
      options =
        kekkeigenkai &&
        kekkeigenkai.map((kekkeigenkai) => ({
          value: kekkeigenkai.name,
          label: kekkeigenkai.name,
        }));
      break;
    case "tailedBeasts":
      options =
        tailedBeasts &&
        tailedBeasts.map((tailedBeast) => ({
          value: tailedBeast.name,
          label: tailedBeast.name,
        }));
      break;
    case "teams":
      options =
        teams && teams.map((team) => ({ value: team.name, label: team.name }));
      break;
    default:
      break;
  }

  return (
    <Select
      options={options}
      placeholder={selectedValue.length ? selectedValue : children}
      isClearable
      onChange={handleChange}
      value={options.filter((option) => selectedValue.includes(option.value))}
    />
  );
};

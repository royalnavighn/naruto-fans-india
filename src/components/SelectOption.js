import React from 'react'
import Select from 'react-select'
import { DropDownOptions } from '../helper/constants';


const options = DropDownOptions

function SelectOption() {
  return (
    <Select options={options} />
  )
}

export default SelectOptionsasuke
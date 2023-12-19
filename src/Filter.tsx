import React, { useState } from 'react';
import { STATUS } from './enums/FilterType';

function Filter() {

  return (
    <>
      <select className="relative flex-row bg-gray-50 px-200 sm:px-80 py-6 sm:py-12" name="filter" id="0" onChange={(evt) => {
        console.log(evt.target.value);
      }}>
        <option key={STATUS.ALL} value={STATUS.ALL}>
            {STATUS.ALL}
        </option>
        <option key={STATUS.ALIVE} value={STATUS.ALIVE}>
            {STATUS.ALIVE}
        </option>
        <option key={STATUS.UNKNOWN} value={STATUS.UNKNOWN}>
            {STATUS.UNKNOWN}
        </option>
        <option key={STATUS.DEAD} value={STATUS.DEAD}>
            {STATUS.DEAD}
        </option>
      </select>
    </>
  )
}

export default Filter
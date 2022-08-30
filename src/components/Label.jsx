
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Label() {
  const { labels, updateLabel } = useContext(GlobalContext);
  
  return (
    <React.Fragment>
      <p className="text-white font-bold mt-10">Задачи</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({ label: lbl, checked: !checked })}
            
            className={`h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className={`ml-2 capitalize text-xl text-${lbl}-400`}>{lbl}</span>
        </label>
      ))}
    </React.Fragment>
  );
}

import React from "react";
import { range } from "../utils/range";

const bases = range(2, 17);

export function SelectBase({ currentBase, onChange }) {
  return (
    <select value={currentBase} onChange={onChange}>
      {bases.map((base) => {
        return <option value={base}>Base {base}</option>;
      })}
    </select>
  );
}

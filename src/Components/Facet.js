import React from "react";

function Facet({ data, keyName, facetChange, value }) {

  function getFacet(arr, key) {
    let facetObj = {};
    for (let i = 0; i < arr.length; i++) {
      const intialKey = arr[i][key];
      facetObj[intialKey] = !facetObj[intialKey] ? 1 : facetObj[intialKey] + 1;
    }
    console.log(Object.entries(facetObj).map(([label, count]) => ({ label, count })));
    return Object.entries(facetObj).map(([label, count]) => ({ label, count }));
  }

  const facets = getFacet(data, keyName);
  return (
    <a className="">
      {keyName}
      <ul className="list-group">
        {facets?.map((facet, i) => (
          <li className="list-group-item">
            <label class="form-check-label" for="check1">
              <input
                type="radio"
                class="form-check-input"
                id={i}
                name={keyName}
                value={facet.label}
                checked={value === facet.label}
                onChange={() => facetChange(keyName, facet.label)}
              />
              {facet.label} ({facet.count})
            </label>
            
          </li>
        ))}
      </ul>
    </a>
  );
}

export default Facet;

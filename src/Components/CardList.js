import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "../Data.json";
import Facet from "./Facet";

function CardList() {
    const [filteredFacets, setFilterdFacets] = useState({}); // { color : 'red', size: 's'}
    const [sortByPrice, setSortByPrice] = useState('');

    const facetChange = (key, selectedVal) => {
        setFilterdFacets({ ...filteredFacets, [key]: selectedVal }); // 1st step user selected values and stored it in obj
    };

    let filteredProductData = [...data];

    for (const key in filteredFacets) {
        filteredProductData = filteredProductData.filter(
            (product) => product[key] === filteredFacets[key]
        );
    }

    if (sortByPrice === 'asc') { // han value aeag ba 
        filteredProductData = filteredProductData.sort((a, b) => a.price - b.price);
    }
    if (sortByPrice === 'desc') { // han value aeag ba 
        filteredProductData = filteredProductData.sort((a, b) => b.price - a.price);
    }



    const clearFilter = key => {
        const copyOfFacets = { ...filteredFacets };
        delete copyOfFacets[key];
        setFilterdFacets(copyOfFacets)
    }

    const clearAll = () => {
        setFilterdFacets({}) // 
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div id="mySidebar" className="sidebar">
                        <Facet
                            data={filteredProductData}
                            keyName="color"
                            value={filteredFacets["color"]}
                            facetChange={facetChange}
                        />
                        <Facet
                            data={filteredProductData}
                            keyName="size"
                            value={filteredFacets["size"]}
                            facetChange={facetChange}
                        />
                    </div>
                </div>
                <div className="col-md-9 mt-3">
                    <select value={sortByPrice} onChange={(e) => setSortByPrice(e.target.value)}>
                        <option selected value="">Select</option>
                        <option selected value="asc">Sort by price Asc</option>
                        <option selected value="desc">Sort by price Desc</option>
                    </select>
                    {
                        Object.entries(filteredFacets).map(([label, val]) => (
                            <button type="button" class="btn btn-dark mb-3 ml-3" onClick={() => clearFilter(label)}>
                                {label.toUpperCase()}: {val}<span class="badge badge-light ml-2">X</span>
                            </button>
                        ))
                    }
                    {
                        Object.keys(filteredFacets).length > 0 && <button type="button" class="btn btn-dark mb-3 ml-3" onClick={clearAll}>Clear All</button>
                    }
                    <div className="row">
                        {filteredProductData.map((p) => (
                            <Card productInfo={p} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardList;

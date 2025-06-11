import React from 'react';

const SideFilter = () => {
    return (
        <div className="container   row mt-3">
            {/* Category Filter */}
            <div className="d-flex flex-column mt-2">
                <div className="filter-title">Category</div>
                <div className="d-flex mt-3">
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">All</div>
                </div>
                <div className="d-flex mt-2">
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">Home Appliances</div>
                </div>
                <div className="d-flex mt-2">
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">Electronics</div>
                </div>
                <div className="d-flex mt-2">
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">Furniture</div>
                </div>
                <div className="d-flex mt-2">
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">Fashion</div>
                </div>
            </div>

            {/* Brand Filter */}
            <div className="d-flex flex-column mt-2">
                <div className="filter-title mt-3">Brand</div>
                <div className="d-flex mt-3">
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">All</div>
                </div>
                <div className="d-flex mt-2">
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">Apple</div>
                </div>
                <div className="d-flex mt-2">
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">Samsung</div>
                </div>
            </div>

            {/* Price Filter */}
            <div className="filter-title my-3">Price</div>
            <div className="d-flex">
                <p className="filter-sub my-2">From:</p>
                <input
                    className="m-1 text-center"
                    type="number"
                    style={{ width: "50px", height: "25px" }}
                />
            </div>
            <div className="mt-2     d-flex">
                <p className="filter-sub my-2">To:</p>
                <input
                    className="  ms-4 text-center"
                    type="number"
                    style={{ width: "50px", height: "25px" }}
                />
            </div>
        </div>
    );
};

export default SideFilter;

import React from 'react'
import ReactPaginate from "react-paginate";

const Pagination = ({PageCount,onpress}) => {

    const handlePageClick = (event) => { 
        console.log(event);  // هنا سترى الكائن الذي يتم تمريره إلى الدالة
        console.log(event.selected);  
        onpress(event.selected+1)
        console.log(event.selected+1)
    };
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={PageCount}
            previousLabel="Pre"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}

export default Pagination
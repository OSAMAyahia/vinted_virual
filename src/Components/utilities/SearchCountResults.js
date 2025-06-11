import React , {useEffect} from 'react'
import UnopDropdown from "unop-react-dropdown";
import { useDispatch, useSelector } from 'react-redux';
import { getallproduct } from './../../Redux/Actions/ProductAction';

const sortImage = 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/sort.png';

const SearchCountResult = () => {
    const handleDropdown = () => {
        // Placeholder function for handling dropdown events
    }

    const dispatch = useDispatch();

    useEffect(() => {
      const fetchProducts = async () => {
        await dispatch(getallproduct());
      };
    
      fetchProducts();
    }, [dispatch]);
    
    const data = useSelector(state => state.allproduct.data);
    let loadData;
    if (data &&  data.data &&  data.data.Data) {
      console.log('bestseller', data.data.Data);
      loadData= data.data.Data;
    }
    

    return (
        <div className="d-flex justify-content-between pt-3 px-2 container">
            <div className="sub-title">View Results {loadData? loadData.length :null}</div>
            <div className="search-count-text d-flex">
                <UnopDropdown
                    onAppear={handleDropdown}
                    onDisappearStart={handleDropdown}
                    trigger={
                        <p className="mx-1">
                            <img
                                width="20px"
                                height="20px"
                                className="ms-1"
                                src={sortImage}
                                alt="Sort icon"
                            />
                            Sort By
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover
                >
                    <div className="card-filter">
                        <div className="border-bottom card-filter-item">Best Selling</div>
                        <div className="border-bottom card-filter-item">Highest Rated</div>
                        <div className="border-bottom card-filter-item">
                            Price: Low to High
                        </div>
                        <div className="card-filter-item">Price: High to Low</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult;

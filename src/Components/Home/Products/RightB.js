import React from 'react'
const prev='https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/prev.png'
const RightButton = ( onClick, onDisable ) => {
    return (
        <img
            src={prev}
            alt=""
            width="35px"
            onClick={onClick}
            onDisable={onDisable}
            height="35px"
            style={{ float: "right", marginTop: "190px", cursor: "pointer" }}
        />
    )
}


export default RightButton
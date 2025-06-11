import React from 'react'
const next ='https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/next.png'
const LeftButton = ( onClick, onDisable ) => {
    return (
        <img
            src={next}
            alt=""
            width="35px"
            onClick={onClick}
            onDisable={onDisable}
            height="35px"
            style={{ float: "left", marginTop: "190px", cursor: "pointer" }}
        />
    )
}

export default LeftButton
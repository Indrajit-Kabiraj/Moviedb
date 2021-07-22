import React from 'react'

function Header() {
    return (

        <span className="logo" onClick={()=>window.scroll(0,0)}>
            <img src = "https://image.flaticon.com/icons/png/512/2184/2184561.png" className="logo-img"></img>
            <h3>MovieDB</h3>
          </span>
    )
}

export default Header

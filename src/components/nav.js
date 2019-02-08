import React from 'react'

import { slide as Menu } from 'react-burger-menu'




export default ({ children }) => (
    <>
 <Menu right >
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        Skills
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
    {children}
    </>
)


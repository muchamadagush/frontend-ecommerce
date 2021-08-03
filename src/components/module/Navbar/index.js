import React from 'react'
import { useSelector } from 'react-redux'
import Brand from './Brand'
import Navbar from './Core'
import Filter from './Filter'
import Toggler from './Toggler'
import NavRight from './NavRight'
import Cart from './Cart'
import Account from './Account'

const Nav = ({ handleInputSearch, handleSearch }) => {
  const { profile } = useSelector(state => state.user)
  return (
    <>
      {profile.role === 1 ? (
        <Navbar>
          <Brand />
          <Toggler>
            <NavRight>
              <Account role={profile.role} />
            </NavRight>
          </Toggler>
        </Navbar>
      ) : (
        <Navbar>
          <Brand />
          <Toggler>
            <Filter handleInputSearch={handleInputSearch} handleSearch={handleSearch} />
            <NavRight>
              <Cart />
              <Account role={profile.role} />
            </NavRight>
          </Toggler>
        </Navbar>
      )}
    </>
  )
}

export default Nav

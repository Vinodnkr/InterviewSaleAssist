import React from 'react'
import {MdOutlineAddShoppingCart} from 'react-icons/md'

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <li className="app-item">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">The Metro Movers</p>
      <div className="price-list">
        <div className="price-list-line">
          <p className="price-discount">$49</p>
          <p className="price-original">$99</p>
          <p className="price-offer">(50% off)</p>
        </div>
        <div>
          <MdOutlineAddShoppingCart className="cart-icon" />
        </div>
      </div>
    </li>
  )
}
export default AppItem

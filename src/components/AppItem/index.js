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
      <div className="priceList">
        <div className="priceListLine">
          <p style={{fontSize: 'medium'}}>$49</p>
          <p style={{fontSize: 'small'}}>$99</p>
          <p style={{color: 'green', fontSize: 'small'}}>(50% off)</p>
        </div>

        <MdOutlineAddShoppingCart style={{color: 'black'}} />
      </div>
    </li>
  )
}

export default AppItem

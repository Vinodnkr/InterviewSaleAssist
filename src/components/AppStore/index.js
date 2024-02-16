import {Component} from 'react'
import axios from 'axios'
import {GiBeachBag, GiGymBag, GiShoulderBag, GiSchoolBag} from 'react-icons/gi'
import {BsHandbag} from 'react-icons/bs'
import Navbar from '../Navbar'
import AppItem from '../AppItem'
import TabItem from '../TabItem'
import Footer from '../Footer'

import './index.css'

const SEARCH_ICON_URL =
  'https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png'

const tabsList = [
  {
    tabId: 'SOCIAL',
    displayText: 'Hand Bags',
    url: <GiBeachBag style={{fontSize: '60px'}} />,
  },
  {
    tabId: 'GAMES',
    displayText: 'Vanaty Pouch',
    url: <GiBeachBag style={{fontSize: '60px'}} />,
  },
  {
    tabId: 'NEWS',
    displayText: 'Tate Bag',
    url: <GiGymBag style={{fontSize: '60px'}} />,
  },
  {
    tabId: 'FOOD',
    displayText: 'Daffle Bag',
    url: <GiGymBag style={{fontSize: '60px'}} />,
  },
  {
    tabId: 'SOCIAL1',
    displayText: 'Laptop Sleeve',
    url: <GiSchoolBag style={{fontSize: '60px'}} />,
  },
  {
    tabId: 'GAMES1',
    displayText: 'Messenger Bags',
    url: <BsHandbag style={{fontSize: '60px'}} />,
  },
  {
    tabId: 'NEWS1',
    displayText: 'Slings Bag',
    url: <GiShoulderBag style={{fontSize: '60px'}} />,
  },
  {
    tabId: 'FOOD1',
    displayText: 'Backpack Bags',
    url: <GiSchoolBag style={{fontSize: '60px'}} />,
  },
]

/*

const appsList=
[
  {
    "appId": 0,
    "imageUrl": "https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg",
    "category": "HAND"
  },
  {
    "appId": 1,
    "imageUrl": "https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg",
    "category": "HAND"
  },
  {
    "appId": 2,
    "imageUrl": "https://i.ibb.co/QQZsF2t/header-totebags2.jpg",
    "category": "HAND"
  },
  {
    "appId": 3,
    "imageUrl": "https://i.ibb.co/QQZsF2t/header-totebags2.jpg",
    "category": "HAND"
  },
  {
    "appId": 344,
    "imageUrl": "https://i.ibb.co/QQZsF2t/header-totebags2.jpg",
    "category": "HAND"
  },
  {
    "appId": 4,
    "imageUrl": "https://i.ibb.co/QQZsF2t/header-totebags2.jpg",
    "category": "HAND"
  },
  {
    "appId": 5,
    "imageUrl": "https://i.ibb.co/QQZsF2t/header-totebags2.jpg",
    "category": "LAPTOP"
  },
  {
    "appId": 6,
    "imageUrl": "https://i.ibb.co/dDZkRrg/laptop-sleeve-15-6-inch.jpg",
    "category": "LAPTOP"
  },
  {
    "appId": 7,
    "imageUrl": "https://i.ibb.co/dDZkRrg/laptop-sleeve-15-6-inch.jpg",
    "category": "LAPTOP"
  },
  {
    "appId": 8,
    "imageUrl": "https://i.ibb.co/xq6Qzm9/63e4ea75654d35174d34d1dc-laptop-sleeve.jpg",
    "category": "LAPTOP"
  },
  {
    "appId": 9,
    "imageUrl": "https://i.ibb.co/xq6Qzm9/63e4ea75654d35174d34d1dc-laptop-sleeve.jpg",
    "category": "LAPTOP"
  },
  {
    "appId": 10,
   
    "imageUrl": "https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg",
    "category": "VANITY"
  },
  {
    "appId": 11,
   
    "imageUrl": "https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg",
    "category": "VANITY"
  },
  {
    "appId": 12,
   
    "imageUrl": "https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg",
    "category": "VANITY"
  },
  {
    "appId": 13,
    
    "imageUrl": "https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg",
    "category": "VANITY"
  },
  {
    "appId": 14,
    
    "imageUrl": "https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg",
    "category": "VANITY"
  },
  {
    "appId": 15,
    
    "imageUrl": "https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg",
    "category": "VANITY"
  },
  {
    "appId": 16,
    
    "imageUrl": "https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg",
    "category": "VANITY"
  },
  {
    "appId": 17,
    
    "imageUrl": "https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg",
    "category": "VANITY"
  },
  {
    "appId": 18,
    
    "imageUrl": "https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg",
    "category": "VANITY"
  },
  {
    "appId": 19,
    
    "imageUrl": "https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg",
    "category": "VANITY"
  },
  {
    "appId": 20,
  
    "imageUrl": "https://i.ibb.co/ByKw6tn/15970746-30026271-1000.jpg",
    "category": "TOTE"
  },
  {
    "appId": 21,
    
    "imageUrl": "https://i.ibb.co/ByKw6tn/15970746-30026271-1000.jpg",
    "category": "TOTE"
  },
  {
    "appId": 22,
   
    "imageUrl": "https://i.ibb.co/QQZsF2t/header-totebags2.jpg",
    "category": "TOTE"
  },
  {
    "appId": 23,
   
    "imageUrl": "https://i.ibb.co/QQZsF2t/header-totebags2.jpg",
    "category": "TOTE"
  },
  {
    "appId": 24,
   
    "imageUrl": "https://i.ibb.co/vDqr6Pt/Taylor-Swift-August-Tote-Bag-Mockup-600x706.jpg",
    "category": "TOTE"
  },
  {
    "appId": 25,
  
    "imageUrl": "https://i.ibb.co/SsBbkyp/65.png",
    "category": "SLINGS"
  },
  {
    "appId": 26,

    "imageUrl": "https://i.ibb.co/SsBbkyp/65.png",
    "category": "SLINGS"
  },
  {
    "appId": 27,
  
    "imageUrl": "https://i.ibb.co/SsBbkyp/65.png",
    "category": "SLINGS"
  },
  {
    "appId": 28,
    
    "imageUrl": "https://i.ibb.co/SsBbkyp/65.png",
    "category": "SLINGS"
  },
  {
    "appId": 29,
  
    "imageUrl": "https://i.ibb.co/SsBbkyp/65.png",
    "category": "SLINGS"
  },
  {
    "appId": 30,
    
    "imageUrl": "https://i.ibb.co/XCpfR3W/71xk-D6pv-FL-AC-UY1100.jpg",
    "category": "DAFFLE"
  },
  {
    "appId": 31,
   
    "imageUrl": "https://i.ibb.co/XCpfR3W/71xk-D6pv-FL-AC-UY1100.jpg",
    "category": "DAFFLE"
  },
  {
    "appId": 32,
    
    "imageUrl": "https://i.ibb.co/G7VBrCs/024A7395.jpg",
    "category": "DAFFLE"
  },
  {
    "appId": 33,
   
    "imageUrl": "https://i.ibb.co/G7VBrCs/024A7395.jpg",
    "category": "DAFFLE"
  },
  {
    "appId": 34,
    
    "imageUrl": "https://i.ibb.co/G7VBrCs/024A7395.jpg",
    "category": "DAFFLE"
  },
  {
    "appId": 35,
   
    "imageUrl": "https://i.ibb.co/G7VBrCs/024A7395.jpg",
    "category": "DAFFLE"
  },
  {
    "appId": 36,

    "imageUrl": "https://i.ibb.co/G7VBrCs/024A7395.jpg",
    "category": "BACKPACK"
  },
  {
    "appId": 37,
  
    "imageUrl": "https://i.ibb.co/G7VBrCs/024A7395.jpg",
    "category": "BACKPACK"
  },
  {
    "appId": 38,
    
    "imageUrl": "https://i.ibb.co/G7VBrCs/024A7395.jpg",
    "category": "BACKPACK"
  },
  {
    "appId": 39,
   
    "imageUrl": "https://i.ibb.co/G7VBrCs/024A7395.jpg",
    "category": "BACKPACK"
  }
]
*/

class AppStore extends Component {
  state = {
    searchInput: '',
    activeTabId: tabsList[0].tabId,
    appsList: [],
  }

  /*
  componentDidMount() {
    fetch('https://mocki.io/v1/574fc4e5-403d-4b1f-8cea-8c9b9bcef15d')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        //console.log( data);
        this.setState({
          
          appsList: data,
          
          
        });
        
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
*/

  componentDidMount() {
    axios
      .get('https://mocki.io/v1/574fc4e5-403d-4b1f-8cea-8c9b9bcef15d')
      .then(response => {
        // console.log(response.data)
        this.setState({
          appsList: response.data,
        })
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error)
      })
  }

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getActiveTabApps = searchedApps => {
    const {activeTabId} = this.state
    const filteredApps = searchedApps.filter(
      eachSearchedApp => eachSearchedApp.category === activeTabId,
    )

    return filteredApps
  }

  getSearchResults = () => {
    const {searchInput} = this.state
    const {appsList} = this.state
    const searchResults = appsList.filter(eachApp =>
      eachApp.appName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  render() {
    const {searchInput, activeTabId, appsList} = this.state
    const searchResults = this.getSearchResults()
    const filteredApps = this.getActiveTabApps(searchResults)

    return (
      <>
        <Navbar />

        <div className="app-container">
          <div className="app-store">
            <ul className="productList">
              <li style={{marginRight: '20px'}}>Bags</li>
              <li style={{marginRight: '20px'}}>Travel</li>
              <li style={{marginRight: '20px'}}>Accessories</li>
              <li style={{marginRight: '20px'}}>Gifting</li>
              <li style={{marginRight: '20px'}}>Jewelery</li>
            </ul>
            <div className="search-input-container">
              <input
                type="search"
                placeholder="Search"
                className="search-input"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
              <img
                src={SEARCH_ICON_URL}
                alt="search icon"
                className="search-icon"
              />
            </div>

            <ul className="tabs-list">
              {tabsList.map(eachTab => (
                <TabItem
                  key={eachTab.tabId}
                  tabDetails={eachTab}
                  setActiveTabId={this.setActiveTabId}
                  isActive={activeTabId === eachTab.tabId}
                />
              ))}
            </ul>
            <ul className="apps-list">
              {filteredApps.map(eachApp => (
                <AppItem key={eachApp.appId} appDetails={eachApp} />
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default AppStore

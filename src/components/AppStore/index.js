import {Component} from 'react'
import {GiBeachBag, GiGymBag, GiShoulderBag, GiSchoolBag} from 'react-icons/gi'
import {BsHandbag} from 'react-icons/bs'
import Navbar from '../Navbar'
import AppItem from '../AppItem'
import TabItem from '../TabItem'
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

const appsList = [
  {
    appId: 0,
    appName: 'The Metro Movers',

    imageUrl: 'https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg',
    category: 'SOCIAL',
  },
  {
    appId: 1,
    appName: 'Messenger',
    imageUrl: 'https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg',
    category: 'SOCIAL',
  },
  {
    appId: 2,
    appName: 'WhatsApp',
    imageUrl: 'https://i.ibb.co/QQZsF2t/header-totebags2.jpg',
    category: 'SOCIAL',
  },
  {
    appId: 3,
    appName: 'Instagram',
    imageUrl: 'https://i.ibb.co/QQZsF2t/header-totebags2.jpg',
    category: 'SOCIAL',
  },
  {
    appId: 344,
    appName: 'Instagram',
    imageUrl: 'https://i.ibb.co/QQZsF2t/header-totebags2.jpg',
    category: 'SOCIAL',
  },
  {
    appId: 4,
    appName: 'Snapchat',
    imageUrl: 'https://i.ibb.co/QQZsF2t/header-totebags2.jpg',
    category: 'SOCIAL',
  },
  {
    appId: 5,
    appName: 'laptop',
    imageUrl: 'https://i.ibb.co/QQZsF2t/header-totebags2.jpg',
    category: 'SOCIAL1',
  },
  {
    appId: 6,
    appName: 'Pinterest',
    imageUrl: 'https://i.ibb.co/dDZkRrg/laptop-sleeve-15-6-inch.jpg',
    category: 'SOCIAL1',
  },
  {
    appId: 7,
    appName: 'WeChat',
    imageUrl: 'https://i.ibb.co/dDZkRrg/laptop-sleeve-15-6-inch.jpg',
    category: 'SOCIAL1',
  },
  {
    appId: 8,
    appName: 'LinkedIn',
    imageUrl:
      'https://i.ibb.co/xq6Qzm9/63e4ea75654d35174d34d1dc-laptop-sleeve.jpg',
    category: 'SOCIAL1',
  },
  {
    appId: 9,
    appName: 'Telegram',
    imageUrl:
      'https://i.ibb.co/xq6Qzm9/63e4ea75654d35174d34d1dc-laptop-sleeve.jpg',
    category: 'SOCIAL1',
  },
  {
    appId: 10,
    appName: 'Subway Surfers',
    imageUrl: 'https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg',
    category: 'GAMES',
  },
  {
    appId: 11,
    appName: 'Crossy Road',
    imageUrl: 'https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg',
    category: 'GAMES',
  },
  {
    appId: 12,
    appName: 'Super Chef',
    imageUrl: 'https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg',
    category: 'GAMES',
  },
  {
    appId: 13,
    appName: 'Angry Birds',
    imageUrl: 'https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg',
    category: 'GAMES',
  },
  {
    appId: 14,
    appName: 'Hill Climb 2',
    imageUrl: 'https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg',
    category: 'GAMES',
  },
  {
    appId: 15,
    appName: 'Temple Run',
    imageUrl: 'https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg',
    category: 'GAMES',
  },
  {
    appId: 16,
    appName: 'Dr. Driving',
    imageUrl: 'https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg',
    category: 'GAMES',
  },
  {
    appId: 17,
    appName: 'Smurfs Bubble',
    imageUrl: 'https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg',
    category: 'GAMES',
  },
  {
    appId: 18,
    appName: 'Grade Learning',
    imageUrl: 'https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg',
    category: 'GAMES',
  },
  {
    appId: 19,
    appName: 'My Talking Tom',
    imageUrl: 'https://i.ibb.co/gRqVnxD/ladies-vanity-bag.jpg',
    category: 'GAMES',
  },
  {
    appId: 20,
    appName: 'Inshorts',
    imageUrl: 'https://i.ibb.co/ByKw6tn/15970746-30026271-1000.jpg',
    category: 'NEWS',
  },
  {
    appId: 21,
    appName: 'Way2News',
    imageUrl: 'https://i.ibb.co/ByKw6tn/15970746-30026271-1000.jpg',
    category: 'NEWS',
  },
  {
    appId: 22,
    appName: 'Google News',
    imageUrl: 'https://i.ibb.co/QQZsF2t/header-totebags2.jpg',
    category: 'NEWS',
  },
  {
    appId: 23,
    appName: 'Flipboard',
    imageUrl: 'https://i.ibb.co/QQZsF2t/header-totebags2.jpg',
    category: 'NEWS',
  },
  {
    appId: 24,
    appName: 'SmartNews',
    imageUrl:
      'https://i.ibb.co/vDqr6Pt/Taylor-Swift-August-Tote-Bag-Mockup-600x706.jpg',
    category: 'NEWS',
  },
  {
    appId: 25,
    appName: 'BBC News',
    imageUrl: 'https://i.ibb.co/SsBbkyp/65.png',
    category: 'NEWS1',
  },
  {
    appId: 26,
    appName: 'CNN News',
    imageUrl: 'https://i.ibb.co/SsBbkyp/65.png',
    category: 'NEWS1',
  },
  {
    appId: 27,
    appName: 'Daily Wire',
    imageUrl: 'https://i.ibb.co/SsBbkyp/65.png',
    category: 'NEWS1',
  },
  {
    appId: 28,
    appName: 'AP News',
    imageUrl: 'https://i.ibb.co/SsBbkyp/65.png',
    category: 'NEWS1',
  },
  {
    appId: 29,
    appName: 'News Break',
    imageUrl: 'https://i.ibb.co/SsBbkyp/65.png',
    category: 'NEWS1',
  },
  {
    appId: 30,
    appName: 'Zomato',
    imageUrl: 'https://i.ibb.co/XCpfR3W/71xk-D6pv-FL-AC-UY1100.jpg',
    category: 'FOOD',
  },
  {
    appId: 31,
    appName: 'Swiggy',
    imageUrl: 'https://i.ibb.co/XCpfR3W/71xk-D6pv-FL-AC-UY1100.jpg',
    category: 'FOOD',
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl: 'https://i.ibb.co/G7VBrCs/024A7395.jpg',
    category: 'FOOD',
  },
  {
    appId: 33,
    appName: 'All in One',
    imageUrl: 'https://i.ibb.co/G7VBrCs/024A7395.jpg',
    category: 'FOOD',
  },
  {
    appId: 34,
    appName: 'Instacart',
    imageUrl: 'https://i.ibb.co/G7VBrCs/024A7395.jpg',
    category: 'FOOD',
  },
  {
    appId: 35,
    appName: 'Saucey',
    imageUrl: 'https://i.ibb.co/G7VBrCs/024A7395.jpg',
    category: 'FOOD',
  },
  {
    appId: 36,
    appName: 'Waitr',
    imageUrl: 'https://i.ibb.co/G7VBrCs/024A7395.jpg',
    category: 'FOOD',
  },
  {
    appId: 37,
    appName: 'Grubhub',
    imageUrl: 'https://i.ibb.co/G7VBrCs/024A7395.jpg',
    category: 'FOOD',
  },
  {
    appId: 38,
    appName: 'Mercato',
    imageUrl: 'https://i.ibb.co/G7VBrCs/024A7395.jpg',
    category: 'FOOD',
  },
  {
    appId: 39,
    appName: 'DOT',
    imageUrl: 'https://i.ibb.co/G7VBrCs/024A7395.jpg',
    category: 'FOOD',
  },
]

class AppStore extends Component {
  state = {
    searchInput: '',
    activeTabId: tabsList[0].tabId,
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
    const searchResults = appsList.filter(eachApp =>
      eachApp.appName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  render() {
    const {searchInput, activeTabId} = this.state
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
      </>
    )
  }
}

export default AppStore

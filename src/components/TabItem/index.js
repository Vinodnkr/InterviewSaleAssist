import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText, url} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
    console.log(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={tabBtnClassName}>
        {url}
        <br />
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

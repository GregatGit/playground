import React, { useState } from 'react'

import { SidePanelContainer, InputBox, LabelWrapper } from './SidePanel_Styled'
import { FaQrcode, FaLink, FaStream, FaBars, FaTimes } from 'react-icons/fa'

/*const temp = [
  {
    name: 'Welcome',
    icon: 'fa-laugh',
  },
  {
    name: 'Skills',
    icon: 'fa-code',
  },
  {
    name: 'Projects',
    icon: 'fa-cogs',
  },
  {
    name: 'Contact',
    icon: 'fa-envelope',
  },
  {
    name: 'About',
    icon: 'fa-info-circle',
  },
  
]
*/

const SidePanel = () => {
	const [showMenu, setShowMenu] = useState(true)
	return (
		<div>
			<InputBox
				type="checkbox"
				id="check"
				checked={showMenu}
				onChange={() => setShowMenu((state) => !state)}
			/>
			<LabelWrapper htmlFor="check" show={showMenu}>
				<FaBars className="btn" />
				<FaTimes className="cancel" />
			</LabelWrapper>
			<SidePanelContainer show={showMenu}>
				<header>Playground</header>
				<ul>
					<li>
						<span className="icon_parent">
							<FaQrcode className="icon_li" />
							Dashboard
						</span>
					</li>
					<li>
						<span className="icon_parent">
							<FaStream className="icon_li" />
							Shortcuts
						</span>
					</li>
					<li>
						<span className="icon_parent">
							<FaLink className="icon_li" />
							Events
						</span>
					</li>
				</ul>
			</SidePanelContainer>
		</div>
	)
}

export default SidePanel

/*
const SidePanel = ({ changePage }) => {
  const [panel, setPanel] = useState(false)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleKeyDown = e => {
    if (e.key === 'M' || e.key === 'm'){
      setPanel(state => !state)
    }
  }

  const handleClick = (index) => {
    changePage(index)
    setPanel(false)
  }

  const renderButtons = (btnArr) => {
    return btnArr.map((btn, index) => (
      <li key={index}>
        <span onClick={() => handleClick(index)}>
          <i className={`fas ${btn.icon}`}></i>
          {btn.name}
        </span>
      </li>
    ))
  }
  return (
    <SidePanelContainer>
      <input
        type="checkbox"
        id="check"
        checked={panel}
        onChange={() => setPanel(!panel)}
      />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>Greg Duncan</header>
        <ul>{renderButtons(temp)}</ul>
      </div>
    </SidePanelContainer>
  )
}
*/

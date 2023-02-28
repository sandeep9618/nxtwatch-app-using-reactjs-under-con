import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import NxtWatchContext from '../NxtWatchContext'
import {
  NavBarBgContainer,
  NavOptions,
  NavOption,
  NavOptionText,
  NavButton,
  ContactUsContainer,
  ContactUsHeading,
  ContactUsDescription,
  SocialMediaIconsContainer,
  SocialMediaIcon,
} from './styledComponents'

import './index.css'

const NavItem = props => {
  const {
    eachOption,
    onChangeActiveRoute,
    activeNavOption,
    isDarkThemeActivated,
  } = props
  const {id, displayText, icon} = eachOption

  const onChangeActiveItem = () => {
    onChangeActiveRoute(id)
  }

  const isActiveOption = id === activeNavOption

  return (
    <NavOption>
      <NavButton
        isActiveOption={isActiveOption}
        type="button"
        onClick={onChangeActiveItem}
        isDarkThemeActivated={isDarkThemeActivated}
      >
        {icon}
        <NavOptionText isDarkThemeActivated={isDarkThemeActivated}>
          {displayText}
        </NavOptionText>
      </NavButton>
    </NavOption>
  )
}

const navOptions = [
  {displayText: 'Home', icon: <AiFillHome size={20} />, id: 'HOME'},
  {displayText: 'Trending', icon: <HiFire size={20} />, id: 'TRENDING'},
  {displayText: 'Gaming', icon: <SiYoutubegaming size={20} />, id: 'GAMING'},
  {
    displayText: 'Saved Videos',
    icon: <BiListPlus size={20} />,
    id: 'SAVED VIDEOS',
  },
]

class NavBar extends Component {
  state = {activeNavOption: navOptions[0].id}

  onChangeActiveRoute = id => {
    this.setState({activeNavOption: id})
  }

  render() {
    const {activeNavOption} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkThemeActivated} = value
          return (
            <NavBarBgContainer isDarkThemeActivated={isDarkThemeActivated}>
              <NavOptions>
                {navOptions.map(eachOption => (
                  <NavItem
                    eachOption={eachOption}
                    key={eachOption.id}
                    isDarkThemeActivated={isDarkThemeActivated}
                    onChangeActiveRoute={this.onChangeActiveRoute}
                    activeNavOption={activeNavOption}
                  />
                ))}
              </NavOptions>
              <ContactUsContainer>
                <ContactUsHeading isDarkThemeActivated={isDarkThemeActivated}>
                  CONTACT US
                </ContactUsHeading>
                <SocialMediaIconsContainer>
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaIconsContainer>
                <ContactUsDescription
                  isDarkThemeActivated={isDarkThemeActivated}
                >
                  Enjoy! Now to see your channels and recommendations!
                </ContactUsDescription>
              </ContactUsContainer>
            </NavBarBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default NavBar
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react'
import { Link } from "gatsby"
import MediaQuery from 'react-responsive'
import GeneralNavigation from '~c/includes/GeneralNavigation'
import Img from '~c/general/Image'
import Content from "~u/Content"
import { useStaticQuery, graphql } from 'gatsby'
import { useSelector } from 'react-redux'
import { animateScroll as scroll } from "react-scroll";
import useScrollTop  from "~h/useScrollTop"

function NavigationMobile() {
  const [displayMenu, setdDisplayMenu] = useState(false);

  const showDropdownMenu = () => {
    !displayMenu
      ? setdDisplayMenu(true)
      : setdDisplayMenu(false)
  }   

  const state = useSelector(props => props);
  const content = Content(useNavigationMobailQuery())  
  const scrollingToTop = () => {
    scroll.scrollToTop()
  }
  const scrolTopMenu = useScrollTop(50).scrollStarted

  return(
    <>
    <MediaQuery maxDeviceWidth={767.97}>
        <header className={"header " + (scrolTopMenu ? 'active' : null)}>
          <div className="container">
            <nav className="navigation">
            <Link
              to={`/${state.languageValue === "uk" ? "" : state.languageValue}`}
              className="navigation_logo"
              onClick={scrollingToTop}
            >
              <Img src={content.logo} alt="logo" />

             </Link>
              {displayMenu ? <GeneralNavigation /> : null}
              <div className="burger" onClick={showDropdownMenu}>
                  <span />
                  <span />
                  <span />
                  <span />
              </div>
            </nav>
          </div>
        </header>
      </MediaQuery>
    </>
  )
}

export default NavigationMobile

export const useNavigationMobailQuery = () =>
useStaticQuery(graphql`
  query NavigationMobailQuery {
    allFile(filter: {name: {eq: "header"}}) {
      nodes {
        childEnJson {
          logo
        }
        childUkJson {
          logo
        }
        sourceInstanceName
      }
    }
  }
`).allFile.nodes
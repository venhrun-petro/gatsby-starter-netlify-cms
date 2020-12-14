import React from "react"
import { Link } from "gatsby"
import MediaQuery from 'react-responsive'
import GeneralNavigation from '~c/includes/GeneralNavigation'
import { useSelector } from 'react-redux'
import { animateScroll as scroll } from "react-scroll";
import Img from '~c/general/Image'
import Content from "~u/Content"
import { useStaticQuery, graphql } from 'gatsby'
import useScrollTop  from "~h/useScrollTop"
import Logo  from "~img/logo.svg"

function Navigation() {
  const state = useSelector(props => props); 
  const content = Content(useNavigationQuery())
  const scrollingToTop = () => {
    scroll.scrollToTop()
  }
  const scrolTopMenu = useScrollTop( 50).scrollStarted

  return (
    <MediaQuery minDeviceWidth={767.97}>
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
            <GeneralNavigation />
          </nav>
        </div>
      </header>
    </MediaQuery>
  )
}

export default Navigation


export const useNavigationQuery = () =>
  useStaticQuery(graphql`
    query NavigationQuery {
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
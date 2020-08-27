import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import "./header.scss"

const Header = ({ siteTitle }) => {
  const [isSticky, setSticky] = useState(false)
  // const ref = useRef(null)
  const handleScroll = () => {
    setSticky(window.scrollY > 30)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  return (
    <header
      className={`header flex justify-between items-center ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="logo-container mr-5 float-left">
        <Link to="/">{siteTitle}</Link>
      </div>
      <div className=" flex-fill flex items-center justify-between float-right">
        <div className="flex-fill">
          <ul className="m-0 p-0 flex justify-around">
            <li>
              <Link className="active" to="/">
                About
              </Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">Resumé</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

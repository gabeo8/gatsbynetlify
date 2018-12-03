import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    id="header"
    class="u-header u-header--bg-transparent u-header--abs-top"
  >
    <div class="u-header__section">
      <div id="logoAndNav" class="container">
        <nav class="navbar navbar-expand u-header__navbar">
          <a
            class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-text-white"
            href="../home/index.html"
            aria-label="Front"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="46px"
              height="46px"
              viewBox="0 0 46 46"
              style={{ marginBottom: 0 }}
            >
              <path
                fill="#E1E4EA"
                opacity=".65"
                d="M23,41.1L23,41.1c-9.9,0-18-8-18-18l0,0c0-9.9,8-18,18-18h11.3c3.7,0,6.6,3,6.6,6.6v11.4C41,33,32.9,41.1,23,41.1z"
              />
              <path
                class="fill-white"
                opacity=".5"
                d="M28,36L28,36c-9.9,0-18-8-18-18l0,0c0-9.9,8-18,18-18h11.3C43,0.1,46,3.1,46,6.7v11.4C46,28,38,36,28,36z"
              />
              <path
                class="fill-white"
                opacity=".7"
                d="M18,46.1L18,46.1c-10,0-18-8-18-18l0,0c0-9.9,8-18,18-18h11.3c3.7,0,6.6,3,6.6,6.6v11.4C35.9,38.1,27.9,46.1,18,46.1z"
              />
              <path
                class="fill-primary"
                d="M17.4,34.1V18.4h10.2v2.9h-6.4v3.4H26v2.9h-4.8v6.5H17.4z"
              />
            </svg>
            <span class="u-header__navbar-brand-text">Front</span>
          </a>

          <div class="ml-auto">
            <Link
              class="btn btn-sm btn-primary transition-3d-hover"
              href="/"
              target="_blank"
            >
              {siteTitle}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header

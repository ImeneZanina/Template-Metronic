import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div>
        <div
          id="kt_header_mobile"
          className="kt-header-mobile  kt-header-mobile--fixed "
        >
          <div className="kt-header-mobile__logo">
            <a href="index-2.html">
              <img alt="Logo" src="../assets/media/logos/logo-8-sm.png" />
            </a>
          </div>
          <div className="kt-header-mobile__toolbar">
            <button
              className="kt-header-mobile__toolbar-toggler"
              id="kt_header_mobile_toggler"
            >
              <span />
            </button>
            <button
              className="kt-header-mobile__toolbar-topbar-toggler"
              id="kt_header_mobile_topbar_toggler"
            >
              <i className="flaticon-more-1" />
            </button>
          </div>
        </div>
        <div className="kt-grid kt-grid--hor kt-grid--root">
          <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
            <div
              className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper"
              id="kt_wrapper"
            >
              {/* begin:: Header */}
              <div
                id="kt_header"
                className="kt-header kt-grid__item  kt-header--fixed "
                data-ktheader-minimize="on"
              >
                <div className="kt-header__top">
                  <div className="kt-container  kt-container--fluid ">
                    {/* begin:: Brand */}
                    <div
                      className="kt-header__brand   kt-grid__item"
                      id="kt_header_brand"
                    >
                      <div className="kt-header__brand-logo">
                        <a href="index-2.html">
                          <img
                            alt="Logo"
                            src="../assets/media/logos/logo-8.png"
                            className="kt-header__brand-logo-default"
                          />
                          <img
                            alt="Logo"
                            src="../assets/media/logos/logo-8-inverse.png"
                            className="kt-header__brand-logo-sticky"
                          />
                        </a>
                      </div>
                    </div>
                    {/* end:: Brand */} {/* begin:: Header Topbar */}
                    <div className="kt-header__topbar">
                      {/*begin: Language bar */}
                      <div className="kt-header__topbar-item kt-header__topbar-item--langs">
                        <div
                          className="kt-header__topbar-wrapper"
                          data-toggle="dropdown"
                          data-offset="0px,10px"
                        >
                          <span className="kt-header__topbar-icon">
                            <img
                              className
                              src="https://keenthemes.com/metronic/themes/metronic/theme/default/demo8/dist/assets/media/flags/226-united-states.svg"
                              alt
                            />
                          </span>
                        </div>
                        <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim">
                          <ul className="kt-nav kt-margin-t-10 kt-margin-b-10">
                            <li className="kt-nav__item kt-nav__item--active">
                              <a href="#" className="kt-nav__link">
                                <span className="kt-nav__link-icon">
                                  <img
                                    src="https://keenthemes.com/metronic/themes/metronic/theme/default/demo8/dist/assets/media/flags/226-united-states.svg"
                                    alt
                                  />
                                </span>
                                <span className="kt-nav__link-text">
                                  English
                                </span>
                              </a>
                            </li>
                            <li className="kt-nav__item">
                              <a href="#" className="kt-nav__link">
                                <span className="kt-nav__link-icon">
                                  <img
                                    src="https://keenthemes.com/metronic/themes/metronic/theme/default/demo8/dist/assets/media/flags/128-spain.svg"
                                    alt
                                  />
                                </span>
                                <span className="kt-nav__link-text">
                                  Spanish
                                </span>
                              </a>
                            </li>
                            <li className="kt-nav__item">
                              <a href="#" className="kt-nav__link">
                                <span className="kt-nav__link-icon">
                                  <img
                                    src="https://keenthemes.com/metronic/themes/metronic/theme/default/demo8/dist/assets/media/flags/162-germany.svg"
                                    alt
                                  />
                                </span>
                                <span className="kt-nav__link-text">
                                  German
                                </span>
                              </a>
                            </li>
                          </ul>{" "}
                        </div>
                      </div>
                      {/*end: Language bar */}
                      {/*begin: User bar */}
                      <div className="kt-header__topbar-item kt-header__topbar-item--user">
                        <div
                          className="kt-header__topbar-wrapper"
                          data-toggle="dropdown"
                          data-offset="0px,10px"
                        >
                          <span className="kt-header__topbar-welcome kt-visible-desktop">
                            Hi,
                          </span>
                          <span className="kt-header__topbar-username kt-visible-desktop">
                            Nick
                          </span>
                          <img
                            alt="Pic"
                            src="../assets/media/users/300_21.jpg"
                          />
                          <span className="kt-header__topbar-icon kt-bg-brand kt-font-lg kt-font-bold kt-font-light kt-hidden">
                            S
                          </span>
                          <span className="kt-header__topbar-icon kt-hidden">
                            <i className="flaticon2-user-outline-symbol" />
                          </span>
                        </div>
                        <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl">
                          {/*begin: Head */}
                          <div className="kt-user-card kt-user-card--skin-light kt-notification-item-padding-x">
                            <div className="kt-user-card__avatar">
                              <img
                                className="kt-hidden-"
                                alt="Pic"
                                src="../assets/media/users/300_25.jpg"
                              />
                              {/*use below badge element instead the user avatar to display username's first letter(remove kt-hidden class to display it) */}
                              <span className="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold kt-hidden">
                                S
                              </span>
                            </div>
                            <div className="kt-user-card__name">Sean Stone</div>
                            <div className="kt-user-card__badge">
                              <span className="btn btn-label-primary btn-sm btn-bold btn-font-md">
                                23 messages
                              </span>
                            </div>
                          </div>
                          {/*end: Head */}
                          {/*begin: Navigation */}
                          <div className="kt-notification">
                            <a
                              href="custom/apps/user/profile-1/personal-information.html"
                              className="kt-notification__item"
                            >
                              <div className="kt-notification__item-icon">
                                <i className="flaticon2-calendar-3 kt-font-success" />
                              </div>
                              <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title kt-font-bold">
                                  My Profile
                                </div>
                                <div className="kt-notification__item-time">
                                  Account settings and more
                                </div>
                              </div>
                            </a>
                            <a
                              href="custom/apps/user/profile-3.html"
                              className="kt-notification__item"
                            >
                              <div className="kt-notification__item-icon">
                                <i className="flaticon2-mail kt-font-warning" />
                              </div>
                              <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title kt-font-bold">
                                  My Messages
                                </div>
                                <div className="kt-notification__item-time">
                                  Inbox and tasks
                                </div>
                              </div>
                            </a>
                            <a
                              href="custom/apps/user/profile-2.html"
                              className="kt-notification__item"
                            >
                              <div className="kt-notification__item-icon">
                                <i className="flaticon2-rocket-1 kt-font-danger" />
                              </div>
                              <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title kt-font-bold">
                                  My Activities
                                </div>
                                <div className="kt-notification__item-time">
                                  Logs and notifications
                                </div>
                              </div>
                            </a>
                            <a
                              href="custom/apps/user/profile-3.html"
                              className="kt-notification__item"
                            >
                              <div className="kt-notification__item-icon">
                                <i className="flaticon2-hourglass kt-font-brand" />
                              </div>
                              <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title kt-font-bold">
                                  My Tasks
                                </div>
                                <div className="kt-notification__item-time">
                                  latest tasks and projects
                                </div>
                              </div>
                            </a>
                            <a
                              href="custom/apps/user/profile-1/overview.html"
                              className="kt-notification__item"
                            >
                              <div className="kt-notification__item-icon">
                                <i className="flaticon2-cardiogram kt-font-warning" />
                              </div>
                              <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title kt-font-bold">
                                  Billing
                                </div>
                                <div className="kt-notification__item-time">
                                  billing &amp; statements{" "}
                                  <span className="kt-badge kt-badge--danger kt-badge--inline kt-badge--pill kt-badge--rounded">
                                    2 pending
                                  </span>
                                </div>
                              </div>
                            </a>
                            <div className="kt-notification__custom kt-space-between">
                              <a
                                href="custom/user/login-v2.html"
                                target="_blank"
                                className="btn btn-label btn-label-brand btn-sm btn-bold"
                              >
                                Sign Out
                              </a>
                              <a
                                href="custom/user/login-v2.html"
                                target="_blank"
                                className="btn btn-clean btn-sm btn-bold"
                              >
                                Upgrade Plan
                              </a>
                            </div>
                          </div>
                          {/*end: Navigation */}
                        </div>
                      </div>
                      {/*end: User bar */}
                    </div>
                    {/* end:: Header Topbar */}
                  </div>
                </div>
                <div className="kt-header__bottom">
                  <div className="kt-container  kt-container--fluid ">
                    {/* begin: Header Menu */}
                    <button
                      className="kt-header-menu-wrapper-close"
                      id="kt_header_menu_mobile_close_btn"
                    >
                      <i className="la la-close" />
                    </button>
                    <div
                      className="kt-header-menu-wrapper"
                      id="kt_header_menu_wrapper"
                    >
                      <div
                        id="kt_header_menu"
                        className="kt-header-menu kt-header-menu-mobile "
                      >
                        <ul className="kt-menu__nav ">
                          <li
                            className="kt-menu__item  kt-menu__item--open kt-menu__item--here kt-menu__item--submenu kt-menu__item--rel"
                            data-ktmenu-submenu-toggle="hover"
                            aria-haspopup="true"
                          >
                            <a
                              href="index-2.html"
                              className="kt-menu__link kt-menu__toggle"
                            >
                              <span className="kt-menu__link-text">
                                Dashboards
                              </span>
                            </a>
                          </li>
                          <li
                            className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                            data-ktmenu-submenu-toggle="click"
                            aria-haspopup="true"
                          >
                            <a
                              href="javascript:;"
                              className="kt-menu__link kt-menu__toggle"
                            >
                              <span className="kt-menu__link-text">Prix</span>
                              <i className="kt-menu__hor-arrow la la-angle-down" />
                              <i className="kt-menu__ver-arrow la la-angle-right" />
                            </a>
                            <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left">
                              <ul className="kt-menu__subnav">
                                <li
                                  className="kt-menu__item  kt-menu__item--submenu"
                                  data-ktmenu-submenu-toggle="hover"
                                  aria-haspopup="true"
                                >
                                  <a
                                    href="javascript:;"
                                    className="kt-menu__link kt-menu__toggle"
                                  >
                                    <i className="fa-money-bill-wave" />
                                    <span className="kt-menu__link-text">
                                      Créer un prix
                                    </span>
                                  </a>
                                </li>
                                <li
                                  className="kt-menu__item  kt-menu__item--submenu"
                                  data-ktmenu-submenu-toggle="hover"
                                  aria-haspopup="true"
                                >
                                  <a
                                    href="javascript:;"
                                    className="kt-menu__link kt-menu__toggle"
                                  >
                                    <i className="kt-menu__link-icon flaticon2-photograph" />
                                    <span className="kt-menu__link-text">
                                      Listes des prix
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li
                            className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                            data-ktmenu-submenu-toggle="click"
                            aria-haspopup="true"
                          >
                            <a
                              href="javascript:;"
                              className="kt-menu__link kt-menu__toggle"
                            >
                              <span className="kt-menu__link-text">CRUD</span>
                              <i className="kt-menu__hor-arrow la la-angle-down" />
                              <i className="kt-menu__ver-arrow la la-angle-right" />
                            </a>
                            <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left">
                              <ul className="kt-menu__subnav">
                                <li
                                  className="kt-menu__item  kt-menu__item--submenu"
                                  data-ktmenu-submenu-toggle="hover"
                                  aria-haspopup="true"
                                >
                                  <a
                                    href="javascript:;"
                                    className="kt-menu__link kt-menu__toggle"
                                  >
                                    <i className="fa-money-bill-wave" />
                                    <span className="kt-menu__link-text">
                                      Créer un prix
                                    </span>
                                  </a>
                                </li>
                                <li
                                  className="kt-menu__item  kt-menu__item--submenu"
                                  data-ktmenu-submenu-toggle="hover"
                                  aria-haspopup="true"
                                >
                                  <a
                                    href="javascript:;"
                                    className="kt-menu__link kt-menu__toggle"
                                  >
                                    <i className="kt-menu__link-icon flaticon2-photograph" />
                                    <span className="kt-menu__link-text">
                                      Listes des prix
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* end: Header Menu */}{" "}
                  </div>
                </div>
              </div>
              {/* end:: Header */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

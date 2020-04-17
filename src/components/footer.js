import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        {/* begin:: Footer */}
        <div className="kt-footer  kt-grid__item" id="kt_footer">
          <div className="kt-container  kt-container--fluid ">
            <div className="kt-footer__wrapper">
              <div className="kt-footer__copyright">
                2020&nbsp;©&nbsp;
                <a
                  href="http://keenthemes.com/metronic"
                  target="_blank"
                  className="kt-link"
                >
                  Keenthemes
                </a>
              </div>
              <div className="kt-footer__menu">
                <a
                  href="http://keenthemes.com/metronic"
                  target="_blank"
                  className="kt-link"
                >
                  About
                </a>
                <a
                  href="http://keenthemes.com/metronic"
                  target="_blank"
                  className="kt-link"
                >
                  Team
                </a>
                <a
                  href="http://keenthemes.com/metronic"
                  target="_blank"
                  className="kt-link"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end:: Footer */}{" "}
      </div>
    );
  }
}

export default Footer;

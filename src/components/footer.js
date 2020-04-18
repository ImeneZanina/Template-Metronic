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
                <p> Portail d'aviculture</p>
              </div>
              <div className="kt-footer__menu">
                <p style={{ color: "rgba(255,255,255,.5)" }}>
                  Réalisé par Nazih{" & "}Imene
                </p>
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

import React from "react";

function LandingFooter() {
    return(
        <div>
            {/* Landing Page Footer */}
            <div className="landing-footer">
                <div class="container">
                    <div class="row d-flex align-items-center">
                        <div class="col-lg-6 text-lg-left text-center">
                            <div class="copyright">
                                &copy; Copyright <strong><span>Rimorin</span></strong>. All Rights Reserved
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <nav class="landing-footer-links text-lg-right text-center pt-2 pt-lg-0">
                                <a href="/privacy-policy">Privacy Policy</a>
                                <a href="/terms-of-use">Terms of Use</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingFooter;
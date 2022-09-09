import React from "react";

function Footer() {
    return(
        <div>
            {/* Footer */}
            <footer id="footer">
                <div class="container">
                    <div class="row d-flex align-items-center">
                        <div class="col-lg-6 text-lg-left text-center">
                            <div class="copyright">
                                &copy; Copyright <strong><span>Rimorin</span></strong>. All Rights Reserved
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
                                <a href="#" class="scrollto">Home</a>
                                <a href="#" class="scrollto">About</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Use</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
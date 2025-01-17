import React, { useRef, useEffect, useState } from "react";
import axios from 'axios';
import "./tooth-chart.css";

const DentalChart = ({handleClickTeeth}) => {
    
    // const getDentalCharts = async(email) => {
    //     const response = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getDentalChart', { params: { email: email } });
    //     response.forEach(teeth => {
    //         var el = document.getElementById(teeth);
    //         el.classList.toggle('marked');
    //     });
        
    // }

    useEffect(() => {
        // const email =  document.getElementById('emailaddress').textContent;

        // getDentalCharts(email);
    }, []);
    

    return (
        <>
                {/* Upper left */}
                <div className="tooth-label">
                    <div className="col">1</div>
                    <div className="col">2</div>
                    <div className="col">3</div>
                    <div className="col">4</div>
                    <div className="col">5</div>
                    <div className="col">6</div>
                    <div className="col">7</div>
                    <div className="col">8</div>
                    <div className="col">9</div>
                    <div className="col">10</div>
                    <div className="col">11</div>
                    <div className="col">12</div>
                    <div className="col">13</div>
                    <div className="col">14</div>
                    <div className="col">15</div>
                    <div className="col">16</div>
                </div>
                <div className="dental-chart col-lg-6 col-xl-6 col-md-6">
                    <div className="row t1">
                        <svg
                            width="40"
                            height="58"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-66 -136)">
                                <path
                                    id="root1"
                                    className="tooth-root"
                                    d="M96.4973 140.611C98.0097 139.876 100.969 142.784 102.415 149.436 103.862 156.088 104.782 173.404 105.177 180.524 105.571 187.644 105.769 190.719 104.782 192.157 104.289 192.875 103.73 192.365 102.884 191.555L102.47 191.28 100.94 189.688C97.3727 187.184 92.444 185.635 87 185.635 84.278 185.635 81.6848 186.022 79.3262 186.722L73.194 189.624 71.6422 189.549C68.9134 188.112 69.0778 183.666 68.6832 177.716 68.2887 171.766 68.5517 159.398 69.275 153.849 69.9983 148.3 71.7079 143.854 73.023 144.422 74.3381 144.99 75.8176 152.344 77.1655 157.258 78.5135 162.172 79.5327 170.061 81.1108 173.905 82.6889 177.749 84.7273 180.29 86.6342 180.323 88.541 180.357 91.4342 178.518 92.552 174.106 93.6699 169.693 92.6836 159.431 93.3411 153.849 93.9986 148.266 94.985 141.347 96.4973 140.611Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                                <path
                                    id="root2"
                                    className="tooth-root"
                                    d="M86.4293 175.861C87.5069 173.188 90.2961 158.71 89.2818 152.317 88.2676 145.923 81.8652 137.568 80.3438 137.5 78.8224 137.433 79.7416 146.769 80.1536 151.911 80.5656 157.053 81.9603 164.495 82.816 168.351 83.6717 172.207 85.3516 178.533 86.4293 175.861Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                        <svg
                            width="47"
                            height="44"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-60 -191)">
                                <path
                                    id="tooth1"
                                    className="tooth"
                                    d="M104.514 228.349C102.916 231.349 101.184 232.849 95.7241 233.748 90.2639 234.648 77.0462 234.848 71.7525 233.748 66.4588 232.649 65.6264 231.416 63.9617 227.15 62.297 222.884 60.8987 213.286 61.7643 208.154 62.63 203.021 65.1603 198.789 69.1556 196.356 73.1508 193.923 80.6087 193.29 85.7359 193.557 90.8632 193.823 96.7563 196.289 99.9192 197.956 103.082 199.622 103.981 200.588 104.713 203.555 105.446 206.521 105.346 211.62 105.313 215.752 105.28 219.885 106.112 225.35 104.514 228.349Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t2">
                        <svg
                            width="42"
                            height="65"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-138 -134)">
                                <path
                                    id="root3"
                                    className="tooth-root"
                                    d="M170.011 141.657C170.938 141.252 171.98 141.595 172.895 143.1 174.724 146.11 177.738 155.475 178.788 162.766 179.839 170.057 179.5 180.559 179.195 186.847 179.043 189.991 178.941 192.976 178.649 195.388L178.237 197.5 176.284 195.984C171.849 193.142 165.721 191.385 158.953 191.385 152.184 191.385 146.057 193.142 141.621 195.984L139.852 197.358 139.5 195.588C139.513 193.335 140.122 190.442 140.173 187.047 140.275 180.258 141.969 166.378 143.019 159.555 144.069 152.732 145.186 146.879 146.474 146.11 147.761 145.341 149.759 149.956 150.742 154.939 151.724 159.923 150.979 170.826 152.368 176.01 153.756 181.194 156.94 185.509 159.074 186.044 161.208 186.579 163.783 183.402 165.172 179.221 166.56 175.04 166.967 166.712 167.407 160.96 167.848 155.207 166.899 147.682 167.814 144.705 168.271 143.217 169.084 142.063 170.011 141.657Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                                <path
                                    id="root4"
                                    className="tooth-root"
                                    d="M160.125 180.233C161.318 178.381 162.95 164.191 162.385 157.013 161.82 149.835 158.211 139.382 156.736 137.166 155.262 134.95 153.787 138.555 153.536 143.715 153.285 148.875 154.414 162.371 155.23 168.127 156.046 173.882 158.933 182.086 160.125 180.233Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="49"
                            height="47"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-133 -195)">
                                <path
                                    id="tooth2"
                                    className="tooth"
                                    d="M180.111 223.972C180.078 226.87 181.232 231.578 179.715 234.245 178.197 236.911 177.405 239.216 171.004 239.973 164.603 240.731 147.215 240.928 141.309 238.788 135.403 236.648 135.964 232.598 135.568 227.133 135.172 221.668 136.525 210.934 138.934 205.996 141.342 201.057 145.598 198.917 150.02 197.501 154.441 196.085 160.908 196.25 165.461 197.501 170.014 198.752 174.93 201.781 177.339 205.008 179.748 208.234 179.385 213.469 179.913 216.861 180.44 220.252 180.144 221.075 180.111 223.972Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t3">
                        <svg
                            width="43"
                            height="63"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-212 -137)">
                                <path
                                    id="root5"
                                    className="tooth-root"
                                    d="M234.715 180.033C235.755 178.009 237.022 167.818 236.275 160.913 235.528 154.009 231.693 139.868 230.23 138.606 228.768 137.345 227.533 147.602 227.501 153.345 227.468 159.087 228.963 169.046 230.035 173.063 231.108 177.079 233.675 182.058 234.715 180.033Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                                <path
                                    id="root6"
                                    className="tooth-root"
                                    d="M243.554 141.667C243.987 141.42 244.426 141.439 244.849 141.779 246.539 143.142 249.224 151.282 250.617 157.728 252.009 164.174 253.003 173.212 253.202 180.456 253.351 185.888 253.855 193.358 253.076 197.861L252.833 198.5 250.876 196.075C246.869 192.507 241.747 190.114 237.288 189.649 232.829 189.184 224.773 191.13 217.732 194.009L213.723 195.856 213.536 195.209C213.391 193.273 213.739 190.74 213.623 187.633 213.391 181.419 214.12 168.859 215.015 161.915 215.91 154.97 217.468 146.398 218.993 145.966 220.518 145.534 222.772 154.073 224.164 159.323 225.556 164.573 225.722 173.013 227.346 177.465 228.971 181.918 231.722 186.636 233.91 186.038 236.098 185.44 239.379 179.957 240.473 173.877 241.567 167.796 239.744 154.904 240.473 149.554 241.02 145.542 242.257 142.409 243.554 141.667Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="53"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-206 -194)">
                                <path
                                    id="tooth3"
                                    className="tooth"
                                    d="M256.849 216.48C257.143 221.855 258.746 233.747 255.475 238.048 252.204 242.348 243.732 241.508 237.223 242.281 230.713 243.053 221.129 244.364 216.419 242.684 211.709 241.004 210.008 237.275 208.961 232.202 207.914 227.129 208.797 217.622 210.139 212.247 211.48 206.871 212.461 202.706 217.008 199.951 221.554 197.196 231.302 194.743 237.419 195.718 243.536 196.692 250.47 202.336 253.708 205.796 256.947 209.257 256.554 211.104 256.849 216.48Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t4">
                        <svg
                            width="32"
                            height="68"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-289 -131)">
                                <path
                                    id="root7"
                                    className="tooth-root"
                                    d="M312.822 133.899C313.735 135.323 314.616 139.792 314.974 146.613 315.154 150.023 315.414 156.197 315.5 161.958L315.467 169.5 305.5 146.805 306.477 144.192C307.557 141.754 308.796 139.561 309.497 138.071 310.899 135.091 311.91 132.476 312.822 133.899Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                                <path
                                    id="root8"
                                    className="tooth-root"
                                    d="M293.532 132.503C293.81 132.464 294.196 132.78 294.745 133.39 296.943 135.83 301.44 148.096 305.536 158.658 309.633 169.22 317.527 190.11 319.325 196.762L319.5 197.5 314.593 194.469C311.703 193.348 308.525 192.729 305.19 192.729 301.854 192.729 298.677 193.348 295.787 194.469L290.894 197.491 290.59 193.748C290.092 181.081 291.793 153.465 292.347 144.019 292.822 135.922 292.697 132.619 293.532 132.503Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="53"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-206 -194)">
                                <path
                                    id="tooth4"
                                    className="tooth"
                                    d="M256.849 216.48C257.143 221.855 258.746 233.747 255.475 238.048 252.204 242.348 243.732 241.508 237.223 242.281 230.713 243.053 221.129 244.364 216.419 242.684 211.709 241.004 210.008 237.275 208.961 232.202 207.914 227.129 208.797 217.622 210.139 212.247 211.48 206.871 212.461 202.706 217.008 199.951 221.554 197.196 231.302 194.743 237.419 195.718 243.536 196.692 250.47 202.336 253.708 205.796 256.947 209.257 256.554 211.104 256.849 216.48Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t5">
                        <svg
                            width="32"
                            height="65"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-362 -132)">
                                <path
                                    id="root9"
                                    className="tooth-root"
                                    d="M381.398 133.782C383.394 134.98 385.429 139.849 386.811 145.385 388.653 152.766 389.404 170.297 390.496 178.205 391.315 184.136 393.094 188.251 393.5 190.8L393.44 191.692 387.573 188.406C385.197 187.572 382.586 187.11 379.844 187.11 374.362 187.11 369.398 188.956 365.805 191.94L363.727 194.5 363.5 192.86C363.516 184.911 369.391 167.034 371.66 158.038 374.253 147.757 376.915 136.027 379.44 133.918 380.071 133.39 380.732 133.382 381.398 133.782Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="42"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-358 -192)">
                                <path
                                    id="tooth5"
                                    className="tooth"
                                    d="M371.285 239.298C367.617 237.692 363.114 235.919 361.48 231.47 359.846 227.021 360.546 218.089 361.48 212.602 362.414 207.116 363.848 201.73 367.083 198.552 370.318 195.374 376.321 193.199 380.89 193.534 385.458 193.868 391.395 195.273 394.496 200.559 397.598 205.845 399.432 219.661 399.498 225.248 399.565 230.834 397.564 231.437 394.896 234.079 392.228 236.722 386.759 240.034 383.491 241.105 380.223 242.175 374.953 240.904 371.285 239.298Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t6">
                        <svg
                            width="32"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-435 -115)">
                                <path
                                    id="root10"
                                    className="tooth-root"
                                    d="M452.943 117.561C455.335 116.733 457.694 124.483 459.431 131.868 461.167 139.254 462.379 152.104 463.362 161.874 464.345 171.643 465.132 183.897 465.328 190.488L465.5 192.261 460.639 188.673C458.088 187.491 455.283 186.838 452.339 186.838 449.395 186.838 446.59 187.491 444.039 188.673L437.5 193.5 438.137 187.495C438.969 181.165 440.116 174.011 440.754 168.63 442.032 157.866 443.048 145.347 445.079 136.836 447.111 128.324 450.551 118.389 452.943 117.561Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="44"
                            height="55"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-430 -192)">
                                <path
                                    id="tooth6"
                                    className="tooth"
                                    d="M451.154 245.499C446.853 245.565 441.818 241.135 438.55 237.961 435.282 234.787 431.914 232.44 431.548 226.456 431.181 220.471 432.948 207.544 436.349 202.056 439.75 196.567 446.886 193.79 451.954 193.526 457.022 193.261 463.358 195.013 466.759 200.469 470.16 205.924 473.194 219.876 472.361 226.257 471.527 232.638 467.392 234.589 464.358 237.564 461.324 240.54 455.455 245.433 451.154 245.499Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t7">
                        <svg
                            width="33"
                            height="71"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-506 -130)">
                                <path
                                    id="root11"
                                    className="tooth-root"
                                    d="M524.897 131.677C526.505 132.558 527.902 136.567 528.68 140.164 529.718 144.961 528.648 152.821 529.458 160.748 530.269 168.676 532.116 180.333 533.543 187.727 533.899 189.576 534.442 191.479 535.035 193.32L536.5 197.596 535.918 196.887C532.579 194.144 527.966 192.447 522.871 192.447 517.776 192.447 513.163 194.144 509.824 196.887L508.5 198.5 508.514 198.132C508.907 194.814 509.734 190.659 510.204 186.329 511.144 177.669 512.894 162.014 515.066 152.954 517.238 143.895 520.966 134.102 523.235 131.971 523.802 131.438 524.361 131.383 524.897 131.677Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="42"
                            height="48"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-501 -197)">
                                <path
                                    id="tooth7"
                                    className="tooth"
                                    d="M503.29 224.69C503.937 219.705 504.311 210.099 506.966 205.745 509.622 201.391 514.15 198.965 519.222 198.566 524.295 198.167 533.589 199.563 537.402 203.352 541.215 207.141 541.589 215.151 542.1 221.3 542.61 227.449 543.087 236.556 540.466 240.245 537.844 243.934 531.444 243.17 526.371 243.436 521.299 243.702 513.911 243.137 510.03 241.84 506.149 240.544 504.175 238.284 503.085 235.658 501.996 233.033 502.643 229.676 503.29 224.69Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t8">
                        <svg
                            width="37"
                            height="72"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-576 -128)">
                                <path
                                    id="root12"
                                    className="tooth-root"
                                    d="M599.837 129.857C601.634 131.389 603.063 137.535 604.082 142.205 605.44 148.431 604.811 158.83 606.07 167.446 607.014 173.907 610.232 182.981 611.362 189.046L611.5 191.491 611.157 191.212C606.962 188.982 601.426 187.982 595.543 188.739 589.66 189.495 584.545 191.867 581.029 195.088L578.511 198.5 578.5 198.406C578.664 189.809 584.998 170.369 587.781 159.974 590.962 148.094 595.203 133.051 597.919 130.089 598.599 129.349 599.238 129.347 599.837 129.857Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="49"
                            height="56"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-572 -192)">
                                <path
                                    id="tooth8"
                                    className="tooth"
                                    d="M599.913 246.54C595.955 246.54 586.586 248.558 582.495 246.742 578.404 244.925 576.425 241.191 575.369 235.641 574.313 230.091 573.852 219.965 576.161 213.439 578.47 206.913 583.32 199.479 589.225 196.485 595.13 193.491 606.61 192.078 611.592 195.476 616.573 198.873 618.19 208.965 619.113 216.87 620.037 224.775 619.278 237.928 617.134 242.907 614.99 247.886 608.986 246.103 606.247 246.742 603.509 247.381 603.872 246.54 599.913 246.54Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>
                </div>

                {/* upper right teeth */}
                <div className="dental-chart col-lg-6 col-xl-6 col-md-6">
                    <div className="row t9">
                        <svg
                            width="37"
                            height="72"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-576 -128)">
                                <path
                                    id="root13"
                                    className="tooth-root"
                                    d="M599.837 129.857C601.634 131.389 603.063 137.535 604.082 142.205 605.44 148.431 604.811 158.83 606.07 167.446 607.014 173.907 610.232 182.981 611.362 189.046L611.5 191.491 611.157 191.212C606.962 188.982 601.426 187.982 595.543 188.739 589.66 189.495 584.545 191.867 581.029 195.088L578.511 198.5 578.5 198.406C578.664 189.809 584.998 170.369 587.781 159.974 590.962 148.094 595.203 133.051 597.919 130.089 598.599 129.349 599.238 129.347 599.837 129.857Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="49"
                            height="56"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-572 -192)">
                                <path
                                    id="tooth9"
                                    className="tooth"
                                    d="M599.913 246.54C595.955 246.54 586.586 248.558 582.495 246.742 578.404 244.925 576.425 241.191 575.369 235.641 574.313 230.091 573.852 219.965 576.161 213.439 578.47 206.913 583.32 199.479 589.225 196.485 595.13 193.491 606.61 192.078 611.592 195.476 616.573 198.873 618.19 208.965 619.113 216.87 620.037 224.775 619.278 237.928 617.134 242.907 614.99 247.886 608.986 246.103 606.247 246.742 603.509 247.381 603.872 246.54 599.913 246.54Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t10">
                        <svg
                            width="33"
                            height="71"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-506 -130)">
                                <path
                                    id="root14"
                                    className="tooth-root"
                                    d="M524.897 131.677C526.505 132.558 527.902 136.567 528.68 140.164 529.718 144.961 528.648 152.821 529.458 160.748 530.269 168.676 532.116 180.333 533.543 187.727 533.899 189.576 534.442 191.479 535.035 193.32L536.5 197.596 535.918 196.887C532.579 194.144 527.966 192.447 522.871 192.447 517.776 192.447 513.163 194.144 509.824 196.887L508.5 198.5 508.514 198.132C508.907 194.814 509.734 190.659 510.204 186.329 511.144 177.669 512.894 162.014 515.066 152.954 517.238 143.895 520.966 134.102 523.235 131.971 523.802 131.438 524.361 131.383 524.897 131.677Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="42"
                            height="48"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-501 -197)">
                                <path
                                    id="tooth10"
                                    className="tooth"
                                    d="M503.29 224.69C503.937 219.705 504.311 210.099 506.966 205.745 509.622 201.391 514.15 198.965 519.222 198.566 524.295 198.167 533.589 199.563 537.402 203.352 541.215 207.141 541.589 215.151 542.1 221.3 542.61 227.449 543.087 236.556 540.466 240.245 537.844 243.934 531.444 243.17 526.371 243.436 521.299 243.702 513.911 243.137 510.03 241.84 506.149 240.544 504.175 238.284 503.085 235.658 501.996 233.033 502.643 229.676 503.29 224.69Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t11">
                        <svg
                            width="32"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-435 -115)">
                                <path
                                    id="root15"
                                    className="tooth-root"
                                    d="M452.943 117.561C455.335 116.733 457.694 124.483 459.431 131.868 461.167 139.254 462.379 152.104 463.362 161.874 464.345 171.643 465.132 183.897 465.328 190.488L465.5 192.261 460.639 188.673C458.088 187.491 455.283 186.838 452.339 186.838 449.395 186.838 446.59 187.491 444.039 188.673L437.5 193.5 438.137 187.495C438.969 181.165 440.116 174.011 440.754 168.63 442.032 157.866 443.048 145.347 445.079 136.836 447.111 128.324 450.551 118.389 452.943 117.561Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="44"
                            height="55"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-430 -192)">
                                <path
                                    id="tooth11"
                                    className="tooth"
                                    d="M451.154 245.499C446.853 245.565 441.818 241.135 438.55 237.961 435.282 234.787 431.914 232.44 431.548 226.456 431.181 220.471 432.948 207.544 436.349 202.056 439.75 196.567 446.886 193.79 451.954 193.526 457.022 193.261 463.358 195.013 466.759 200.469 470.16 205.924 473.194 219.876 472.361 226.257 471.527 232.638 467.392 234.589 464.358 237.564 461.324 240.54 455.455 245.433 451.154 245.499Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t12">
                        <svg
                            width="32"
                            height="65"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-362 -132)">
                                <path
                                    id="root16"
                                    className="tooth-root"
                                    d="M381.398 133.782C383.394 134.98 385.429 139.849 386.811 145.385 388.653 152.766 389.404 170.297 390.496 178.205 391.315 184.136 393.094 188.251 393.5 190.8L393.44 191.692 387.573 188.406C385.197 187.572 382.586 187.11 379.844 187.11 374.362 187.11 369.398 188.956 365.805 191.94L363.727 194.5 363.5 192.86C363.516 184.911 369.391 167.034 371.66 158.038 374.253 147.757 376.915 136.027 379.44 133.918 380.071 133.39 380.732 133.382 381.398 133.782Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="42"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-358 -192)">
                                <path
                                    id="tooth12"
                                    className="tooth"
                                    d="M371.285 239.298C367.617 237.692 363.114 235.919 361.48 231.47 359.846 227.021 360.546 218.089 361.48 212.602 362.414 207.116 363.848 201.73 367.083 198.552 370.318 195.374 376.321 193.199 380.89 193.534 385.458 193.868 391.395 195.273 394.496 200.559 397.598 205.845 399.432 219.661 399.498 225.248 399.565 230.834 397.564 231.437 394.896 234.079 392.228 236.722 386.759 240.034 383.491 241.105 380.223 242.175 374.953 240.904 371.285 239.298Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t13">
                        <svg
                            width="32"
                            height="68"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-289 -131)">
                                <path
                                    id="root17"
                                    className="tooth-root"
                                    d="M312.822 133.899C313.735 135.323 314.616 139.792 314.974 146.613 315.154 150.023 315.414 156.197 315.5 161.958L315.467 169.5 305.5 146.805 306.477 144.192C307.557 141.754 308.796 139.561 309.497 138.071 310.899 135.091 311.91 132.476 312.822 133.899Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                                <path
                                    id="root18"
                                    className="tooth-root"
                                    d="M293.532 132.503C293.81 132.464 294.196 132.78 294.745 133.39 296.943 135.83 301.44 148.096 305.536 158.658 309.633 169.22 317.527 190.11 319.325 196.762L319.5 197.5 314.593 194.469C311.703 193.348 308.525 192.729 305.19 192.729 301.854 192.729 298.677 193.348 295.787 194.469L290.894 197.491 290.59 193.748C290.092 181.081 291.793 153.465 292.347 144.019 292.822 135.922 292.697 132.619 293.532 132.503Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="43"
                            height="48"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-282 -197)">
                                <path
                                    id="tooth13"
                                    className="tooth"
                                    d="M292.702 238.356C289.385 236.215 286.034 233.941 284.939 230.646 283.845 227.351 285.006 223.365 286.134 218.587 287.262 213.81 287.427 205.243 291.707 201.981 295.987 198.719 306.669 197.797 311.811 199.016 316.953 200.235 320.602 204.288 322.559 209.296 324.517 214.304 325.247 224.024 323.555 229.065 321.863 234.106 315.526 237.137 312.408 239.542 309.29 241.948 307.498 243.364 304.844 243.496 302.19 243.628 296.02 240.498 292.702 238.356Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t14">
                        <svg
                            width="43"
                            height="63"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-212 -137)">
                                <path
                                    id="root19"
                                    className="tooth-root"
                                    d="M234.715 180.033C235.755 178.009 237.022 167.818 236.275 160.913 235.528 154.009 231.693 139.868 230.23 138.606 228.768 137.345 227.533 147.602 227.501 153.345 227.468 159.087 228.963 169.046 230.035 173.063 231.108 177.079 233.675 182.058 234.715 180.033Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                                <path
                                    id="root20"
                                    className="tooth-root"
                                    d="M243.554 141.667C243.987 141.42 244.426 141.439 244.849 141.779 246.539 143.142 249.224 151.282 250.617 157.728 252.009 164.174 253.003 173.212 253.202 180.456 253.351 185.888 253.855 193.358 253.076 197.861L252.833 198.5 250.876 196.075C246.869 192.507 241.747 190.114 237.288 189.649 232.829 189.184 224.773 191.13 217.732 194.009L213.723 195.856 213.536 195.209C213.391 193.273 213.739 190.74 213.623 187.633 213.391 181.419 214.12 168.859 215.015 161.915 215.91 154.97 217.468 146.398 218.993 145.966 220.518 145.534 222.772 154.073 224.164 159.323 225.556 164.573 225.722 173.013 227.346 177.465 228.971 181.918 231.722 186.636 233.91 186.038 236.098 185.44 239.379 179.957 240.473 173.877 241.567 167.796 239.744 154.904 240.473 149.554 241.02 145.542 242.257 142.409 243.554 141.667Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="53"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-206 -194)">
                                <path
                                    id="tooth14"
                                    className="tooth"
                                    d="M256.849 216.48C257.143 221.855 258.746 233.747 255.475 238.048 252.204 242.348 243.732 241.508 237.223 242.281 230.713 243.053 221.129 244.364 216.419 242.684 211.709 241.004 210.008 237.275 208.961 232.202 207.914 227.129 208.797 217.622 210.139 212.247 211.48 206.871 212.461 202.706 217.008 199.951 221.554 197.196 231.302 194.743 237.419 195.718 243.536 196.692 250.47 202.336 253.708 205.796 256.947 209.257 256.554 211.104 256.849 216.48Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t15">
                        <svg
                            width="42"
                            height="65"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-138 -134)">
                                <path
                                    id="root21"
                                    className="tooth-root"
                                    d="M170.011 141.657C170.938 141.252 171.98 141.595 172.895 143.1 174.724 146.11 177.738 155.475 178.788 162.766 179.839 170.057 179.5 180.559 179.195 186.847 179.043 189.991 178.941 192.976 178.649 195.388L178.237 197.5 176.284 195.984C171.849 193.142 165.721 191.385 158.953 191.385 152.184 191.385 146.057 193.142 141.621 195.984L139.852 197.358 139.5 195.588C139.513 193.335 140.122 190.442 140.173 187.047 140.275 180.258 141.969 166.378 143.019 159.555 144.069 152.732 145.186 146.879 146.474 146.11 147.761 145.341 149.759 149.956 150.742 154.939 151.724 159.923 150.979 170.826 152.368 176.01 153.756 181.194 156.94 185.509 159.074 186.044 161.208 186.579 163.783 183.402 165.172 179.221 166.56 175.04 166.967 166.712 167.407 160.96 167.848 155.207 166.899 147.682 167.814 144.705 168.271 143.217 169.084 142.063 170.011 141.657Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                                <path
                                    id="root22"
                                    className="tooth-root"
                                    d="M160.125 180.233C161.318 178.381 162.95 164.191 162.385 157.013 161.82 149.835 158.211 139.382 156.736 137.166 155.262 134.95 153.787 138.555 153.536 143.715 153.285 148.875 154.414 162.371 155.23 168.127 156.046 173.882 158.933 182.086 160.125 180.233Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="49"
                            height="47"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-133 -195)">
                                <path
                                    id="tooth15"
                                    className="tooth"
                                    d="M180.111 223.972C180.078 226.87 181.232 231.578 179.715 234.245 178.197 236.911 177.405 239.216 171.004 239.973 164.603 240.731 147.215 240.928 141.309 238.788 135.403 236.648 135.964 232.598 135.568 227.133 135.172 221.668 136.525 210.934 138.934 205.996 141.342 201.057 145.598 198.917 150.02 197.501 154.441 196.085 160.908 196.25 165.461 197.501 170.014 198.752 174.93 201.781 177.339 205.008 179.748 208.234 179.385 213.469 179.913 216.861 180.44 220.252 180.144 221.075 180.111 223.972Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t16">
                        <svg
                            width="40"
                            height="58"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-66 -136)">
                                <path
                                    id="root23"
                                    className="tooth-root"
                                    d="M96.4973 140.611C98.0097 139.876 100.969 142.784 102.415 149.436 103.862 156.088 104.782 173.404 105.177 180.524 105.571 187.644 105.769 190.719 104.782 192.157 104.289 192.875 103.73 192.365 102.884 191.555L102.47 191.28 100.94 189.688C97.3727 187.184 92.444 185.635 87 185.635 84.278 185.635 81.6848 186.022 79.3262 186.722L73.194 189.624 71.6422 189.549C68.9134 188.112 69.0778 183.666 68.6832 177.716 68.2887 171.766 68.5517 159.398 69.275 153.849 69.9983 148.3 71.7079 143.854 73.023 144.422 74.3381 144.99 75.8176 152.344 77.1655 157.258 78.5135 162.172 79.5327 170.061 81.1108 173.905 82.6889 177.749 84.7273 180.29 86.6342 180.323 88.541 180.357 91.4342 178.518 92.552 174.106 93.6699 169.693 92.6836 159.431 93.3411 153.849 93.9986 148.266 94.985 141.347 96.4973 140.611Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                                <path
                                    id="root24"
                                    className="tooth-root"
                                    d="M86.4293 175.861C87.5069 173.188 90.2961 158.71 89.2818 152.317 88.2676 145.923 81.8652 137.568 80.3438 137.5 78.8224 137.433 79.7416 146.769 80.1536 151.911 80.5656 157.053 81.9603 164.495 82.816 168.351 83.6717 172.207 85.3516 178.533 86.4293 175.861Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="47"
                            height="44"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-60 -191)">
                                <path
                                    id="tooth16"
                                    className="tooth"
                                    d="M104.514 228.349C102.916 231.349 101.184 232.849 95.7241 233.748 90.2639 234.648 77.0462 234.848 71.7525 233.748 66.4588 232.649 65.6264 231.416 63.9617 227.15 62.297 222.884 60.8987 213.286 61.7643 208.154 62.63 203.021 65.1603 198.789 69.1556 196.356 73.1508 193.923 80.6087 193.29 85.7359 193.557 90.8632 193.823 96.7563 196.289 99.9192 197.956 103.082 199.622 103.981 200.588 104.713 203.555 105.446 206.521 105.346 211.62 105.313 215.752 105.28 219.885 106.112 225.35 104.514 228.349Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>
                </div>

                {/* bottom teeth right side */}
                <div className="dental-chart-bottom col-lg-6 col-xl-6 col-md-6">
                    
                    <div className="row t32">
                        <svg
                            width="46"
                            height="44"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-61 -414)">
                                <path
                                    id="tooth24"
                                    className="tooth"
                                    d="M64.7737 439.749C65.1389 443.96 64.9065 448.442 65.9687 451.158 67.0309 453.875 66.0683 455.199 71.147 456.048 76.2258 456.897 90.6986 458.73 96.4413 456.251 102.184 453.773 104.176 446.914 105.603 441.175 107.03 435.437 106.698 425.692 105.006 421.821 103.313 417.95 98.5658 419.002 95.4455 417.95 92.3252 416.897 89.7028 415.607 86.2838 415.505 82.8648 415.403 77.786 416.931 74.9312 417.338 72.0765 417.746 71.0143 416.524 69.1554 417.95 67.2965 419.376 64.674 422.432 63.7778 425.895 62.8816 429.359 64.4085 435.539 64.7737 439.749Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="36"
                            height="64"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-66 -457)">
                                <path
                                    id="root32"
                                    className="tooth-root"
                                    d="M67.7142 458.5 72.9098 459.443C76.7674 459.988 81.0085 460.29 85.4603 460.29 89.9121 460.29 94.1533 459.988 98.0107 459.443L101.487 458.812 101.499 459.205C101.541 467.687 100.449 485.096 99.1754 493.308 97.7203 502.692 94.1669 512.908 92.6779 512.476 91.1889 512.043 91.5273 496.735 90.2413 490.712 88.9554 484.689 86.8911 477.434 84.9621 476.336 83.0331 475.238 79.6152 478.133 78.6676 484.123 77.7201 490.113 80.1567 506.419 79.2768 512.276 78.3969 518.133 75.2497 522.825 73.3884 519.264 71.5272 515.704 69.0567 500.695 68.1092 490.912 67.1616 481.128 67.5677 466.818 67.7031 460.562Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t31">
                        <svg
                            width="49"
                            height="45"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-133 -409)">
                                <path
                                    id="tooth23"
                                    className="tooth"
                                    d="M135.118 426.574C135.959 430.894 138.145 440.672 140.163 444.657 142.181 448.642 141.677 449.378 147.226 450.483 152.776 451.588 168.146 453.933 173.46 451.287 178.774 448.642 177.9 440.772 179.111 434.611 180.321 428.449 182.743 418.068 180.725 414.318 178.707 410.567 170.568 412.744 167.003 412.107 163.437 411.471 162.428 410.5 159.334 410.5 156.24 410.5 151.598 411.806 148.437 412.107 145.275 412.409 142.585 411.203 140.365 412.308 138.145 413.413 135.925 416.528 135.118 418.738 134.311 420.948 134.277 422.254 135.118 426.574Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="40"
                            height="70"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-137 -449)">
                                <path
                                    id="root31"
                                    className="tooth-root"
                                    d="M139.794 451.5 144.147 454.675C148.156 456.647 153.694 457.866 159.811 457.866 162.87 457.866 165.784 457.561 168.434 457.01L174.99 454.836 175.372 458.542C175.545 461.603 175.528 465.387 175.41 469.491 175.174 477.698 174.23 493.742 172.781 501.176 171.332 508.609 168.468 513.285 166.715 514.092 164.963 514.899 162.941 510.19 162.267 506.019 161.593 501.849 163.379 493.978 162.671 489.067 161.964 484.156 159.773 478.034 158.021 476.554 156.268 475.074 153.235 476.924 152.157 480.187 151.078 483.45 151.954 490.143 151.55 496.13 151.146 502.118 150.943 512.982 149.73 516.11 148.517 519.238 146.023 519.743 144.271 514.899 142.518 510.056 140.126 496.366 139.216 487.049 138.306 477.732 138.373 465.387 138.811 458.996Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t30">
                        <svg
                            width="50"
                            height="47"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-208 -410)">
                                <path
                                    id="tooth22"
                                    className="tooth"
                                    d="M213.581 415.32C210.998 417.361 210.037 419.669 209.606 423.751 209.176 427.832 210.136 434.991 210.998 439.809 211.859 444.626 212.124 450.079 214.774 452.655 217.424 455.231 222.062 454.796 226.898 455.265 231.734 455.733 239.088 457.673 243.792 455.465 248.496 453.257 253.233 448.072 255.121 442.017 257.009 435.962 256.91 424.018 255.121 419.134 253.332 414.25 248.065 413.648 244.388 412.711 240.711 411.774 236.272 413.715 233.059 413.514 229.846 413.313 228.024 411.373 225.109 411.507 222.194 411.64 216.165 413.28 213.581 415.32Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="39"
                            height="67"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-212 -453)">
                                <path
                                    id="root30"
                                    className="tooth-root"
                                    d="M213.52 456.5 213.831 456.808C217.04 459.142 224.552 460.779 233.307 460.779 239.145 460.779 244.429 460.051 248.254 458.875L249.489 458.311 249.5 460.025C249.278 470.267 247.248 492.253 245.924 500.709 244.41 510.373 241.745 513.152 240.397 514.41 239.048 515.668 238.357 511.994 237.83 508.254 237.304 504.515 237.633 497.068 237.238 491.972 236.843 486.875 236.81 480.223 235.461 477.675 234.113 475.127 230.625 474.531 229.144 476.682 227.664 478.833 227.072 484.559 226.578 490.582 226.085 496.605 227.269 508.288 226.183 512.822 225.098 517.355 221.709 519.804 220.064 517.786 218.419 515.767 217.3 508.155 216.313 500.709 215.326 493.263 214.503 481.084 214.142 473.108 213.961 469.12 213.623 464.809 213.5 461.119Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t29">
                        <svg
                            width="43"
                            height="49"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-284 -408)">
                                <path
                                    id="tooth21"
                                    className="tooth"
                                    d="M296.225 414.429C293.081 416.2 289.066 418.238 287.393 421.446 285.721 424.654 286.323 429.767 286.189 433.676 286.055 437.586 284.483 441.295 286.59 444.904 288.698 448.513 294.552 453.625 298.835 455.33 303.117 457.034 308.202 456.8 312.283 455.129 316.364 453.458 321.382 450.818 323.323 445.305 325.263 439.791 326.768 427.795 323.925 422.047 321.081 416.3 310.443 412.156 306.261 410.82 302.08 409.483 299.37 412.658 296.225 414.429Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="34"
                            height="71"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-287 -451)">
                                <path
                                    id="root29"
                                    className="tooth-root"
                                    d="M289.5 454.5 292.729 457.531C296.11 459.671 300.781 460.995 305.941 460.995 311.101 460.995 315.773 459.671 319.154 457.531L319.467 457.237 319.5 457.396C319.467 464.094 313.939 486.323 312.549 495.988 311.159 505.652 312.185 511.151 311.159 515.383 310.132 519.616 308.212 522.082 306.392 521.382 304.571 520.682 302.387 518.749 300.235 511.184 298.083 503.619 295.27 486.423 293.482 475.992 292.589 470.776 291.223 464.769 290.267 459.645Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t28">
                        <svg
                            width="41"
                            height="48"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-358 -409)">
                                <path
                                    id="tooth20"
                                    className="tooth"
                                    d="M359.729 430.73C359.965 434.714 359.763 442.909 361.549 446.598 363.336 450.288 366.369 451.43 370.448 452.867 374.526 454.304 381.74 456.23 386.02 455.218 390.301 454.206 394.144 452.018 396.132 446.794 398.121 441.57 399.233 429.163 397.952 423.874 396.672 418.585 391.852 417.115 388.447 415.058 385.043 413.001 381.402 411.238 377.526 411.532 373.65 411.826 368.088 414.96 365.19 416.821 362.291 418.682 361.044 420.446 360.134 422.698 359.223 424.951 359.493 426.747 359.729 430.73Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="35"
                            height="71"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-361 -453)">
                                <path
                                    id="root28"
                                    className="tooth-root"
                                    d="M362.51 455.5 362.987 455.793C369.303 458.97 381.846 462.045 386.866 461.426 388.539 461.22 390.16 460.632 391.651 459.773L395.5 456.623 395.438 457.345C395.299 458.331 395.086 459.596 394.802 461.238 393.665 467.807 389.552 483.224 387.78 492.731 386.007 502.238 385.506 513.429 384.168 518.282 382.831 523.134 381.493 522.969 379.754 521.847 378.016 520.724 376.076 518.546 373.735 511.547 371.395 504.549 367.583 488.208 365.71 479.857 363.838 471.505 362.834 466.421 362.5 461.436Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t27">
                        <svg
                            width="43"
                            height="53"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-431 -406)">
                                <path
                                    id="tooth19"
                                    className="tooth"
                                    d="M433.742 425.321C433.643 428.769 432.814 436.322 434.936 441.083 437.058 445.845 442.994 451.165 446.476 453.89 449.958 456.616 452.379 457.798 455.828 457.437 459.277 457.076 464.417 455.565 467.169 451.723 469.922 447.881 471.514 439.047 472.343 434.384 473.172 429.721 474.564 427.948 472.144 423.745 469.723 419.542 462.096 411.135 457.818 409.165 453.54 407.195 450.19 410.052 446.476 411.923 442.762 413.795 437.655 418.162 435.533 420.395 433.411 422.628 433.842 421.873 433.742 425.321Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="38"
                            height="88"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-434 -444)">
                                <path
                                    id="root27"
                                    className="tooth-root"
                                    d="M436.5 450.5 436.612 450.939C439.253 456.362 450.135 462.065 455.217 462.475 460.3 462.884 468.479 458.715 470.444 453.663L470.5 453.376 470.405 456.093C469.948 461.805 468.215 475.468 466.679 483.953 465.142 492.437 462.462 499.853 461.187 507.002 459.912 514.15 459.944 522.768 459.029 526.844 458.114 530.919 457.198 531.721 455.695 531.454 454.191 531.186 451.608 529.683 450.007 525.24 448.405 520.798 447.882 512.948 446.084 504.797 444.286 496.646 440.723 484.287 439.219 476.336 437.715 468.386 437.355 462.206 437.061 457.095Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t26">
                        <svg
                            width="32"
                            height="43"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-506 -405)">
                                <path
                                    id="tooth18"
                                    className="tooth"
                                    d="M508.605 415.508C508.345 420.06 508.508 429.401 509.774 434.325 511.039 439.248 513.928 442.924 516.2 445.049 518.472 447.173 520.355 448.118 523.406 447.072 526.457 446.027 532.364 443.767 534.506 438.776 536.649 433.785 536.746 422.286 536.259 417.126 535.772 411.967 535.74 409.505 531.585 407.819 527.431 406.133 515.097 406.302 511.332 407.01 507.566 407.718 508.865 410.955 508.605 415.508Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="31"
                            height="74"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-507 -440)">
                                <path
                                    id="root26"
                                    className="tooth-root"
                                    d="M509.623 444.5 509.813 445.121C512.312 449.25 517.82 452.446 521.904 452.699 524.627 452.868 529.438 451.897 533.569 450.13L537.5 447.77 536.785 453.838C535.894 460.259 534.715 467.482 534.012 472.848 532.606 483.581 531.033 497.352 529.393 504.034 527.753 510.717 526.414 515.105 524.172 512.945 521.93 510.785 518.181 499.748 515.939 491.074 513.696 482.4 511.521 469.473 510.717 460.9 510.316 456.614 509.672 451.88 509.5 447.927Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t25">
                        <svg
                            width="35"
                            height="45"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-579 -405)">
                                <path
                                    id="tooth17"
                                    className="tooth"
                                    d="M580.665 416.719C580.599 421.184 580.036 429.683 581.46 434.378 582.883 439.074 586.791 442.58 589.208 444.894 591.625 447.209 592.949 449.193 595.962 448.267 598.975 447.342 604.604 443.175 607.286 439.339 609.968 435.503 611.591 430.344 612.054 425.251 612.518 420.159 613.346 411.858 610.068 408.783 606.79 405.707 597.088 406.997 592.386 406.799 587.685 406.6 583.81 405.939 581.857 407.592 579.903 409.246 580.731 412.255 580.665 416.719Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>

                        <svg
                            width="31"
                            height="69"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-580 -445)">
                                <path
                                    id="root25"
                                    className="tooth-root"
                                    d="M609.5 448.5 608.257 459.523C607.282 468.709 605.169 488.371 603.186 497.194 601.203 506.017 598.244 511.866 596.359 512.46 594.473 513.055 593.433 506.876 591.872 500.762 590.312 494.649 588.491 485.529 586.995 475.781 586.248 470.907 584.695 463.678 583.594 457.094L582.5 448.563 585.168 451.336C587.932 453.273 591.751 454.471 595.969 454.471 600.188 454.471 604.007 453.273 606.771 451.336Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                />
                            </g>
                        </svg>
                    </div>

                </div>

                {/* bottom teeth left side */}
                <div className="dental-chart-bottom col-lg-6 col-xl-6 col-md-6">
                    <div className="row t24">
                        <svg
                            width="35"
                            height="45"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-658 -405)">
                                <path
                                    id="tooth32"
                                    className="tooth"
                                    d="M0.164878 10.2193C0.0986557 14.6836-0.464287 23.1825 0.959546 27.8783 2.38338 32.5742 6.2905 36.0795 8.70756 38.3943 11.1246 40.7092 12.4492 42.6934 15.4622 41.7674 18.4753 40.8415 24.1043 36.6747 26.7863 32.8387 29.4682 29.0027 31.0907 23.8439 31.5543 18.7512 32.0178 13.6585 32.8456 5.35806 29.5676 2.28267 26.2896-0.792726 16.588 0.496925 11.8862 0.298509 7.18445 0.100093 3.31039-0.561293 1.35688 1.09217-0.596627 2.74564 0.2311 5.755 0.164878 10.2193Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 691.5 406.5)"
                                />
                            </g>
                        </svg>

                        <svg
                            width="31"
                            height="69"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-661 -445)">
                                <path
                                    id="root40"
                                    className="tooth-root"
                                    d="M28 0 26.7112 11.0226C25.6998 20.209 23.5084 39.8706 21.4517 48.6936 19.3951 57.5166 16.3271 63.3654 14.3717 63.9602 12.4163 64.555 11.3374 58.3757 9.71911 52.2624 8.10082 46.1492 6.21281 37.0288 4.66194 27.2806 3.88656 22.4065 2.27666 15.178 1.13461 8.59382L0 0.0633834 2.7666 2.83581C5.63334 4.7727 9.59381 5.97064 13.9683 5.97064 18.3429 5.97064 22.3033 4.7727 25.1701 2.83581Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 690.5 448.5)"
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t23">
                        <svg
                            width="31"
                            height="43"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-734 -405)">
                                <path
                                    id="tooth31"
                                    className="tooth"
                                    d="M0.108739 9.00771C-0.160197 13.5603 0.00794103 22.9014 1.31895 27.8249 2.62996 32.7484 5.62193 36.4242 7.97512 38.5487 10.3283 40.6732 12.2781 41.6175 15.4381 40.5721 18.5981 39.5267 24.7164 37.2673 26.9351 32.2763 29.1538 27.2854 29.2547 15.786 28.7504 10.6264 28.2462 5.46678 28.2126 3.00508 23.9096 1.31895 19.6066-0.367178 6.83214-0.198512 2.93257 0.50961-0.967005 1.21773 0.377675 4.4551 0.108739 9.00771Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 764.5 406.5)"
                                />
                            </g>
                        </svg>

                        <svg
                            width="31"
                            height="74"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-733 -440)">
                                <path
                                    id="root39"
                                    className="tooth-root"
                                    d="M0.123334 0 0.312551 0.620492C2.81169 4.74974 8.32038 7.94585 12.4041 8.19896 15.1266 8.36777 19.9383 7.39733 24.0693 5.62993L28 3.2701 27.2854 9.33779C26.3942 15.759 25.2146 22.9818 24.5117 28.3482 23.106 39.0811 21.5329 52.8517 19.893 59.5344 18.2531 66.2172 16.9142 70.6049 14.6719 68.4448 12.4295 66.2847 8.68089 55.248 6.43854 46.5739 4.19619 37.8999 2.02067 24.9731 1.21742 16.4003 0.815794 12.1139 0.171613 7.38021 0 3.42711Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 763.5 444.5)"
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t22">
                        <svg
                            width="43"
                            height="53"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-797 -406)">
                                <path
                                    id="tooth30"
                                    className="tooth"
                                    d="M0.242108 16.8211C0.142675 20.269-0.686426 27.8219 1.43594 32.5833 3.5583 37.3449 9.49434 42.6646 12.9763 45.3901 16.4583 48.1156 18.8791 49.2979 22.328 48.9366 25.7768 48.5754 30.917 47.0648 33.6694 43.2228 36.4217 39.3808 38.0136 30.5474 38.8426 25.8844 39.6717 21.2214 41.0644 19.4481 38.6437 15.2449 36.2229 11.0416 28.5955 2.6351 24.3177 0.664826 20.0398-1.30545 16.6904 1.5515 12.9763 3.42321 9.26216 5.29492 4.15522 9.66242 2.03285 11.8954-0.0895112 14.1284 0.341542 13.3732 0.242108 16.8211Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 839.5 408.5)"
                                />
                            </g>
                        </svg>

                        <svg
                            width="38"
                            height="88"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-800 -444)">
                                <path
                                    id="root38"
                                    className="tooth-root"
                                    d="M0 0 0.115741 0.43915C2.83437 5.86171 14.0359 11.5654 19.268 11.9746 24.5 12.3838 32.919 8.21465 34.9419 3.16295L35 2.87636 34.9025 5.59322C34.4314 11.3054 32.6478 24.9678 31.0662 33.4525 29.4846 41.9372 26.7252 49.353 25.4127 56.5016 24.1003 63.6501 24.1339 72.2684 23.1917 76.3438 22.2494 80.4191 21.3072 81.2208 19.7592 80.9536 18.2112 80.6864 15.5527 79.1831 13.9038 74.7404 12.2549 70.2976 11.7165 62.4476 9.86562 54.2969 8.01483 46.1462 4.34674 33.7866 2.79876 25.8363 1.25078 17.886 0.880562 11.7062 0.577749 6.59535Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 836.5 450.5)"
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t21">
                        <svg
                            width="42"
                            height="48"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-872 -409)">
                                <path
                                    id="tooth29"
                                    className="tooth"
                                    d="M0.223122 19.2303C0.453071 23.2135 0.256016 31.4087 1.99661 35.0981 3.73721 38.7875 6.69313 39.9303 10.667 41.3669 14.6409 42.8035 21.6693 44.7298 25.8402 43.7177 30.0112 42.7056 33.7553 40.518 35.693 35.294 37.6306 30.07 38.7145 17.6631 37.4665 12.3738 36.2184 7.08447 31.522 5.61517 28.2049 3.55828 24.8878 1.50128 21.3408-0.261714 17.5639 0.0320844 13.7871 0.325882 8.36805 3.46028 5.5436 5.32138 2.71915 7.18237 1.50403 8.94547 0.617231 11.1984-0.269567 13.4512-0.00682709 15.247 0.223122 19.2303Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 912.5 411.5)"
                                />
                            </g>
                        </svg>

                        <svg
                            width="36"
                            height="71"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-875 -453)">
                                <path
                                    id="root37"
                                    className="tooth-root"
                                    d="M0.0103212 0 0.487095 0.292683C6.80248 3.46988 19.3456 6.54486 24.3657 5.92581 26.039 5.71953 27.6602 5.13146 29.1507 4.27327L33 1.12332 32.938 1.84489C32.7989 2.83117 32.5858 4.09589 32.3015 5.73814 31.1646 12.3073 27.0516 27.7236 25.2795 37.2309 23.5073 46.7381 23.0056 57.929 21.6681 62.7816 20.3306 67.6342 18.993 67.4692 17.2542 66.3468 15.5154 65.2245 13.576 63.0457 11.2353 56.0473 8.89462 49.0489 5.08264 32.7084 3.21009 24.3565 1.33754 16.0047 0.334384 10.9209 0 5.93621Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 910.5 455.5)"
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t20">
                        <svg
                            width="43"
                            height="49"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-945 -408)">
                                <path
                                    id="tooth28"
                                    className="tooth"
                                    d="M10.7251 3.92863C7.58045 5.69972 3.56601 7.73802 1.89332 10.9459 0.220636 14.1538 0.822803 19.2665 0.688988 23.1761 0.555174 27.0857-1.0172 30.7949 1.09043 34.4038 3.19807 38.0126 9.05242 43.1253 13.3345 44.8295 17.6166 46.5337 22.7015 46.2997 26.7829 44.629 30.8642 42.9582 35.8823 40.3183 37.8226 34.8047 39.7629 29.2912 41.2684 17.2949 38.4248 11.5474 35.5813 5.79991 24.943 1.65637 20.7612 0.319738 16.5796-1.01689 13.8698 2.15755 10.7251 3.92863Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 986.5 410.5)"
                                />
                            </g>
                        </svg>

                        <svg
                            width="33"
                            height="71"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-951 -451)">
                                <path
                                    id="root36"
                                    className="tooth-root"
                                    d="M0 0 3.22861 3.03086C6.60996 5.17109 11.2814 6.4948 16.4412 6.4948 21.6011 6.4948 26.2725 5.17109 29.654 3.03086L29.9666 2.73738 30 2.89556C29.967 9.5941 24.439 31.8228 23.0487 41.4875 21.6584 51.1521 22.6845 56.651 21.6584 60.8834 20.6324 65.1158 18.7124 67.5819 16.8918 66.8821 15.0713 66.1823 12.8866 64.2494 10.735 56.6843 8.58343 49.1192 5.76976 31.9228 3.98228 21.4917 3.0886 16.2762 1.72315 10.269 0.767327 5.14517Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 982.5 454.5)"
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t19">
                        <svg
                            width="50"
                            height="47"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-1014 -410)">
                                <path
                                    id="tooth27"
                                    className="tooth"
                                    d="M4.0813 3.8203C1.49749 5.86094 0.536793 8.16933 0.106211 12.2507-0.324371 16.3321 0.636222 23.4913 1.49749 28.3087 2.35876 33.1261 2.62376 38.5791 5.27382 41.155 7.92388 43.731 12.5615 43.2961 17.3978 43.7645 22.2342 44.2328 29.5881 46.1732 34.2919 43.9652 38.9958 41.7572 43.7328 36.5718 45.6209 30.5166 47.509 24.4615 47.4097 12.5184 45.6209 7.63406 43.8321 2.74977 38.5651 2.14759 34.8882 1.21088 31.2113 0.274165 26.7725 2.2145 23.5592 2.01378 20.346 1.81305 18.5241-0.127284 15.609 0.00653276 12.694 0.140349 6.6651 1.77965 4.0813 3.8203Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 1062.5 411.5)"
                                />
                            </g>
                        </svg>
                        <svg
                            width="39"
                            height="67"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-1021 -453)">
                                <path
                                    id="root35"
                                    className="tooth-root"
                                    d="M0.0206617 0 0.339747 0.307598C3.63784 2.64153 11.3588 4.27907 20.3576 4.27907 26.3569 4.27907 31.7881 3.5513 35.7196 2.37458L36.9888 1.81109 37 3.52482C36.7715 13.7669 34.6856 35.7531 33.3246 44.2088 31.7691 53.8725 29.03 56.6524 27.6437 57.91 26.2573 59.1676 25.5471 55.494 25.0061 51.7544 24.4651 48.0147 24.8032 40.5684 24.3974 35.4718 23.9916 30.3752 23.9578 23.7231 22.5714 21.1749 21.1851 18.6266 17.6006 18.0309 16.079 20.182 14.5573 22.3331 13.9486 28.0586 13.4414 34.0818 12.9342 40.1051 14.1515 51.7875 13.0356 56.3215 11.9198 60.8554 8.43679 63.3044 6.74605 61.2857 5.0553 59.2669 3.90559 51.6552 2.89115 44.2088 1.8767 36.7625 1.03127 24.5836 0.659364 16.6078 0.473409 12.62 0.126846 8.30943 0 4.61929Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 1059.5 456.5)"
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t18">
                        <svg
                            width="49"
                            height="45"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-1090 -409)">
                                <path
                                    id="tooth26"
                                    className="tooth"
                                    d="M0.604858 16.0737C1.42785 20.3936 3.56746 30.1718 5.54253 34.1567 7.51759 38.1416 7.02388 38.8784 12.4553 39.9834 17.8866 41.0884 32.9301 43.4326 38.1311 40.7871 43.3322 38.1417 42.4763 30.2722 43.6613 24.1106 44.8464 17.949 47.2165 7.56805 45.2414 3.81751 43.2663 0.0669739 35.3002 2.24357 31.8109 1.60737 28.3216 0.971174 27.3341 0 24.3057 0 21.2772 0 16.7346 1.30604 13.6403 1.60737 10.546 1.9087 7.91261 0.703173 5.74003 1.80829 3.56746 2.91331 1.39489 6.02765 0.604858 8.23779-0.185169 10.4479-0.218139 11.7539 0.604858 16.0737Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 1137.5 410.5)"
                                />
                            </g>
                        </svg>

                        <svg
                            width="39"
                            height="70"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-1095 -449)">
                                <path
                                    id="root34"
                                    className="tooth-root"
                                    d="M1.29367 0 5.64669 3.17524C9.65549 5.14679 15.1937 6.36616 21.311 6.36616 24.3697 6.36616 27.2836 6.06137 29.9339 5.51006L36.4899 3.33627 36.872 7.04217C37.0447 10.1031 37.0278 13.8871 36.9099 17.9907 36.674 26.1979 35.7303 42.2423 34.2813 49.6758 32.8322 57.1093 29.9676 61.7848 28.2152 62.592 26.4628 63.3993 24.4408 58.6903 23.7668 54.5194 23.0927 50.3485 24.8788 42.4777 24.1712 37.5668 23.4635 32.656 21.2729 26.5342 19.5205 25.0542 17.7681 23.5742 14.7351 25.4243 13.6567 28.6869 12.5782 31.9496 13.4544 38.6432 13.05 44.6304 12.6456 50.6176 12.4434 61.4821 11.2302 64.6102 10.017 67.7383 7.52319 68.2429 5.77077 63.3993 4.01835 58.5557 1.62558 44.8658 0.715721 35.5487-0.194135 26.2315-0.126734 13.8871 0.311317 7.49623Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 1133.5 451.5)"
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="row t17">
                        <svg
                            width="45"
                            height="44"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-1165 -414)">
                                <path
                                    id="tooth25"
                                    className="tooth"
                                    d="M1.27363 24.249C1.63882 28.4595 1.4064 32.9416 2.46863 35.6581 3.53086 38.3745 2.56827 39.6988 7.64699 40.5477 12.7257 41.3965 27.1985 43.2302 32.9413 40.7514 38.684 38.2726 40.6756 31.4136 42.103 25.6752 43.5303 19.9367 43.1983 10.1915 41.5055 6.32053 39.8126 2.44961 35.0657 3.50217 31.9454 2.44961 28.8251 1.39693 26.2027 0.106626 22.7837 0.00481259 19.3647-0.0970004 14.2859 1.43094 11.4312 1.83841 8.57643 2.24587 7.51421 1.02348 5.65531 2.44961 3.79641 3.87574 1.17399 6.93173 0.277789 10.3952-0.618412 13.8587 0.908434 20.0386 1.27363 24.249Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 1209.5 415.5)"
                                />
                            </g>
                        </svg>

                        <svg
                            width="36"
                            height="64"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g transform="translate(-1169 -457)">
                                <path
                                    id="root33"
                                    className="tooth-root"
                                    d="M0.207834 0 5.25068 0.942789C8.9948 1.48823 13.1111 1.78978 17.432 1.78978 21.7529 1.78978 25.8693 1.48823 29.6133 0.942789L32.9876 0.311922 32.999 0.705074C33.0394 9.18714 31.9796 26.5962 30.7437 34.8075 29.3314 44.1919 25.8825 54.4082 24.4373 53.9757 22.9921 53.5431 23.3206 38.2351 22.0724 32.2118 20.8243 26.1886 18.8207 18.934 16.9485 17.8357 15.0762 16.7375 11.7588 19.6328 10.8391 25.6228 9.91945 31.6128 12.2844 47.9191 11.4304 53.776 10.5764 59.6329 7.52175 64.3252 5.71518 60.7644 3.90871 57.2037 1.51091 42.1952 0.591225 32.4115-0.328459 22.6278 0.0656917 8.31824 0.197075 2.06198Z"
                                    stroke="#624DE3"
                                    stroke-width="1.33333"
                                    stroke-miterlimit="8"
                                    fill="#FFFFFF"
                                    fill-rule="evenodd" onClick={event => handleClickTeeth(event)}
                                    transform="matrix(-1 0 0 1 1204.5 458.5)"
                                />
                            </g>
                        </svg>
                    </div>

                </div>

                <div className="tooth-label">
                    <div className="col">32</div>
                    <div className="col">31</div>
                    <div className="col">30</div>
                    <div className="col">29</div>
                    <div className="col">28</div>
                    <div className="col">27</div>
                    <div className="col">26</div>
                    <div className="col">25</div>
                    <div className="col">24</div>
                    <div className="col">23</div>
                    <div className="col">22</div>
                    <div className="col">21</div>
                    <div className="col">20</div>
                    <div className="col">19</div>
                    <div className="col">18</div>
                    <div className="col">17</div>
                </div>
        </>
    );
};
export default DentalChart;

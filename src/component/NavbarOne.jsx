import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function TextLinkExample() {
    return (

        <div className="navbarOne" style={{ display: "flex", justifyContent: "space-between", color: " white", backgroundColor: "black", position: "relative" }}>
            <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                FREE SHIPPING ON ALL U.S ORDERS OVER $50
            </div>
            <div style={{ display: "flex" }}>
                <div className="dropdown">
                    <button
                        className="btn text-light dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        USD
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            <a className="dropdown-item" href="#">
                                CAD
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                AUD
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                EUR
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                GBP
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button
                        className="btn text-light dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        English
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            <a className="dropdown-item" href="#">
                                French
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Italian
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                German
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Spanish
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button
                        className="btn text-light dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        My Account
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            <a className="dropdown-item" href="#" style={{ display: "flex" }}>
                                <span class="material-symbols-outlined">
                                    login
                                </span>
                                <span>Sign In</span>
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#" style={{ display: "flex" }}>
                                <span class="material-symbols-outlined">
                                    how_to_reg
                                </span>
                                <span>Register</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TextLinkExample;

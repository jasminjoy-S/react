import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Home from '../Home';
import Filter from '../Filter';
import './Menu.css';
import logo from '../images/logo.gif';

function Menu(props) {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="Ultratec Water Treatment" />
                <h1>Ultratec</h1>
                <h5>Pure as nature</h5>
            </div>
            <BrowserRouter className="top-menu-bar">
                <nav>
                    <p>800-ULTRA</p>
                    <ul>
                        <li>Home</li>
                        <li>Technology <span className="down-arrow"></span>
                            <div className="mega-menu-block">
                                <p>Water Technologies</p>
                                <div className="column">
                                    <p>Water Filtration</p>
                                    <p>Water Purification</p>
                                    <p>Water Softener</p>
                                    <p>Water Disinfection</p>
                                    <p>Water Ionizer</p>
                                </div>
                                <div className="column">
                                    <p>Copper Silver Ionization</p>
                                    <p>Water Purification</p>
                                    <p>Water Softener</p>
                                    <p>Water Disinfection</p>
                                    <p>Water Ionizer</p>
                                </div>
                            </div>
                        </li>
                        <li>Industries</li>
                        <li>Parts <span className="down-arrow"></span>

                        </li>
                        <li>Contact</li>
                    </ul>
                    <button className="icon">X</button>
                    <Switch>
                        <Route path='/water-filter-uae' component={Filter} />
                    </Switch>
                </nav>
            </BrowserRouter>
        </div>
    );
}

export default Menu;

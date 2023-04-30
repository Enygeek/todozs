import React from 'react';
import {Link} from 'react-router-dom';


/**
 * @Description
 *     Composant retournant la 'vertical sidebar' de l'application TodoZS.
 * */
const Sidebar = () => {

    {/*const {active} = props*/}

    return (
        <>
            <div className = "vertical-menu">
                <div className="h-100">
                    <div id="sidebar-menu">
                        <ul className="metismenu list-unstyled" id="side-menu">
                            {/* Tableau de bord */}
                            <li>
                                <Link to="/" className="waves-effect active">
                                    <i className="mdi mdi-view-dashboard"></i>
                                    <span>Tableau de bord</span>
                                </Link>
                            </li>

                            <li className="menu-title">Environnement</li>

                            {/* Gestion des utilisateurs */}
                            <li>
                                <Link to="/UsersManagement" className="waves-effect">
                                    <i className="mdi mdi-account-group"></i>
                                    <span>Gestion des utilisateurs</span>
                                </Link>
                            </li>

                            <li className="menu-title">Tickets</li>
                            <li>
                                <Link to="/TagsManagement" className="waves-effect">
                                    <i className="mdi mdi-tag-multiple"></i>
                                    <span>Gestion des tags</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/TicketsManagement" className="waves-effect active">
                                    <i className="mdi mdi-tag-multiple"></i>
                                    <span>Gestion des tickets</span>
                                </Link>
                            </li>

                            <div className="sidebar-section mt-3 mb-0 bg-light">
                                <h6 className="text-center">TodoZS 0.0.1</h6>
                                <h6 className="text-reset text-muted text-center"></h6>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
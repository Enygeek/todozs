import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

/**
 * @Description
 *     Composant retournant le footer de l'application
 * */
const Base = () => {
    return (
        <>
            <footer className="footer">
                <div className="container-fluid text-center">
                    <p><span className="text-center">Copyright ©
                    <a href="#" className="f1-s-1 cl10 hov-link1">TodoZS</a>
                    <i className="mdi mdi-heart text-danger"></i>
                        {/* Date */}
                        <script>
                        document.write(new Date().getFullYear());
                    </script>
                    - Tout droits reservés | Par
                    <a href="" target="_blank" className="">Serou & Zabra</a>

                    </span>
                    </p>
                </div>
            </footer>
            {/* end Footer */}
        </>
    )
}

export default Base;
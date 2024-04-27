import NavMenu from "./NavMenu"
import {Link} from "react-router-dom"
import {FaFacebookSquare,FaInstagramSquare ,FaTwitterSquare} from 'react-icons/fa'

const Header=()=>{
    return (
        <>
        <div className="header">
            <div className="header__logo">
                 <img className="header__logo-img" src="./assets/site/Logo.png" alt="Logo" />
            </div>
            <NavMenu/>
        </div>
        <div className='footer'>
            <div className="footer footer__menu">
                <Link className="footer__menu-a footer___menu-button" to='/contact'>Contact</Link>
                <Link className="footer__menu-a footer___menu-button" to='/register'>S'inscrire</Link>
            </div>
            <div className="footer__network">
                <div>
                    <p>Suivez-nous</p>
                    <Link className="footer__menu-a" to="https://facebook.com"><FaFacebookSquare/></Link>
                    <Link className="footer__menu-a" to="https://instagram.com"><FaInstagramSquare/></Link>
                    <Link className="footer__menu-a" to="https://twitter.com"><FaTwitterSquare/></Link>
                </div>
                <div>Hommage Copyright ©2024</div>
            </div>
        </div>
        </>
    )
}
export default Header
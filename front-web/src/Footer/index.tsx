import './styles.css';
import {ReactComponent as LinkedinIcon} from './linkedin.svg'
import {ReactComponent as InstagramIcon} from './instagram.svg'



const Footer = () => {
    return (
        <footer className='main-footer'>
                App Developer's socials
            <div className='footer-icons'>
                <a href="https://www.linkedin.com/in/hiagodias/" target='_new'>
                    <LinkedinIcon/>
                </a>
                <a href="https://www.instagram.com/hiagoxx/" target='_new'>
                    <InstagramIcon/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
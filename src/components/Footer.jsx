import zuriLogo from '../assets/zuri-logo.svg'
import i4gLogo from '../assets/i4g-logo.svg'

function Footer() {
    return ( 
        <>
            <footer className="space-y-5 sm:space-y-0 border-t py-6 mb-6 sm:flex sm:items-center sm:justify-between">
                <img src={zuriLogo} alt="" />
                <p className="text-gray-500">HNG Internship 9 Frontend Task</p>
                <img src={i4gLogo} alt="" />
            </footer>
        </> 
    );
}

export default Footer;
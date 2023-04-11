import { FiMail } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import "./styleFooter.css"

const FooterContent = () => {

    return (
        <div style={{display: "flex", flexDirection:"column", width: "100%", alignItems:"center", justifyItems: "center", gap:"10px"}}>
            <div style={{display:"flex", flexDirection:"row", gap: "15px" }}>
                <div className='iconFooterContainer'><FiMail size={25} /></div>
                <div className='iconFooterContainer'><BsFillTelephoneFill size={25} /></div>
                <div className='iconFooterContainer'><FaFacebookF size={25} /></div>
            </div>
            <p className='footerTextCopyright'>© 2023 Copyright - San Borondon Rural </p>
        </div>
    )
}

export default FooterContent
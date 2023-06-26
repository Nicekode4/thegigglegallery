import { FooterStyled } from "./footer.styled"

// Social Icons
import InstagramIcon from "../../assets/socialsimg/instagram.png"
import FacebookIcon from "../../assets/socialsimg/facebook.png"
import TwitterIcon from "../../assets/socialsimg/twitter.png"
import PinterestIcon from "../../assets/socialsimg/pinterest.png"
import LinkedinIcon from "../../assets/socialsimg/linkedin.png"
// Payment Icons
import DK from "../../assets/paymentimg/dk.png"
import Visa from "../../assets/paymentimg/visa.png"
import Visa2 from "../../assets/paymentimg/visa2.png"
import MobilePay from "../../assets/paymentimg/mobilep.png"
import MastercCrd from "../../assets/paymentimg/mastercrd.png"

export const Footer = () => {
	return (
        <FooterStyled>
        <div>
			<p className="toptxt">Ⓒ2022 TheGiggleGallery</p>
            <p className="adress">CVR: 12345678</p>
            <p className="adress">Adressevej 123</p>
            <p className="adress">1234 Bynavnhavn</p>
            <p className="tlfn">+45 1234 5678</p>
            <p className="email">info@mychoiceshop.dk</p>
            <p className="findos">Find os her:</p>
            <div className="fIcons">
                <img src={FacebookIcon} alt="Facebook"/>
                <img src={InstagramIcon} alt="Instagram"/>
                <img src={TwitterIcon} alt="Twitter"/>
                <img src={PinterestIcon} alt="Pinterest"/>
                <img src={LinkedinIcon} alt="LinkedIn"/>
            </div>
            <p className="payment">Sikker betaling:</p>
            <div className="pIcons">
                <img src={DK} alt="DK"/>
                <img src={Visa} alt="VISA"/>
                <img src={Visa2} alt="VISA EX"/>
                <img src={MobilePay} alt="MobilePay"/>
                <img src={MastercCrd} alt="MasterCard"/>
            </div>
            <br></br>
            <p className="all">Alle rettigheder forbeholdes</p>
            <p>Bemærk!</p>
            <p className="bottomtxt">Der er først indgået en bindende aftale, når vi har bekræftet din bestilling.</p>
        </div>
        </FooterStyled>
	)
}

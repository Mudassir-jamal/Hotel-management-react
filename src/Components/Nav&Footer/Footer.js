import "../../cssFiles/footer.css"
import SocialIcons from "../SocialIcons"

const Footer = () => {
    return (
        <div className="footer_main">
            <div className="footer_contai">
                <div className="footer_icon">
                <SocialIcons />

                </div>
                <ul>
                    <li><h1>BOOKINGS</h1></li>
                    <li>Hotels</li>
                    <li>Tours</li>

                </ul>
                


                <ul>
                    <li><h1>QUICK LINKS</h1></li>
                    <li>Login</li>
                    <li>Blogs</li>
                    <li>Wonder Clicks</li>
                    <li>Videos</li>
                    <li>Batoota Guide</li>
                    <li>Terms of service</li>

                </ul>


                <ul>
                    <li><h1>CONTACT US</h1></li>
                    <li>jamalmudassir65@gmail.com</li>
                    <li>03012671774</li>
                    <li>+9212768212</li>
                    <li>Videos</li>
                    <li>Batoota Guide</li>
                    <li>Terms of service</li>

                </ul>
            </div>
        </div>
    )
}

export default Footer

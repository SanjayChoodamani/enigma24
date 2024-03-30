import './styles/Contact.css'

const ContactDetails = () => {
    return (
        <div className='contact-details'>
            <h1>CONTACT US</h1>
            <div className='contact-container'>
                <h2>Get in Touch.</h2>
                <div className='contact-card'>
                    <div className='card-left'>
                        <p>Manvith G S</p>
                        <span>Committee Chairperson</span>
                    </div>
                    <div className='card-right'>
                        <a href='tel:+916361034226'>Ph: +91 6361034226</a>
                        <a href='mailto: manvith@malnadtechnicalclub.com'> manvith@malnadtechnicalclub.com</a>
                    </div>
                </div>
                <div className='contact-card'>
                    <div className='card-left'>
                        <p>Vidwath K T</p>
                        <span>Head of Marketing and Publicity</span>
                    </div>
                    <div className='card-right'>
                        <a href='tel:+917019347171'>+91 7019347171</a>
                        <a href='mailto: vidwath@malnadtechnicalclub.com'>vidwath@malnadtechnicalclub.com</a>
                    </div>
                </div>
                <div className='contact-card'>
                    <div className='card-left'>
                        <p>Mayura M L</p>
                        <span>Marketing and Publicity</span>
                    </div>
                    <div className='card-right'>
                        <a href='tel:+918431121367'>+91 8431121367</a>
                        <a href='mailto: mayura@malnadtechnicalclub.com'>mayura@malnadtechnicalclub.com</a>
                    </div>
                </div>
                <div className='contact-card'>
                    <div className='card-left'>
                        <p>Tejas Noojile</p>
                        <span>Event Coordinator</span>
                    </div>
                    <div className='card-right'>
                        <a href='tel:+919742845340'>+91 9742845340</a>
                        <a href='mailto: tejas@malnadtechnicalclub.com'>tejas@malnadtechnicalclub.com</a>
                    </div>
                </div>
                <div className='contact-card'>
                    <div className='card-left'>
                        <p>Mail to:</p>
                    </div>
                    <div className='card-right'>
                        <a href='mailto: mce.techclub@gmail.com'>mce.techclub@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails
import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7d9a4031-8e6e-4a7d-b2ea-8331d4a84f2e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((response) => response.json());

        // const data = await response.json();

        if (response.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", response);
            setResult(response.message);
        }
    };


    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ullam fugiat voluptatum quidem? Quos, omnis illum, ullam cum, quia quidem sequi eaque sint ipsum dolor delectus velit corporis ratione deserunt explicabo! Sapiente maiores soluta inventore magnam assumenda rerum, asperiores quasi!
                </p>
                <ul>
                    <li> <img src={mail_icon} alt="" /> Contact@enquirtforum.dev</li>
                    <li> <img src={phone_icon} alt="" />  +1 123-468-9933</li>
                    <li> <img src={location_icon} alt="" />  77 Massachets hills</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder='Enter your Nmae' required />
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder='Enter your Mobile Number' required />
                    <label>Write your Messages Here</label>
                    <textarea name="message" rows="6" placeholder='Enter your Message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact
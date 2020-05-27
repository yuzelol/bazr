import React, { useState, useEffect } from "react";

import "../styles/contact.css";

import chatIcon from '../images/icons/chat.png'
import emailIcon from '../images/icons/email.png'
import phoneIcon from '../images/icons/phone.png'
import arrowIcon from '../images/icons/arrow.png'

import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";

const ContactChoice = ({option, setOption}) => {
    return (
        <div>
            <div id="feedback-options-container">
            <div className={option === 'email' ? 'active' : ''} onClick={() => setOption('email')}>
                <img src={emailIcon}
                    alt="Email" className="icon email"
                    style={{width: 19, top: 19}} />
                Email
            </div>
            <div className={option === 'chat' ? 'active' : ''} onClick={() => setOption('chat')}>
                <img src={chatIcon}
                    alt="Chat" className="icon chat"
                    style={{top: 17}}/>
                Feedback
            </div>
            <div className={option === 'phone' ? 'active' : ''} onClick={() => setOption('phone')}>
                <img src={phoneIcon}
                    alt="Phone" className="icon phone"
                    style={{top: 17}}/>
                Telephone
            </div>
            </div>
        </div>
    );
}

const ContactContent = ({option}) => {
    return (
        <div style={{height: "90%"}}>
            {
                option === 'email' ?
                <Email /> :
                option === 'chat' ?
                <Chat /> :
                option === 'phone' ?
                <Phone /> : ''
            }
        </div>
    )
}

const Post = () => {

    let arr = []

    for(let i = 0; i < 25; i++) {
        arr.push(
            <div key={i}>
                <div className="post">
                    <div className="user">
                        <div className="name">Yusuf Ali</div>
                        <div className="date">23 / 05 / 2020</div>
                    </div>
                    <div className="message">
                        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                        Vivamus suscipit tortor eget felis porttitor volutpat.
                    </div>
                </div>
                <hr />
            </div>
        )
    }
    return arr
}

const Chat = () => {

    return (
        <div className="contact-container">
            <div id="chat" className="contact-padding">
            <div className="window">
                {Post()}
            </div>

            <div className="reply">
              <div className="message">
                <img src={arrowIcon} alt="Submit" />
                Post your own message
              </div>
            </div>    

            </div>
        </div>
    )
}

const Email = () => {
    return (
        <div className="contact-container">
            <div id="email" className="contact-padding">
                
                <table>
                <tr>
                    <td className="label">Name</td>
                    <td className="text-input"><input type="text" placeholder="Yusuf Ali"></input></td>
                </tr>
                <tr>
                    <td className="label">Email</td>
                    <td className="text-input"><input type="email" placeholder="yusuf.a23@gmail.com"></input></td>
                </tr>
                <tr>
                    <td className="label message">Message</td>
                    <td className="text-input message">
                        <textarea>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada.</textarea>  
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style={{height: 22}}></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <div className="buttons">
                        <div className="btn red">
                        <img src={arrowIcon} alt="Send Email" />
                        Send email
                        </div>
                    </div>

                    </td>
                </tr>
                </table>


            </div>
        </div>
    )
}

const Phone = () => {
    return (
        <div className="contact-container">
            <div id="phone" className="contact-padding">
                <div className="text">
                Please contact us on the following number <span>0800 911 2468</span> and we'll get back to you as soon as we can.<br/><br/>
                Please be advised our operators are very busy due to COVID-19, we recommend that you send us an e-mail or contact us on social media. Many thanks.
                </div>
            </div>
        </div>
    )
}

const Info = () => {
    return (
        <div id="info-container">
            <span className="header">Contact information</span>
            <hr />
            <div style={{display: 'flex'}}>

                <div style={{flexGrow: 1}}>
                    15 Perch Street<br/>London<br/>E8 2EG
                </div>
                <div style={{textAlign: 'right'}}>
                    yusuf.a23@gmail.com<br/>07930 683 299
                </div>    
            </div>
        </div>
    )
}

const Contact = ({basket}) => {

    const [option, setOption] = useState('email')

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    const data = {
        type:   'Contact',
        header: "We'd love to hear back from you...",
        info: Info(),
        button: false,
    };

  return (
    <div>
      <Header basket={basket}/>
      <Body data={data}>
        <ContactChoice option={option} setOption={setOption} />
        <ContactContent option={option} />
      </Body>
      <Footer />
    </div>
  );
};

export default Contact;

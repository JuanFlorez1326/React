import './Email.css'
import React from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

import facebook from '../../Images/Facebook.png'
import linkedin from '../../Images/Linkedin.png'
import twitter from '../../Images/Twitter.png'
import dribbble from '../../Images/Dribbble.png'

export const Email = () => {

    const SendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_wfi443e','template_o5dmy7d',e.target,'P6kspBKbsOAr4yOuz')
        .then(response => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'The email was sent correctly',
                showConfirmButton: false,
                timer: 1500
            })
            console.log(response);
            console.log('SUCCESS!', response.status, response.text)
        })
        .catch(error => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'There was a problem sending the email.',
                showConfirmButton: false,
                timer: 1500
            });
            console.log(error);
        })
    }

    return (
        <div>
            <header>
                <h1>Sending Emails</h1>
            </header>
            <main className='divInfo'>
                <form className='formEmail' onSubmit={ SendEmail }>
                    <p>Name</p>
                    <input className='inputName' type="text"  name='userName'/>

                    <p>From Email</p>
                    <input className='inputEmail' type="text" name='userFromEmail' />

                    <p>To Email</p>
                    <input className='inputEmail' type="text" name='userToEmail' />

                    <p>Message</p>
                    <textarea className='txtMessage' name='userMessage' cols="30" rows="10"></textarea><br/>

                    <button className='btnSend'>Send</button>
                </form>
            </main>
            <footer>
                <h3>Sending Emails &copy; 2022. Juan Pablo, All Right Reserved.</h3>
                <div className="redes">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><img src={facebook} alt="Facebook"/></a>
                    <a href="https://co.linkedin.com" target="_blank" rel="noopener noreferrer" ><img src={linkedin} alt="LinkedIn"/></a>
                    <a href="https://twitter.com/?lang=es" target="_blank"  rel="noopener noreferrer" ><img src={twitter} alt="Twitter"/></a>
                    <a href="https://dribbble.com" target="_blank"  rel="noopener noreferrer"><img src={dribbble} alt="Dribbble"/></a>
                </div>
            </footer>
        </div>
    )
}
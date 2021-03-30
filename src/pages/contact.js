import React from "react"

import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactForm = styled.div`

  
.contact-form {
  background: #ffff;
  border-radius: 0.25rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;
  width: 90vw;
  max-width: 35rem;

}
.contact-form:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.contact-form h3 {
  padding-top: 1.25rem;
  color:  #474747;
  font-size: 2em;
 
}
.form-group {
  padding: 1rem 1.5rem;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  margin-bottom: 1.25rem;
  background: #f2f2f2;
  border-radius: 0.25rem;
  /* text-transform: uppercase; */
  letter-spacing: 0.1rem;
  outline: none;
}
.form-control::placeholder {
 
  color: #6888;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

.flex{
  display: flex;
  justify-content: space-between;
  
  input{
    width: 48%;
   
  }
  @media(max-width: 800px){
        display: block;
        input{
          width: 100%;
        }
    }
}
.submit-btn {
  display: block;
  width: 100%;
  border: none;
  background-color: #6698FF;
  color: #ffff;
  font-size: 14px;
  text-transform: uppercase;
  padding: 1rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  transition: all 0.3s linear;
}
.submit-btn:hover {
  background-color: #175cec;
  
}

`;

const Contact = () => (
  <Layout>
    <SEO title='Contacta con nosotros'/>
    <div className='section' style={{margin: '50px 0 50px 0'}}>
      <ContactForm >
        <article className="contact-form">
            <h3>Solicita una demo</h3>
            <form action="https://formspree.io/f/xqkwzvea" method="POST">
              <div className="form-group">
                <div className='flex'>
                  <input type="text" name='Nombre' placeholder='Nombre' className='form-control' />
                  <input type="text" name='Teléfono' placeholder='Teléfono' className='form-control' />
                </div>
                
                <input type="email" name='email' placeholder='Email' className='form-control'/>
                <input type="text" name='empresa' placeholder='Empresa' className='form-control'/>
                <textarea name='message' rows='5' placeholder='Mensaje' className='form-control'></textarea>
              </div>
              <button type='submit' className='submit-btn btn'>Enviar</button>
            </form>
          </article>
    
      </ContactForm>
    </div>
  </Layout>
)

export default Contact

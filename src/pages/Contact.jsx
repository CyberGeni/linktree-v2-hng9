import Footer from '../components/Footer'

function Contact() {
    return ( 
        <>
            <div>
                <main>
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                    <form action="">
                        <div>
                            <label htmlFor="">First name</label>
                            <input type="text" placeholder='Enter your first name'/>
                        </div>
                        <div>
                            <label htmlFor="">Last name</label>
                            <input type="text" placeholder='Enter your last name'/>
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='yourname@email.com'/>
                        </div>
                        <div>
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <label htmlFor="">You gree to providing your data to {name} who may contact you.</label>
                            <input type="checkbox" />
                        </div>
                        <button type='submit'>Send message</button>
                    </form>
                </main>
                <Footer />
            </div>
        </>
     );
}

export default Contact;
import Footer from '../components/Footer'
import FormInput from '../components/FormInput'
import { useState } from "react";
function Contact() {
    const [username, setUsername] = useState('')
    console.log(username)
    return ( 
        <>
            <div className="px-6 max-w-2xl sm:max-w-3xl mx-auto font-['Inter']">
                <main className='max-w-2xl space-y-3 my-2 mb-16'>
                    <h1 className="mx-auto font-bold text-2xl mt-12">Contact Me</h1>
                    <p className=''>Hi there, contact me to ask me about anything you have in mind.</p>
                    <form action="" className="max-w-2xl space-y-3 my-2 mb-16">
                        <div className='space-y-3 sm:flex sm:space-y-0 sm:w-full sm:space-x-3'>
                            <FormInput placeholder="Enter your first name" setUsername={setUsername} />
                            <FormInput placeholder="Enter your last name" />
                        </div>
                        
                        <FormInput placeholder="yourname@email.com" />
                        <FormInput placeholder="" />
                        <FormInput placeholder="" />
                        {/* <div>
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
                        </div> */}
                        <button type='submit' className='bg-blue-600 text-white w-full rounded-lg py-3'>Send message</button>
                    </form>
                </main>
                <Footer />
            </div>
                
        </>
     );
}

export default Contact;
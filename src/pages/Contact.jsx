import Footer from '../components/Footer'
import FormInput from '../components/FormInput'
import { useState } from "react";
function Contact() {
    const [username, setUsername] = useState('')
    const name = 'Treasure'
    console.log(username)
    return ( 
        <>
            <div className="px-6 max-w-2xl sm:max-w-3xl mx-auto font-['Inter']">
                <main className='max-w-2xl space-y-3 my-2 mb-16 mx-auto'>
                    <h1 className="mx-auto font-bold text-2xl md:text-3xl mt-12">Contact Me</h1>
                    <p className=''>Hi there, contact me to ask me about anything you have in mind.</p>
                    <form action="" className="max-w-2xl space-y-2 my-2 mb-16">
                        <div className='space-y-3 sm:flex sm:space-y-0 sm:w-full sm:space-x-4'>
                            <FormInput placeholder="Enter your first name" setUsername={setUsername} />
                            <FormInput placeholder="Enter your last name" />
                        </div>
                        
                        <FormInput type="email" placeholder="yourname@email.com" />
                        <div>
                            <label htmlFor="">Message</label>
                            <textarea
                                noresize 
                                name="" 
                                id="" 
                                cols="10" 
                                rows="5"
                                placeholder="Send me a message and I'll reply you as soon as possible..."
                                className="flex border border-gray-400 rounded shadow px-3 py-2 w-full"
                            >
                            </textarea>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className='focus:ring h-fit rounded' />
                            <label htmlFor="">You gree to providing your data to {name} who may contact you.</label>
                        </div>
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
                         */}
                        <button type='submit' className='bg-blue-600 hover:bg-blue-700 focus:ring-2 disabled:bg-blue-200 transition-all text-white w-full rounded-lg py-3'>Send message</button>
                    </form>
                </main>
                <Footer />
            </div>
                
        </>
     );
}

export default Contact;
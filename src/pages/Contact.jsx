import Footer from '../components/Footer'
import FormInput from '../components/FormInput'
import { useState } from "react";

function Contact() {
    const name = 'Treasure'

    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
      });
    
      const inputs = [
        {
          id: 1,
          id: "first_name",
          name: "firstName",
          type: "text",
          placeholder: "Enter your first name",
          errorMessage:
            "Please enter your first name.",
          label: "First name",
          
          required: true,
        },
        {
            id: 2,
            id: "last_name",
            name: "lastName",
            type: "text",
            placeholder: "Enter your last name",
            errorMessage:
              "Please enter your last name.",
            label: "Last name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
          },
        {
          id: 3,
          id: "email",
          name: "email",
          type: "email",
          placeholder: "yourname@email.com",
          errorMessage: "This email is not valid.",
          label: "Email",
          required: true,
        },
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
    return ( 
        <>
            <div className="px-6 max-w-2xl sm:max-w-3xl mx-auto font-['Inter']">
                <main className='max-w-2xl space-y-3 my-2 mb-16 mx-auto'>
                    <h1 className="mx-auto font-bold text-2xl md:text-3xl mt-12">Contact Me</h1>
                    <p className=''>Hi there, contact me to ask me about anything you have in mind.</p>
                    <form onSubmit={handleSubmit} className="max-w-2xl space-y-2 my-2 mb-16">
                        {/* <div className='space-y-3 sm:flex sm:space-y-0 sm:w-full sm:space-x-4'>
                            <FormInput placeholder="Enter your first name" setUsername={setUsername} />
                            <FormInput placeholder="Enter your last name" />
                        </div> */}
                        {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                        ))}
                        {/* textarea */}
                        <div>
                            <label htmlFor="">Message</label>
                            <textarea
                                required
                                id="message" 
                                cols="10" 
                                rows="5"
                                placeholder="Send me a message and I'll reply you as soon as possible..."
                                className="flex border border-gray-400 rounded shadow px-3 py-2 w-full"
                            >
                            </textarea>
                        </div>
                        {/* checkbbox */}
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className='focus:ring h-fit rounded' />
                            <label htmlFor="">You agree to providing your data to {name} who may contact you.</label>
                        </div>
                        <button id='btn__submit' type='submit' className='bg-blue-600 hover:bg-blue-700 focus:ring-2 disabled:bg-blue-200 transition-all text-white w-full rounded-lg py-3'>Send message</button>
                    </form>
                </main>
                <Footer />
            </div>
        </>
     );
}

export default Contact;
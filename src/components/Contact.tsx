import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'


const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  //   Form validation
  const [nameMiss, setNameMiss] = useState(false);
  const [emailMiss, setEmailMiss] = useState(false);
  const [subjectMiss, setSubjectMiss] = useState(false);
  const [messageMiss, setMessageMiss] = useState(false);

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send Message");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let isValid = true;
    setNameMiss(false);
    setEmailMiss(false);
    setSubjectMiss(false);
    setMessageMiss(false);

    if (name.length <= 0) {
      setNameMiss(true);
      isValid = false;
    }
    if (email.length <= 0) {
      setEmailMiss(true);
      isValid = false;
    }
    if (subject.length <= 0) {
      setSubjectMiss(true);
      isValid = false;
    }
    if (message.length <= 0) {
      setMessageMiss(true);
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending...");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send Message");

        // Reset form fields
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send Message");
      // Reset form fields
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setSubject("");
    }
  };

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='flex flex-col w-[85%] 2xl:w-[75%] m-auto py-16 justify-start items-center'>
        <div className='mt-4 mb-3 underline underline-offset-[12px] self-start'>
          <h1>Contact Me</h1>
        </div>
        <div className='mt-10 md:mt-20'>
          <div className='text-center'>
            <h2>Let's Get In Touch</h2>
          </div>
          <div className='p-4'>
            <form
              onSubmit={handleSubmit}
              className='text-black'
            >
              <div>
                {nameMiss && (
                  <p className="text-red-500">Name cannot be empty.</p>
                )}
                <input
                  type='text'
                  placeholder='Name' 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full border-2 border-gray-300 rounded-lg p-3 my-1 md:my-4 focus:outline-none focus:border-blue-500'
                />
              </div>
              <div>
                {emailMiss && (
                  <p className="text-red-500">Email address cannot be empty.</p>
                )}
                <input
                  type='email'
                  placeholder='Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full border-2 border-gray-300 rounded-lg p-3 my-1 md:my-4 focus:outline-none focus:border-blue-500'
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Phone Number (optional)'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className='w-full border-2 border-gray-300 rounded-lg p-3 my-1 md:my-4 focus:outline-none focus:border-blue-500'
                />
              </div>
              <div>
                {subjectMiss && (
                  <p className="text-red-500">Subject cannot be empty.</p>
                )}
                <input
                  type='text'
                  placeholder='Subject'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className='w-full border-2 border-gray-300 rounded-lg p-3 my-1 md:my-4 focus:outline-none focus:border-blue-500'
                />
              </div>
              <div>
                {messageMiss && (
                  <p className="text-red-500">Message cannot be empty.</p>
                )}
                <textarea
                placeholder='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className='w-full border-2 border-gray-300 rounded-lg p-3 my-1 md:my-4 focus:outline-none focus:border-blue-500'
              />
              </div>
              <button
                type='submit'
                className='w-full p-3 rounded-xl uppercase bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl dark:focus:ring-green-800 text-gray-950 font-semibold text-lg mt-2 md:mt-4'
              >
                {buttonText}
              </button>
            </form>
            <div className="text-left">
              {showSuccessMessage && (
                <p className="text-green-500 font-semibold text-sm my-2">
                  Thank you! Your Message has been delivered.
                </p>
              )}
              {showFailureMessage && (
                <p className="text-red-500">
                  Oops! Something went wrong, please try again.
                </p>
              )}
            </div>
          </div>
          <div className='flex items-center justify-evenly mt-4 md:mt-12 mb-4 mx-auto md:w-[60%]'>           
            <Link href='https://www.linkedin.com/in/tank-sun/' target="_blank" rel="noopener noreferrer">
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                <FaLinkedinIn size={25}/>
              </div>
            </Link>
            <Link href='https://github.com/Tank-Sun' target="_blank" rel="noopener noreferrer">
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                <FaGithub size={25}/>
              </div>
            </Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact
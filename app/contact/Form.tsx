"use client";
import { FaFacebookSquare } from "react-icons/fa";
import "./contact.css";
import { FaSquareYoutube } from "react-icons/fa6";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";

//ChatGPT help debug the code
//Using Codeium to indentify and fix errors


export default function Form() {
  // Refs are used to access DOM elements directly; here, `form` holds the contact form reference.
  const form = useRef<HTMLFormElement | null>(null);

  // State to manage the feedback message and whether the message indicates an error.
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  // Handles sending the email via emailjs when the form is submitted.
  // Provides feedback on success or failure and clears the form on successful submission.
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      try {
        await emailjs.sendForm(
          "service_fzlkhuh",
          "template_qynz1rw",
          form.current,
          "CqOt_i2a7x9ig0tV6"
        );
        setMessage("Message sent successfully!");
        setIsError(false); // Reset error flag

        // Clear form fields
        form.current.reset();

        // Automatically hide the success message after 5 seconds
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      } catch (error) {
        console.error("Email sending error:", error);
        setMessage("Error sending message. Please try again.");
        setIsError(true); // Set error flag

        // Automatically hide the success message after 5 seconds
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      }
    }
  };

  // Adds a CSS class to the parent container for focused input elements.
  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.target.parentElement?.classList.add("focus");
  };

  // Removes the CSS class from the parent container if the input loses focus and has no value.
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!e.target.value) {
      e.target.parentElement?.classList.remove("focus");
    }
  };

  // Returns the JSX for the contact form, including a social media section and an email form.
  // Integrates various state and event handlers for interactivity and visual feedback.
  return (
    <section className="w-full">
      <div className="container-contact" id="contact">
        <span className="big-circle"></span>

        {/* Form container, dividing the layout into contact info and form */}
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let&apos;s get in touch</h3>
            <p className="text">
              Ready to build your website? Contact us today! Our experts are
              here to guide you every step of the way, from planning to launch.
              Reach out now to start bringing your vision to life!
            </p>

            <div className="info">
              {/* <div className="information">
                <i className="fas fa-map-marker-alt"></i>
                <p>Davao, Philippines</p>
              </div> */}
              <div className="information">
                <i className="fas fa-envelope"></i>
                <p>support@shradertechnologies.com</p>
              </div>
              {/* <div className="information">
                <i className="fas fa-phone"></i>&nbsp&nbsp
                <p>123-456-789</p>
              </div> */}
            </div>

            {/* Social media links */}
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <Link href="https://www.facebook.com/shradertech/">
                  <FaFacebookSquare className="h-8 w-8 text-blue-600" />
                </Link>
                <Link href="hhttps://youtube.com/@shradertechnologies?si=sFJsVEXKMER252PV">
                  <FaSquareYoutube className="h-8 w-8 text-red-600" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right side: Contact form */}
          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            {/* Form element with reference, submission handling, and auto-complete */}
            <form
              id="contact-form"
              ref={form}
              onSubmit={sendEmail}
              autoComplete="on"
            >
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <label htmlFor="">Name</label>
                <span>Name</span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="input"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                ></textarea>
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />

              {/* Display success or error message based on form submission */}
              {message && (
                <p
                  id="response-message"
                  className={isError ? "error-message" : "success-message"}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

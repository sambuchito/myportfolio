import '../assets/css/base.css';
import "../assets/css/contact.css";

import { useContext, useRef, useState } from 'react';
import { SkinContext } from '../context/SkinContext';
import emailjs from "emailjs-com";



export default function ContactForm() {
  const { darkMode } = useContext(SkinContext);
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "service_vg62wp4",
        "template_miiax7q",
        formRef.current,
        "OOoer30-cietTJqR9"
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatusMessage("❌ Failed to send message. Try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
  <section className={`contact ${darkMode ? "dark" : ""}`} id="contact-me">
      <h2>About contacting me</h2>
      <div className="contact-form-wrapper">
        <div className="contact-form">
          <form ref={formRef} onSubmit={sendEmail} autocomplete="on">
            <div className="form-control">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Write your name"
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                name="sender-email"
                placeholder="Enter your email"
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label for="select-reason">Select reason</label>
              <select id="reason" name="reason" required>
                <option value="testing">Testing</option>
                <option value="editing">Editing</option>
                <option value="development">Web Development</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-control">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                cols="60"
                rows="10"
                placeholder="Write your message"
                className="input-field"
                required
              ></textarea>
            </div>
            <div className="button-area">
              <input
              id="submit-btn"
              type="submit"
              value={isSending ? "Sending..." : "Send"}
              className="submit-btn"
              disabled={isSending}
              />
              <input
              id="reset-btn"
              type="reset"
              onclick="alert('Watch out, this will clear everything')"
              value="Reset"
              className="reset-btn"
              />
            </div>
          </form>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
      </div>
    </section>
    )
  }
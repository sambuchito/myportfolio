import '../assets/css/base.css';
import "../assets/css/contact.css";

export default function ContactForm() {

  return (
<section className="contact" id="contact-me">
      <h2>About contacting me</h2>
      <div className="contact-form-wrapper">
        <div className="contact-form">
          <form action="" autocomplete="on" method="post">
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
              value="Send"
              className="submit-btn"
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
        </div>
      </div>
    </section>
    )
  }
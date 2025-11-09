import React from 'react'
import'./Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {
    const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "27bf8a15-092b-4745-8585-b3a5d1bed6bf"); //  747e6681-c4b6-4455-b16f-4492eb429cb7

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(""); // Clear the "Sending..." message on success
      Swal.fire({
        title: "Success!",
        text: "message sent successfully",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
   <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className="field" placeholder='Enter your name' name='name' required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="email" className="field" placeholder='Enter your email' name='email'
           required />
        </div>
        <div className="input-box">
          <label>Phone Number</label>
          <input type="number" className="field" placeholder='Enter your Phone number' name='Phone_number'
           required />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea name="message"  className="field mess" placeholder='Enter your message' required></textarea>
        </div>
        <button type="submit" className="btn-five">Send Message</button>
      </form>
      <span>{result}</span>
    </section>
  )
}     

export default Contact




// make 
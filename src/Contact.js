import React from "react";

function Contact() {
  return (
    <div className="flex f-wrap f-around">
      <div className="contact-type">
        <div className="circle light-green darken-4">
            <p>icon</p>
        </div>
        <h6>LinkedIn</h6>
      </div>
      <div className="contact-type">
        <div className="circle light-green darken-4">
            <p>icon</p>
        </div>
        <h6>GitHub</h6>
      </div>
      <div className="contact-type">
        <div className="circle light-green darken-4">
            <p>icon</p>
        </div>
        <h6>Email</h6>
      </div>
    </div>
  );
}

export default Contact;

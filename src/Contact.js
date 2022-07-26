import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="flex f-wrap f-around mt-lg">
      <div className="contact-type">
        <a target="_blank" href="https://www.linkedin.com/in/cecilia-rizzo/">
          <div className="circle light-green darken-4">
            <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
          </div>
        </a>
        <h4>LinkedIn</h4>
      </div>
      <div className="contact-type">
        <a target="_blank" href="https://github.com/crizzo16">
          <div className="circle light-green darken-4">
            <FontAwesomeIcon className="contact-icon" icon={faGithub} />
          </div>
        </a>
        <h4>GitHub</h4>
      </div>
      <div className="contact-type">
        <a target="_blank" href="mailto:cecilia.rizzo16@gmail.com">
          <div className="circle light-green darken-4">
          <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
          </div>
        </a>
        <h4>Email</h4>
      </div>
    </div>
  );
}

export default Contact;

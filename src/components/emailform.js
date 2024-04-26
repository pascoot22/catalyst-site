import React, { useState } from 'react';

function EmailForm() {
  const [emailBody, setEmailBody] = useState('');
  const [senderEmail, setSenderEmail] = useState('');

  const handleEmailBodyChange = (event) => {
    setEmailBody(event.target.value);
  };

  const handleSenderEmailChange = (event) => {
    setSenderEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailContent = `Sender's Email: ${senderEmail}\n\n${emailBody}`;
    alert(`Sending email:\n\n${emailContent}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={emailBody}
        onChange={handleEmailBodyChange}
        placeholder="Enter your email body"
      />
      <input
        type="email"
        value={senderEmail}
        onChange={handleSenderEmailChange}
        placeholder="Your email address"
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default EmailForm;

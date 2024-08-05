import React from 'react';

const MailtoLink = ({ email, subject, body, children }) => {
  let queryParams = subject || body ? '?' : '';
  if (subject) queryParams += `subject=${encodeURIComponent(subject)}`;
  if (body) queryParams += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return (
    <a href={`mailto:${email}${queryParams}`} target="_top">
      {children}
    </a>
  );
};

export default MailtoLink;
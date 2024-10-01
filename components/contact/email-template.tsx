import * as React from "react";

interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplateContact: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
}) => (
  <div>
    <h1>Demande de contact</h1>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);

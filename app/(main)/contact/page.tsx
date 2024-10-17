import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import { cn } from "@/lib/utils";

const Contact = () => {
  return (
    <div className={cn("h-screen w-screen flex items-center justify-center")}>
      <ContactForm />
    </div>
  );
};

export default Contact;

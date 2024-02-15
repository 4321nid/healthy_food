import React, { useState } from "react";
import s from "./Contact.module.css";
import ButtonOrange from "../../assets/button/ButtonOrange";

interface EmailFormProps {
  onSubmit: (email: string) => void;
}

const Contact: React.FC<EmailFormProps> = ({ onSubmit = () => {} }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    setEmail(""); // Очистить поле после отправки
  };
  return (
    <div className="contact flex justify-center mb-32">
      <form onSubmit={handleSubmit} className="flex">
        <label>
          <input
            className={s.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your message"
          />
        </label>
        <ButtonOrange />
      </form>
    </div>
  );
};

export default Contact;

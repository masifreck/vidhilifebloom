import { FiMessageCircle } from 'react-icons/fi';

//import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919090207519"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating"
      aria-label="Chat with us on WhatsApp"
    >
      <FiMessageCircle />

      <span>
        WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
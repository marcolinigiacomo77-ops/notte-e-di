'use client';

import { useState } from 'react';

const FACEBOOK_URL = 'https://www.facebook.com/NotteedÌ-Macerata-Notte-e-DÌ-intimo-100063919485863/';
const WHATSAPP_URL = 'https://wa.me/3483136509?text=Ciao%20Notte%26Di%20vorrei%20informazioni';

export default function SocialSticky() {
  const [hovered, setHovered] = useState(null);

  const getStyle = (index) => {
    if (hovered !== null && hovered !== index) {
      return { opacity: 0.6, transform: 'scale(0.7)' };
    }
    return {};
  };

  return (
    <div className="social-sticky">
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button facebook"
        title="Visita il nostro Facebook"
        style={getStyle(0)}
        onMouseEnter={() => setHovered(0)}
        onMouseLeave={() => setHovered(null)}
      >
        <span>FACEBOOK</span>
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button whatsapp"
        title="Contattaci su WhatsApp"
        style={getStyle(1)}
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
      >
        <span>WHATSAPP</span>
      </a>
    </div>
  );
}

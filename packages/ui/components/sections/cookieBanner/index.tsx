"use client";

import { useEffect, useState } from "react";

import { LinkVariantsClassNames } from "../../ui/link";
import { LinkVariant } from "../../ui/link/types";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-[60] space-y-5 bg-black p-10 text-white">
        <p>
          We use cookies to improve your experience. By using our site, you
          agree to our use of cookies.
        </p>
        <button
          className={LinkVariantsClassNames[LinkVariant.Primary]}
          onClick={handleAccept}
        >
          Accept
        </button>
      </div>
      <div className="fixed inset-0 z-50 bg-black/50" aria-hidden="true" />
    </>
  );
}

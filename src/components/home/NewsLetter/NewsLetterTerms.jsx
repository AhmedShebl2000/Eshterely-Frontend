import React from "react";

export default function NewsLetterTerms() {
  return (
    <div>
      <p className="text-sm text-gray-600">
        I accept that Bang & Olufsen can contact me via digital communication,
        including email with personalized marketing of our products and events
        in Bang & Olufsen shops. Unsubscribing is possible at any time. Details
        on how personal data is processed:{" "}
        <a href="#" className="underline hover:text-black">
          privacy policy
        </a>
        .
      </p>
      <p className="text-sm text-gray-600 mt-6">
        This site is protected by reCAPTCHA and the{" "}
        <a href="#" className="underline hover:text-black">
          Google Privacy Policy
        </a>{" "}
        and
        <a href="#" className="underline hover:text-black">
          {" "}
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </div>
  );
}

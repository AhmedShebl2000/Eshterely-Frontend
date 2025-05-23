import React from "react";

export default function NewsLetterHeader() {
  return (
    <div>
      <span className="text-sm tracking-wider text-left">
        THE HOUSE OF BANG & OLUFSEN
      </span>
      <h2 className="text-2xl lg:text-3xl font-semibold mt-4 text-left">
        Join our global community for exclusive benefits and news about
      </h2>
      <ul className="mt-6 space-y-2 text-left">
        <li className="flex items-left justify-start gap-2">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>New & limited products</span>
        </li>
        <li className="flex items-left justify-left lg:justify-start gap-2">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Exclusive events</span>
        </li>
        <li className="flex items-left justify-left lg:justify-start gap-2">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Personalised content</span>
        </li>
        <li className="flex items-left justify-left lg:justify-start gap-2">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Special offers</span>
        </li>
        <li className="flex items-left justify-left lg:justify-start gap-2">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Behind the scenes</span>
        </li>
      </ul>
    </div>
  );
}

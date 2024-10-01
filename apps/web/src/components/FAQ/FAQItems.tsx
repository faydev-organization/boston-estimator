// components/FAQItem.js
'use client';
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white py-4 mb-4">
      {' '}
      {/* Added mb-4 for bottom margin */}
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white font-semibold">{question}</span>
        <span className="text-white">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-300">{answer}</p>}
    </div>
  );
};

export default FAQItem;

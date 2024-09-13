// components/FAQItem.js
import React, { useState } from 'react';

interface TermItemsProps {
  section: string;
  content: string;
}

const TermItems: React.FC<TermItemsProps> = ({ section, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-green-700 font-semibold">{section}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{content}</p>}
    </div>
  );
};

export default TermItems;

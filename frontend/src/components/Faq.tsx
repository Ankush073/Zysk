import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time without penalties."
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional information to your invoices."
    },
    {
      question: "How does billing work?",
      answer: "We offer monthly and annual billing options."
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your email through your account settings."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Frequently asked questions</h2>
        <p className="text-gray-600">Everything you need to know about the product and billing.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg"
          >
            <button
              className="w-full px-4 py-3 text-left flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-3 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
              />
            ))}
          </div>
        </div>
        <h3 className="font-medium mb-2">Still have questions?</h3>
        <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 mx-auto">
          <MessageCircle className="w-4 h-4" />
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
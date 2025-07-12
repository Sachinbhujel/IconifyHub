import React, { useState } from "react";
import "./App.css";

const faqData = [
    {
        question: "Are the icons free to use?",
        answer: "Yes! Most icons on IconifyHub are free for personal and commercial use. Please check individual licenses for specific details.",
    },
    {
        question: "Can I customize the icons before downloading?",
        answer: "Absolutely! You can change size, color, and stroke style before downloading any icon.",
    },
    {
        question: "How do I upload my own icons?",
        answer: "You can upload your icon SVGs through the Upload page after creating an account.",
    },
    {
        question: "Is there a limit on downloads?",
        answer: "No limits! Download as many icons as you need for your projects.",
    },
    {
        question: "Can I contribute to the icon library?",
        answer: "Yes, we welcome community contributions! Please follow our guidelines on the Upload page.",
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="faq">
            <div className="faq-container">
                <h2>Frequently Asked Questions</h2>
                <p className="desc">Have questions? We've got answers.</p>

                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            className={`faq-item ${
                                index === activeIndex ? "active" : ""
                            }`}
                            key={index}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                {item.question}
                                <span className="toggle-icon">
                                    {index === activeIndex ? "−" : "+"}
                                </span>
                            </div>
                            {index === activeIndex && (
                                <div className="faq-answer">{item.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;

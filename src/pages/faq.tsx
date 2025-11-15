import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "چند روز قبل از پرواز، بلیط هواپیما را بخریم؟",
      answer: "بهترین زمان خرید بلیط 2 تا 6 هفته قبل از پرواز است.",
    },
    {
      question: "در هر پرواز میزان بار مجاز چقدر است؟",
      answer:
        "بار مجاز بستگی به کلاس پرواز و ایرلاین دارد، معمولاً بین 20 تا 30 کیلوگرم است.",
    },
    {
      question: "نرخ بلیط هواپیما برای کودکان زیر 2 سال چگونه است؟",
      answer:
        "کودکان زیر 2 سال معمولاً 10% تا 20% قیمت بلیط بزرگسال را پرداخت می‌کنند.",
    },
    {
      question: "آیا پس از خرید اینترنتی، امکان استرداد بلیط وجود دارد؟",
      answer:
        "بله، با توجه به قوانین ایرلاین و نوع بلیط، امکان استرداد وجود دارد.",
    },
    {
      question: "آیا پس از خرید، امکان تغییر نام و نام خانوادگی وجود دارد؟",
      answer:
        "تغییر نام معمولاً امکان‌پذیر نیست، اما تصحیح اشتباهات تایپی با ارائه مدارک ممکن است.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">پرسش‌های متداول</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '👥',
      title: 'مشترکات علی‌بابا',
      items: ['رفاهیات کارکنان', 'هدایای سازمانی', 'جوان و نويسه مشتركان']
    },
    {
      icon: '🎯',
      title: 'سایر خدمات علی‌بابا',
      items: ['رزرو هتل', 'بلیط قطار', 'تورهای داخلی', 'بیمه مسافرتی']
    },
    {
      icon: '🏆',
      title: 'همسفر امین لحظات سفر',
      items: ['پشتیبانی ۲۴ ساعته', 'ارائه تمامی خدمات سفر', 'رتبه یک در خدمات گردشگری']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">خدمات علی‌بابا</h2>
          <p className="section-subtitle">تمام خدمات سفر در یک پلتفرم</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-items">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-actions">
      
        </div>
      </div>
    </section>
  );
};

export default Services;
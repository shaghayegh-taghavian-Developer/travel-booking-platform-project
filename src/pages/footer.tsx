import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h4>📞 خدمات مشتریان</h4>
        <p>پشتیبانی ۲۴ ساعته</p>
        <p className="phone-number">۴۳۹۳۰۰۰۰-۰۲۱</p>
        <p>چت آنلاین</p>
        <p>پاسخگویی سریع</p>
      </div>
      
      <div className="footer-section">
        <h4>✨ خدمات مسافرتی</h4>
        <p>پرواز داخلی و خارجی</p>
        <p>رزرو هتل و اقامتگاه</p>
        <p>تور و چارتر</p>
        <p>بلیط قطار و اتوبوس</p>
      </div>
      
      <div className="footer-section">
        <h4>🏢 اطلاعات بیشتر</h4>
        <p>وبلاگ و مقالات</p>
        <p>قوانین و مقررات</p>
        <p>فرصت‌های شغلی</p>
        <p>درباره ما</p>
      </div>
    </div>
  );
}

export default Footer;

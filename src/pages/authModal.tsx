import React, { useState } from "react";
import "./authModal.css";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(isLogin ? "ورود موفقیت‌آمیز بود!" : "ثبت‌نام موفقیت‌آمیز بود!");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <h2>{isLogin ? "ورود به حساب کاربری" : "ثبت‌نام جدید"}</h2>
        </div>

        <div className="tabs">
          <button
            className={`tab ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            ورود
          </button>
          <button
            className={`tab ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            ثبت‌نام
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label>نام و نام خانوادگی</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="نام کامل خود را وارد کنید"
                required={!isLogin}
              />
            </div>
          )}

          <div className="form-group">
            <label>ایمیل</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="form-group">
            <label>رمز عبور</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>شماره موبایل</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0912xxxXXXX"
                required={!isLogin}
              />
            </div>
          )}

          {isLogin && (
            <div className="form-options">
              <label className="checkbox">
                <input type="checkbox" />
                مرا به خاطر بسپار
              </label>
              <a href="#forgot" className="forgot-link">
                رمز عبور را فراموش کرده‌اید؟
              </a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "ورود" : "ثبت‌نام"}
          </button>

          <div className="divider">
            <span>یا</span>
          </div>

          <div className="social-login">
            <button type="button" className="social-btn google">
              <span>🔍</span>
              ادامه با گوگل
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;

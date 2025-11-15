import React, { useState } from "react";
import "./hero.css";

const Hero = ({ activeTab, setActiveTab }) => {
  const [searchData, setSearchData] = useState({
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    passengers: "1",
    // فیلدهای مخصوص قطار
    trainType: "",
    // فیلدهای مخصوص هتل
    checkIn: "",
    checkOut: "",
    rooms: "1"
  });

  const tabs = [
    { id: "flight", label: " بلیط هواپیما", icon: "✈️" },
    { id: "train", label: " بلیط قطار", icon: "🚆" },
    { id: "bus", label: " بلیط اتوبوس", icon: "🚌" },
    { id: "hotel", label: " رزرو هتل", icon: "🏨" },
  ];

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderFlightForm = () => (
    <div className="search-form">
      <div className="form-row">
        <div className="form-group">
          <label>مبدا</label>
          <input 
            type="text" 
            placeholder="شهر مبدا را وارد کنید"
            value={searchData.origin}
            onChange={(e) => handleInputChange('origin', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>مقصد</label>
          <input 
            type="text" 
            placeholder="شهر مقصد را وارد کنید"
            value={searchData.destination}
            onChange={(e) => handleInputChange('destination', e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>تاریخ رفت</label>
          <input 
            type="date" 
            value={searchData.departureDate}
            onChange={(e) => handleInputChange('departureDate', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>تاریخ برگشت</label>
          <input 
            type="date" 
            value={searchData.returnDate}
            onChange={(e) => handleInputChange('returnDate', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>تعداد مسافران</label>
          <select 
            value={searchData.passengers}
            onChange={(e) => handleInputChange('passengers', e.target.value)}
          >
            <option value="1">1 بزرگسال</option>
            <option value="2">2 بزرگسال</option>
            <option value="3">3 بزرگسال</option>
            <option value="4">4 بزرگسال</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderTrainForm = () => (
    <div className="search-form">
      <div className="form-row">
        <div className="form-group">
          <label>ایستگاه مبدا</label>
          <input 
            type="text" 
            placeholder="ایستگاه مبدا را وارد کنید"
            value={searchData.origin}
            onChange={(e) => handleInputChange('origin', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>ایستگاه مقصد</label>
          <input 
            type="text" 
            placeholder="ایستگاه مقصد را وارد کنید"
            value={searchData.destination}
            onChange={(e) => handleInputChange('destination', e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>تاریخ حرکت</label>
          <input 
            type="date" 
            value={searchData.departureDate}
            onChange={(e) => handleInputChange('departureDate', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>نوع قطار</label>
          <select 
            value={searchData.trainType}
            onChange={(e) => handleInputChange('trainType', e.target.value)}
          >
            <option value="">انتخاب نوع قطار</option>
            <option value="tourism">قطار توریستی</option>
            <option value="express">قطار سریع‌السیر</option>
            <option value="regular">قطار معمولی</option>
          </select>
        </div>

        <div className="form-group">
          <label>تعداد مسافران</label>
          <select 
            value={searchData.passengers}
            onChange={(e) => handleInputChange('passengers', e.target.value)}
          >
            <option value="1">1 بزرگسال</option>
            <option value="2">2 بزرگسال</option>
            <option value="3">3 بزرگسال</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderHotelForm = () => (
    <div className="search-form">
      <div className="form-row">
        <div className="form-group">
          <label>شهر یا هتل</label>
          <input 
            type="text" 
            placeholder="نام شهر یا هتل را وارد کنید"
            value={searchData.destination}
            onChange={(e) => handleInputChange('destination', e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>تاریخ ورود</label>
          <input 
            type="date" 
            value={searchData.checkIn}
            onChange={(e) => handleInputChange('checkIn', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>تاریخ خروج</label>
          <input 
            type="date" 
            value={searchData.checkOut}
            onChange={(e) => handleInputChange('checkOut', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>اتاق‌ها و مسافران</label>
          <select 
            value={searchData.rooms}
            onChange={(e) => handleInputChange('rooms', e.target.value)}
          >
            <option value="1">1 اتاق - 2 مهمان</option>
            <option value="2">2 اتاق - 4 مهمان</option>
            <option value="3">3 اتاق - 6 مهمان</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderBusForm = () => (
    <div className="search-form">
      <div className="form-row">
        <div className="form-group">
          <label>ترمینال مبدا</label>
          <input 
            type="text" 
            placeholder="ترمینال مبدا را وارد کنید"
            value={searchData.origin}
            onChange={(e) => handleInputChange('origin', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>ترمینال مقصد</label>
          <input 
            type="text" 
            placeholder="ترمینال مقصد را وارد کنید"
            value={searchData.destination}
            onChange={(e) => handleInputChange('destination', e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>تاریخ حرکت</label>
          <input 
            type="date" 
            value={searchData.departureDate}
            onChange={(e) => handleInputChange('departureDate', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>تعداد مسافران</label>
          <select 
            value={searchData.passengers}
            onChange={(e) => handleInputChange('passengers', e.target.value)}
          >
            <option value="1">1 بزرگسال</option>
            <option value="2">2 بزرگسال</option>
            <option value="3">3 بزرگسال</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderForm = () => {
    switch(activeTab) {
      case "flight":
        return renderFlightForm();
      case "train":
        return renderTrainForm();
      case "bus":
        return renderBusForm();
      case "hotel":
        return renderHotelForm();
      default:
        return renderFlightForm();
    }
  };

  const handleSearch = () => {
    console.log("داده‌های جستجو:", {
      service: activeTab,
      ...searchData
    });
    // اینجا می‌تونید درخواست API بفرستید
    alert(`جستجوی ${tabs.find(tab => tab.id === activeTab)?.label} انجام شد!`);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">سریع‌تر و مطمئن‌تر به سفر بروید</h1>
          <p className="hero-subtitle">
            {activeTab === "flight" && "پرواز به بیش از 100 مقصد داخلی و خارجی"}
            {activeTab === "train" && "سفر با قطار به تمامی مقاصد داخلی"}
            {activeTab === "bus" && "اتوبوس‌های مجهز به مقاصد مختلف"}
            {activeTab === "hotel" && "رزرو هتل در بهترین نقاط کشور"}
          </p>

          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {renderForm()}

          <button className="search-btn btn-primary" onClick={handleSearch}>
            🔍 جستجوی {tabs.find(tab => tab.id === activeTab)?.label}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
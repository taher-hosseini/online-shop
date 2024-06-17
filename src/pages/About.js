import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="about-content">
                            <h2 className="mb-4">درباره ما</h2>
                            <p className="lead">
                                ما در شرکت X به دنبال ایجاد تجربه‌ای بی‌نظیر برای مشتریان خود هستیم. با بهره‌گیری از
                                تکنولوژی‌های پیشرفته و تیمی متخصص، ما به ارائه محصولات با کیفیت و خدمات بهتر از هر زمان
                                دیگر متعهد هستیم.
                            </p>
                            <p>
                                از اولویت‌های ما در شرکت X، تأمین رضایت مشتریان، احترام به محیط زیست و ارتقای
                                اجتماعی است. ما به دنبال برقراری روابط پایدار و مفید با مشتریان، پیمانکاران و
                                جامعه‌های محلی هستیم.
                            </p>
                            <p>
                                اعتماد شما به ما بزرگ‌ترین سرمایه است و ما با افتخار به ارائه خدمات و محصولاتی با
                                کیفیت بالا و پشتیبانی 24/7 متعهدیم.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

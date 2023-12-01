import React, { useState } from 'react';

interface ContactUsProps {
  bgColor: string,
  textColor: string
};

const ContactUs: React.FC<ContactUsProps> = ({ bgColor, textColor }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("contactUs-formData", JSON.stringify(formData));
    setFormData({ fullName: '', phoneNumber: '', message: '' });
  };

  return (
    <section className="contact-us" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <form onSubmit={handleSubmit}>

          <div className='input-groups | d-flex justify-content-between align-items-center gap-2'>
            <div className="form-group">
              <input
                type="text"
                id="inputField"
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
              />
              <div className="label-line" style={{ backgroundColor: bgColor, color: textColor }}>Ad və soyad</div>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="inputField2"
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <div className="label-line" style={{ backgroundColor: bgColor, color: textColor }}>Mobil nömrə</div>
            </div>
          </div>

          <div className="msg-area">
            <textarea name="message"
              value={formData.message}
              onChange={handleChange}
              id="inputField3"
            ></textarea>
            <div className="label-line" style={{ backgroundColor: bgColor, color: textColor }}>Mesajınız...</div>
          </div>

          <button className='form_btn | btn btn-success'>Göndər</button>
        </form>
      </div>
    </section>
  )
};

export default ContactUs;
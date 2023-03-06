import "./contact.style.scss";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-left">
          <span className="contact-left-text">Hello,</span>
          <span className="contact-left-text">World</span>
        </div>
        <div className="contact-right">
          <span className="avatar"></span>
          <div className="description">
            <p>Email: ljwcharlie@gmail,com</p>
            <p>Phone number/WeChat: 15875646569</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

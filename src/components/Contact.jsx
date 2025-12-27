import "./contact.css"; // نحتاج ملف CSS خارجي

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* بيانات التواصل */}
          <div className="col-md-5 mb-4 text-center">
            <h3
              className="fw-bold mb-4"
              style={{
                color: "#c9a24d",
                fontSize: "2.5rem", // حجم أكبر
                textAlign: "center", // التأكيد على التمركز
              }}
            >
              اتصل الآن
            </h3>

            <div className="mb-3">
              <div>
                <a
                  href="tel:0565517871"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#686868ff")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                >
                  <img
                    src="/images/telephone.png"
                    alt="Phone"
                    style={{ width: "24px", marginRight: "8px" }}
                  />
                  <strong>0565517871</strong>
                </a>
              </div>

              <a
                href="https://wa.me/966543905422"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "black",
                  transition: "color 0.3s",
                  display: "inline-flex",
                  alignItems: "center",
                  marginTop: "8px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#686868ff")
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
              >
                <img
                  src="/images/whatsapp.png"
                  alt="WhatsApp"
                  style={{ width: "24px", marginRight: "8px" }}
                />
                <strong>0543905422</strong>
              </a>
            </div>

<p
  className="text-muted mt-4" // تم حذف fs-6
  style={{
    fontFamily: "'Amiri', serif",
    fontSize: '1.7rem',        // حجم أكبر
    lineHeight: '1.2',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  }}
>
  طعَامُنا يُحبك قبلَ أن تُحبَه
</p>


          </div>

          {/* الخريطة */}
<div className="col-md-7">
  <iframe
    title="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.710142858179!2d50.060669299999994!3d26.465070699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fffeac6fd817%3A0xaac6bb3b7d6cde69!2sArichat%20al%20yasamin!5e0!3m2!1sen!2seg!4v1766837268202!5m2!1sen!2seg"
    width="100%"
    height="100%"
    style={{ border: 0, borderRadius: "12px", minHeight: "300px" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

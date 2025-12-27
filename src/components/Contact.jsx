function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row">

          <div className="col-md-5 mb-4">
            <h3 className="fw-bold mb-3" style={{ color: '#c9a24d' }}>
              اتصل بنا
            </h3>
            <p>📞 05XXXXXXXX</p>
            <p>📍 المملكة العربية السعودية</p>
            <p>⏰ يوميًا من 12 ظهرًا حتى 2 صباحًا</p>
          </div>

          <div className="col-md-7">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=riyadh&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact

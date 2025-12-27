function About() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6 mb-4">
            <h2 className="fw-bold mb-3" style={{ color: '#1c2331' }}>
              عن مطعم عريشة الياسمين
            </h2>
            <p className="text-muted fs-5">
              نقدم أشهى أنواع المشويات، الشاورما، والبروستد باستخدام أجود
              المكونات وبطابع عائلي يناسب جميع الأذواق.
            </p>
          </div>

          <div className="col-md-6">
            <img src="/about.jpg" className="img-fluid rounded shadow" alt="عن المطعم" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default About

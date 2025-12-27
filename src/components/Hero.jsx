function Hero() {
  return (
    <section
      className="d-flex align-items-center text-center"
      style={{
        height: '100vh',
        background: 'linear-gradient(rgba(28,35,49,.7), rgba(28,35,49,.7)), url(/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff'
      }}
    >
      <div className="container">
        <h1 className="fw-bold mb-4" style={{ color: '#c9a24d', fontSize: '3rem' }}>
          عريشة الياسمين
        </h1>
        <p className="fs-4 mb-4">
          طعم أصيل يجمع بين المشويات الشرقية والمذاق العائلي الأصيل
        </p>
        <a href="/menu.pdf" target="_blank" className="btn btn-warning btn-lg">
          عرض المنيو
        </a>
      </div>
    </section>
  )
}

export default Hero

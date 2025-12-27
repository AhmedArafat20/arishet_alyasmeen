function Hero() {
  return (
    <section
      className="d-flex align-items-center text-center"
      style={{
        height: '100vh',
        // background: 'linear-gradient(rgba(28,35,49,.7), rgba(28,35,49,.7)), url(/hero.jpg)',
        // background: "linear-gradient(rgba(255, 102, 0, 0.6), rgba(128, 0, 32, 0.7), rgba(0, 0, 0, 0.8)), url('/hero.jpg')",
        background: 'linear-gradient( rgba(247, 0, 0, 0.7),rgba(97, 0, 0, 0.7), rgba(0,0,0,0.9)), url(/hero.jpg)',


        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff'
      }}
    >
      <div className="container">
        {/* اسم المطعم */}
        <h1
          className="fw-bold mb-4 animate-fade-down"
          style={{
            color: '#c9a24d',
            fontSize: '3rem',
            fontFamily: "'Tajawal', sans-serif'"
          }}
        >
          مطعم عريشة الياسمين الشامي
        </h1>

        {/* الجملة المميزة مع أنيميشن أفضل من المنتصف */}
<p
  className="fs-4 mb-4 animate-fade-scale"
  style={{
    fontFamily: "'Amiri', serif",  // تم تغييره لخط Amiri
    fontSize: '1.5rem',
    opacity: 0
  }}
>
  طعَامُنا يُحبك قبلَ أن تُحبَه
</p>


        {/* الأزرار تحت بعض */}
        <div className="d-flex flex-column align-items-center gap-3 animate-fade-up">
          <a href="/menu.pdf" target="_blank" className="btn btn-warning btn-lg">
            عرض المنيو
          </a>
          <a href="#contact" className="btn btn-success btn-lg">
            اتصل الآن
          </a>
        </div>
      </div>

      <style>{`
        /* عنوان يظهر من الأعلى */
        .animate-fade-down {
          animation: fadeDown 1s ease-out forwards;
        }
        @keyframes fadeDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* الجملة المميزة تظهر من المنتصف */
        .animate-fade-scale {
          animation: fadeScale 1s ease-out forwards;
          animation-delay: 0.5s;
        }
        @keyframes fadeScale {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* الأزرار تظهر من الأسفل */
        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards;
          animation-delay: 1s;
          opacity: 0;
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

export default Hero;

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1c2331', color: '#fff' }} className="py-4">
      <div className="container text-center">

        {/* اسم المطعم */}
        <h4 style={{ color: '#c9a24d', fontFamily: "'Amiri', serif" }}>
         مطعم عريشة الياسمين
        </h4>

        {/* روابط السوشيال ميديا */}
        <div className="d-flex justify-content-center gap-3 my-3">
          <a href="https://www.instagram.com/arishet.alyasamen?igsh=NDd0M2QyY3RpbjFk" className="text-warning text-decoration-none" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            Instagram
          </a>
          <a href="https://www.snapchat.com/add/yassmen.res?share_id=EjQUQME8MwM&locale=ar-EG" className="text-warning text-decoration-none" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            Snapchat
          </a>
          <a href="https://www.tiktok.com/@arishet.alyasamin?_t=ZS-90sRLfyW1uD&_r=1" className="text-warning text-decoration-none" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            TikTok
          </a>
        </div>

        {/* الحقوق */}
        <p className="mb-0" style={{ fontFamily: "'Amiri', serif" }}>
          © جميع الحقوق محفوظة
        </p>

        {/* Global Web بخط رقعة مميز */}
        <p style={{
          fontFamily: "'Amiri', serif",
          fontSize: '1rem',
          marginTop: '5px',
          color: '#c9a24d'
        }}>
          Globe Web
        </p>

      </div>
    </footer>
  )
}

export default Footer;

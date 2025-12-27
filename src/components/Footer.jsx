function Footer() {
  return (
    <footer style={{ backgroundColor: '#1c2331', color: '#fff' }} className="py-4">
      <div className="container text-center">
        <h5 style={{ color: '#c9a24d' }}>عريشة الياسمين</h5>

        <div className="d-flex justify-content-center gap-3 my-3">
          <a href="#" className="text-warning text-decoration-none">Instagram</a>
          <a href="#" className="text-warning text-decoration-none">Snapchat</a>
          <a href="#" className="text-warning text-decoration-none">TikTok</a>
        </div>

        <p className="mb-0">© جميع الحقوق محفوظة</p>
      </div>
    </footer>
  )
}

export default Footer

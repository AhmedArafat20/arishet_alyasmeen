import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#1c2331' }}>
      <div className="container">

        {/* Logo - الشمال */}
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="عريشة الياسمين"
            style={{ height: '50px' }}
          />
        </a>

        {/* زرار الموبايل */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          {/* Links - في النص */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#menu">
                المنيو
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#contact">
                اتصل بنا
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#location">
                موقعنا
              </a>
            </li>
          </ul>

          {/* اسم المطعم - اليمين */}
          <span
            className="navbar-text fw-bold"
            style={{
              color: '#c9a24d',
              fontSize: '1.4rem',
              fontFamily: 'cursive'
            }}
          >
            عريشة الياسمين
          </span>

        </div>
      </div>
    </nav>
  )
}

export default Navbar

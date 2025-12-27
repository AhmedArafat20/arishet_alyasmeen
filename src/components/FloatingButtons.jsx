function FloatingButtons() {
  return (
    <div className="position-fixed bottom-0 end-0 p-3 d-flex flex-column gap-2" style={{ zIndex: 999 }}>
      <a
        href="tel:05XXXXXXXX"
        className="btn btn-dark rounded-circle"
        style={{ width: '50px', height: '50px' }}
      >
        📞
      </a>

      <a
        href="https://wa.me/9665XXXXXXXX"
        target="_blank"
        className="btn btn-success rounded-circle"
        style={{ width: '50px', height: '50px' }}
      >
        💬
      </a>
    </div>
  )
}

export default FloatingButtons

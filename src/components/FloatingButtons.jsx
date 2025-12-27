function FloatingButtons() {
  return (
    <div className="position-fixed bottom-0 end-0 p-3 d-flex flex-column gap-2" style={{ zIndex: 999 }}>
      
      {/* زر الهاتف */}
      <a
        href="tel:0565517871"
        className="btn  rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: '50px', backgroundColor: '#007BFF', height: '50px' }}
      >
        <img src="/images/telephone.png" alt="Phone" style={{ width: '24px', height: '24px' }} />
      </a>

      {/* زر الواتس */}
      <a
        href="https://wa.me/966543905422"
        target="_blank"
        className="btn btn-success rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: '50px', height: '50px' }}
      >
        <img src="/images/whatsapp.png" alt="WhatsApp" style={{ width: '24px', height: '24px' }} />
      </a>

    </div>
  )
}

export default FloatingButtons;

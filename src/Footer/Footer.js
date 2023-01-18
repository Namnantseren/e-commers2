import "./FooterStyle/footer.css";

export default function footer() {
  return (
    <div className="footer">
      <div className="innerfooter">
        <div className="containertuulai">
          <div>
            <img src="../Nav.svg" alt="pic" />
          </div>
          <div className="gfw">
            <div className="margoogle">
              <img src="../google.svg" alt="" />
            </div>
            <div className="margoogle">
              <img src="../facebook.svg" alt="" />
            </div>
            <img src="../whatsapp.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="innerfooter">
        <p className="tuulai">
          © 2023 Tuulai. Built using AQUA and Tuulai Theme. Terms and Conditions
        </p>
      </div>
    </div>
  );
}

import '../custom.scss';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg m-0 p-3">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-2 p-0 m-0">
            Paras<span className="text-primary">Dhadhal</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto m-2 mb-lg-0 text-center">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About&nbsp;
                  <i class="bi bi-person"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Skill&nbsp;
                  <i class="bi bi-gear"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects&nbsp;
                  <i class="bi bi-folder"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Education&nbsp;
                  <i class="bi bi-mortarboard"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Certificate&nbsp;
                  <i class="bi bi-patch-check"></i>
                </a>
              </li>
            </ul>
            <form className="d-flex ms-lg-3 m-2 p-0">
              <button className="btn btn-outline-primary col-12 p-1 m-0 fs-5" type="button">
                Contact Me&nbsp;
                <i class="bi bi-link-45deg"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
import MKBU from "../assets/MKBU_Logo.jpg"

export default function Education() {
  return (
    <section className="text-center border rounded-end-5 m-3  bg-dark text-white p-0" id="Education">
        <h2 className="mb-4 text-center text-primary">Education <i className="bi bi-mortarboard-fill"></i></h2>
        <div className="row d-flex flex-column align-items-center w-100">
          <div className="col-md-4 mb-4 w-75 p-0">
            <div className="card h-100 shadow-lg bg-dark text-white m-3">
              <div className="card-body d-flex justify-content-center align-items-center m-3 p-3">
                <img src={MKBU} alt="MKBU_Logo" className="img-thumbnail float-start p-1 m-0 rounded-circle border border-3 border-primary "/>
                <h5 className="card-title d-flex text-center justify-content-center p-4">Bachelor's Degree in Computer Applications (BCA)</h5>
                <p className="card-text">MKBU University, 2022 - 2025</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
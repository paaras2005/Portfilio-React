// export default function Certificate() {
//   return (
//     <section className="text-center border rounded-end-5 m-3">
//       <div className="container d-flex justify-content-center align-items-center min-vh-100">
//         <div
//           className="border border-3 border-dark p-5 shadow bg-dark text-center w-100"
//           style={{ maxWidth: "800px" }}
//         >
//           <h1 className="mb-4 fw-bold">Certificate of Achievement</h1>
//           <p className="lead">This certificate is proudly presented to</p>

//           <h2 className="my-4 text-primary fw-bold">[Your Name]</h2>

//           <p className="mb-4 lead">For successfully completing</p>
//           <h4 className="text-success mb-4">[Course/Project Title]</h4>

//           <div className="row mt-5">
//             <div className="col text-start">
//               <p>
//                 <strong>Date:</strong> May 31, 2025
//               </p>
//             </div>
//             <div className="col text-end">
//               <p>
//                 <strong>Signature:</strong> _______________
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const certificates = [
  {
    name: 'John Doe',
    title: 'React Development',
    date: 'May 31, 2025',
    issuer: 'Code Academy',
  },
  {
    name: 'Jane Smith',
    title: 'Full Stack Web Development',
    date: 'April 15, 2025',
    issuer: 'Tech Institute',
  },
  {
    name: 'Michael Johnson',
    title: 'UI/UX Design Masterclass',
    date: 'March 20, 2025',
    issuer: 'Design School',
  },
];

const CertificateCard = ({ certificate }) => (
  <div className="col-md-6 text-center align-items-center">
    <div className="border rounded-5 border-2 border-light p-3 bg-dark shadow-sm h-100 text-center align-items-center">
      <h4 className="fw-bold text-uppercase text-white">Certificate of Achievement</h4>
      <p className="mt-3 text-white">Presented to</p>
      <h5 className="text-primary">{certificate.name}</h5>
      <p className="mt-3 mb-1 text-white">For completing</p>
      <h6 className="text-success">{certificate.title}</h6>
      <p className="mt-4 text-white"><strong>Date:</strong> {certificate.date}</p>
      <p className="text-white"><strong>Issued By:</strong> {certificate.issuer}</p>
    </div>
  </div>
);

const CertificatePage = () => {
  return (
    <div className="border rounded-start-5 m-3 p-4 bg-dark text-white">
      <h2 className="text-center mb-5 text-primary fw-bold">My Certificates</h2>
      <div className="row g-3">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} certificate={cert} />
        ))}
      </div>
    </div>
  );
};

export default CertificatePage;
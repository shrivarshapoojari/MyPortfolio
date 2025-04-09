 

import { useState } from "react"
import web from "../../assets/certificates/web.png"
import ds from "../../assets/certificates/ds.png"
import edge from "../../assets/certificates/edge.png"
export default function Certificate() {
  
  const [certifications] = useState([
    {
      id: 1,
      name: "Full Stack Web Development",
      issuer: "Udemy",
      date: "September 2023",
      previewUrl:  web,
      verifyUrl: "https://www.udemy.com/certificate/UC-dbe87ef4-7365-4f71-93b6-126312b7510f/",
    },
    {
      id: 2,
      name: "Data Science Masters",
      issuer: "PW Skills",
      date: "April 2024",
      previewUrl: ds,
      verifyUrl: "https://cdn.pwskills.com/learn/certificates/6af0cc64-7b75-4e2a-9c6e-6ad22be063c3.pdf",
    },
    {
      id: 3,
      name: "Edge Computing",
      issuer: "NPTEL",
      date: "March 2025",
      previewUrl: edge,
      verifyUrl: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS28S53640018201380742",
    },
    {
      id: 4,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "September 2023",
      previewUrl: "/placeholder.svg?height=200&width=300",
      verifyUrl: "https://aws.amazon.com/verify",
    },
  ])

  const handleVerify = (url) => {
    window.open(url, "_blank")
  }

  return (
    <div
      style={{
        backgroundColor: "#0a0a14",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
        backgroundImage: "radial-gradient(circle, rgba(50, 50, 80, 0.15) 2px, transparent 2px)",
        backgroundSize: "30px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <header style={{ marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            My <span style={{ color: "#a855f7" }}>Certifications</span>
          </h1>
          <p style={{ fontSize: "18px", color: "#aaa" }}>
            A collection of my professional certifications and achievements in the tech industry.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
            gap: "30px",
          }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.id}
              style={{
                backgroundColor: "rgba(30, 30, 50, 0.4)",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)"
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)"
              }}
            >
              {/* <div
                style={{
                  width: "100%",
                  height: "200px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={cert.previewUrl || "/placeholder.svg"}
                  alt={`${cert.name} Certificate`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                    
                /> */}

<div
  style={{
    width: "100%",
    position: "relative",
    backgroundColor: "#000",
  }}
>
  <img
    src={cert.previewUrl || "/placeholder.svg"}
    alt={`${cert.name} Certificate`}
    style={{
      width: "100%",
      height: "auto", // maintain full view
      display: "block",
    }}
  />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "rgba(168, 85, 247, 0.9)",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {cert.date}
                </div>
              </div>

              <div style={{ padding: "20px" }}>
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  {cert.name}
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#aaa",
                    marginBottom: "20px",
                  }}
                >
                  Issued by: {cert.issuer}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={() => handleVerify(cert.verifyUrl)}
                    style={{
                      backgroundColor: "transparent",
                      color: "#a855f7",
                      border: "2px solid #a855f7",
                      borderRadius: "8px",
                      padding: "10px 20px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#a855f7"
                      e.currentTarget.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.color = "#a855f7"
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Verify Certificate
                  </button>

                  {/* <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(168, 85, 247, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    title="View Details"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  )
}

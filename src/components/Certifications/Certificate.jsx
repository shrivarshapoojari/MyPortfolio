 
import { useState } from "react"
import web from "../../assets/certificates/web.png"
import ds from "../../assets/certificates/ds.png"
import ds2 from "../../assets/certificates/ds2.png"
import edge from "../../assets/certificates/edge.png"
import java from "../../assets/certificates/java.png"
import c from "../../assets/certificates/c.png"
import net from "../../assets/certificates/net.png"
import springboot from "../../assets/certificates/springboot.png"
import { Particle } from "../Particle"

export default function Certificate() {
  const [certifications] = useState([
    {
      id: 1,
      name: "Full Stack Web Development",
      issuer: "Udemy",
      date: "September 2023",
      previewUrl: web,
      verifyUrl: "https://www.udemy.com/certificate/UC-dbe87ef4-7365-4f71-93b6-126312b7510f/",
    },
    {
      id: 2,
      name: "SpringBoot Certification",
      issuer: "Udemy",
      date: "December 2024",
      previewUrl: springboot,
      verifyUrl: "https://www.udemy.com/certificate/UC-8a0c9ab1-3aa1-4cf4-988b-189ebe0099f4/",
    },
   
    {
      id: 3,
      name: "Data Science for Engineers",
      issuer: "NPTEL",
      date: "September 2024",
      previewUrl: ds2,
      verifyUrl:
        "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs133/Course/NPTEL24CS133S33200049002751245.pdf",
    },
    {
      id: 4,
      name: "Edge Computing",
      issuer: "NPTEL",
      date: "March 2025",
      previewUrl: edge,
      verifyUrl: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS28S53640018201380742",
    },
    {
      id: 5,
      name: "Java with DSA and System Design",
      issuer: "PW Skills",
      date: "September 2023",
      previewUrl: java,
      verifyUrl: "https://cdn.pwskills.com/learn/certificates/7c05eb7e-f4d6-487c-8f66-08aa4e09b206.pdf",
    },
    {
      id: 6,
      name: "Data Science Masters",
      issuer: "PW Skills",
      date: "April 2024",
      previewUrl: ds,
      verifyUrl: "https://cdn.pwskills.com/learn/certificates/6af0cc64-7b75-4e2a-9c6e-6ad22be063c3.pdf",
    },
    {
      id: 7,
      name: "Programming in C",
      issuer: "Infosys Springboard",
      date: "August 2023",
      previewUrl: c,
      verifyUrl: "https://verify.onwingspan.com/",
    },
    
    {
      id: 8,
      name: "Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "August 2024",
      previewUrl: net,
      verifyUrl: "https://www.credly.com/badges/ab1d2d00-3a98-45ee-a7fc-398e945bf7ff/public_url",
    },
  ])

  const handleVerify = (url) => {
    window.open(url, "_blank")
  }

  // Responsive styles based on screen width
  const getGridStyle = () => {
    // Use window.innerWidth to determine the current viewport width
    const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 0

    if (viewportWidth <= 768) {
      // Mobile view
      return {
        display: "grid",
        gridTemplateColumns: "1fr", // Single column for mobile
        gap: "20px",
        width: "100%",
      }
    } else {
      // Tablet and desktop view
      return {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
        gap: "30px",
      }
    }
  }

  return (
    <div
      style={{
        marginTop: "5%",
        padding: "5%", // Unified padding
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
        backgroundSize: "30px 30px",
      }}
    >
      <Particle />
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
              fontSize: "clamp(28px, 5vw, 42px)", // Responsive font size
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            My <span style={{ color: "#a855f7" }}>Certifications</span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 3vw, 18px)", color: "#aaa" }}>
            A collection of my professional certifications.
          </p>
        </header>

        <div style={getGridStyle()}>
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
                width: "100%", // Ensure card takes full width of its grid cell
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
                    fontSize: "clamp(18px, 4vw, 24px)", // Responsive font size
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  {cert.name}
                </h2>
                <p
                  style={{
                    fontSize: "clamp(14px, 3vw, 16px)", // Responsive font size
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



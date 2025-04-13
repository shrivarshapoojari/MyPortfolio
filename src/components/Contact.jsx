 
import { useState } from "react"
import {Particle} from "./Particle"
import { Container} from "react-bootstrap";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import { Helmet } from 'react-helmet-async'

function Contact() {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [sending,setSending]=useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

 
   
   
  const handleSubmit = (e) => {
    e.preventDefault();
  setSending(true);
    emailjs
      .send(
        serviceID, 
        templateID,  
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: publicKey, 
        }
      )
      .then(
        (result) => {
          toast.success("Message sent successfully")
          setFormData({ name: "", email: "", subject: "", message: "" }); 
          setSending(false);
        },
        (error) => {
           toast.error("Failed to send message")
           toast.error("Please try again")
           setSending(false)
        }
      );
  };

  return (
    <>
    <Helmet>
    <title>Contact | Shrivarsha Poojary</title>
    <meta name="description" content="Get in touch with Shrivarsha Poojary for collaboration, projects, or opportunities. Let's connect!" />
        <meta name="keywords" content="Shrivarsha, Poojary, RVCE, Portfolio, Developer, React, AI" />
        <meta name="author" content="Shrivarsha Poojary" />
        <meta property="og:title" content="Shrivarsha Poojary | Portfolio" />
        <meta property="og:description" content="Check out my projects, skills, and achievements!" />
        <meta property="og:image" content="https://www.shrivarshapoojary.in/logo.png" />
        <meta property="og:url" content="https://www.shrivarshapoojary.in/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shrivarsha Poojary | Portfolio" />
        <meta name="twitter:description" content="Check out my work, skills, and more." />
        <meta name="twitter:image" content="https://www.shrivarshapoojary.in/logo.png" />
      </Helmet>
    <Container fluid className="about-section">
    <div
      style={{
     
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
         
        backgroundSize: "30px 30px",
        
      }}
    >
        <Particle/>
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
            Contact <span style={{ color: "#a855f7" }}>Me</span>
          </h1>
          <p style={{ fontSize: "18px", color: "#aaa" }}>
            Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </header>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Contact Information */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Get In <span style={{ color: "#a855f7" }}>Touch</span>
            </h2>

            <div style={{ marginBottom: "30px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div
                    style={{
                      backgroundColor: "rgba(168, 85, 247, 0.2)",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Phone</h3>
                    <p style={{ color: "#aaa" }}>+91 8095343487</p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div
                    style={{
                      backgroundColor: "rgba(168, 85, 247, 0.2)",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Email</h3>
                    <p style={{ color: "#aaa" }}>shrivarshapoojary8095@gmail.com</p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div
                    style={{
                      backgroundColor: "rgba(168, 85, 247, 0.2)",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Location</h3>
                    <p style={{ color: "#aaa" }}>Bengaluru, India</p>
                  </div>
                </div>
              </div>
            </div>

            <h2
              style={{
                fontSize: "28px",
                marginBottom: "20px",
                marginTop: "40px",
                fontWeight: "bold",
              }}
            >
              Let's <span style={{ color: "#a855f7" }}>Connect</span>
            </h2>

            <div style={{ display: "flex", gap: "15px" }}>
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/shrivarsha-poojary-960691249/"
    target="_blank"
    rel="noreferrer"
    style={{
      backgroundColor: "rgba(168, 85, 247, 0.2)",
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      cursor: "pointer",
      textDecoration: "none",
      zIndex: 10,
    }}
  >
    {/* LinkedIn SVG */}
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  </a>

{/* Whatsapp */}

  <a
    href="https://wa.me/+918095343487"
    target="_blank"
    rel="noreferrer"
    style={{
      backgroundColor: "rgba(168, 85, 247, 0.2)",
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      cursor: "pointer",
      textDecoration: "none",
      zIndex: 10,
    }}
  >
     <svg fill="#a855f7" height="20" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xml:space="preserve" stroke="#a855f7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_468_"> <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path> </g> </g></svg>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/shrivarshapoojari"
    target="_blank"
    rel="noreferrer"
    style={{
      backgroundColor: "rgba(168, 85, 247, 0.2)",
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      cursor: "pointer",
      textDecoration: "none",
      zIndex: 10,
    }}
  >
    {/* GitHub SVG */}
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
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 
      5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 
      5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 
      3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  </a>
</div>

          </div>

          {/* Contact Form */}
          <div
            style={{
              flex: "1.5",
              minWidth: "300px",
              backgroundColor: "rgba(30, 30, 50, 0.4)",
              borderRadius: "16px",
              padding: "30px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Send Me a <span style={{ color: "#a855f7" }}>Message</span>
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <div style={{ flex: "1", minWidth: "200px" }}>
                  <label
                    htmlFor="name"
                    style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#aaa" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      backgroundColor: "rgba(20, 20, 40, 0.6)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "8px",
                      color: "white",
                      fontSize: "16px",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                    }}
                  />
                </div>
                <div style={{ flex: "1", minWidth: "200px" }}>
                  <label
                    htmlFor="email"
                    style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#aaa" }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      backgroundColor: "rgba(20, 20, 40, 0.6)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "8px",
                      color: "white",
                      fontSize: "16px",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#aaa" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    backgroundColor: "rgba(20, 20, 40, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "16px",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#aaa" }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    backgroundColor: "rgba(20, 20, 40, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "16px",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                style={{
                  backgroundColor: "#a855f7",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "14px 28px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: sending ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  alignSelf: "flex-start",
                  marginTop: "10px",
                }}
              >
               {!sending? "Send Message" : "Sending"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </Container>
    </>
  )
}

export default Contact

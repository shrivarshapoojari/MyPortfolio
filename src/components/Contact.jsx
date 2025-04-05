 
import { useState } from "react"
import Particle from "./Particle"
import { Container} from "react-bootstrap";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
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
              Follow <span style={{ color: "#a855f7" }}>Me</span>
            </h2>

            <div style={{ display: "flex", gap: "15px" }}>
              {/* GitHub */}
              <a
                href="#"
                style={{
                  backgroundColor: "rgba(168, 85, 247, 0.2)",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
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
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                style={{
                  backgroundColor: "rgba(168, 85, 247, 0.2)",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                style={{
                  backgroundColor: "rgba(168, 85, 247, 0.2)",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
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
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                style={{
                  backgroundColor: "rgba(168, 85, 247, 0.2)",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
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
  )
}

export default Contact


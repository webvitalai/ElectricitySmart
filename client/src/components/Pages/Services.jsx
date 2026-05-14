import React, { useState } from "react";
import {
  LightningChargeFill,
  ShieldCheck,
  LightbulbFill,
  Search,
  GearFill,
  HouseGearFill,
  CheckCircleFill,
  TelephoneFill,
  ArrowRight,
  ChevronDown,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    {
      title: "Emergency Electrical Repairs",
      img: "/Images/s1.png",
      icon: <LightningChargeFill />,
      desc: "24/7 rapid response for power cuts, sparking sockets, burning smells, or urgent electrical faults.",
      points: [
        "45-minute average response",
        "Fault finding & diagnostics",
        "Immediate safety isolation",
      ],
    },
    {
      title: "Fuse Box Replacement",
      img: "/Images/s2.png",
      icon: <ShieldCheck />,
      desc: "Upgrade your old fuse board to a modern 18th Edition compliant consumer unit with RCD protection.",
      points: [
        "Full testing & certification",
        "RCD / RCBO protection",
        "Surge protection available",
      ],
    },
    {
      title: "Lighting Installation & Repair",
      img: "/Images/s3.png",
      icon: <LightbulbFill />,
      desc: "From stylish indoor LED downlights to robust outdoor security lighting and smart lighting systems.",
      points: [
        "Smart lighting systems",
        "Energy-efficient LEDs",
        "Security & garden lighting",
      ],
    },
    {
      title: "Electrical Safety Inspections",
      img: "/Images/s4.png",
      icon: <Search />,
      desc: "Comprehensive EICR reports for homeowners, landlords, commercial properties and buyers.",
      points: [
        "Landlord safety certificates",
        "Pre-purchase inspections",
        "Remedial work quotes",
      ],
    },
    {
      title: "Appliance & Wiring Services",
      img: "/Images/s5.png",
      icon: <GearFill />,
      desc: "Electric cookers, showers, new sockets, partial rewiring and full property rewiring services.",
      points: [
        "New socket installation",
        "Electric shower circuits",
        "Full & partial rewires",
      ],
    },
    {
      title: "General Maintenance",
      img: "/Images/s6.png",
      icon: <HouseGearFill />,
      desc: "Routine checks and minor repairs to keep your electrical system safe, stable and future-ready.",
      points: [
        "Fault prevention",
        "System health checks",
        "Minor works & repairs",
      ],
    },
  ];

  const faqs = [
    {
      q: "How quickly can you respond to an emergency?",
      a: "Our average emergency response target is around 45 minutes across London, depending on traffic, location and job urgency.",
    },
    {
      q: "Are your electricians fully qualified?",
      a: "Yes. Our electricians are certified, insured and trained to handle residential and commercial electrical work safely.",
    },
    {
      q: "Do you provide landlord safety certificates?",
      a: "Yes. We provide EICR reports and landlord electrical safety certificates for rental and commercial properties.",
    },
    {
      q: "Is your work guaranteed?",
      a: "Yes. Our work comes with a 12-month workmanship guarantee for added peace of mind.",
    },
  ];

  return (
    <>
      <style>{`
        .services-page {
          min-height: 100vh;
          background: #f0f9ff;
          color: #0f172a;
          overflow: hidden;
          font-family: "Inter", sans-serif;
        }

        .services-hero {
          position: relative;
          padding: 150px 0 90px;
          background:
            radial-gradient(circle at top left, rgba(14,165,233,0.26), transparent 35%),
            radial-gradient(circle at bottom right, rgba(239,68,68,0.18), transparent 35%),
            linear-gradient(135deg, #07101f 0%, #0f172a 50%, #111827 100%);
          color: white;
          overflow: hidden;
        }

        .services-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(55px);
          opacity: 0.55;
          animation: floatOrb 7s infinite alternate ease-in-out;
        }

        .hero-orb.one {
          width: 300px;
          height: 300px;
          background: #38bdf8;
          left: 5%;
          top: 22%;
        }

        .hero-orb.two {
          width: 340px;
          height: 340px;
          background: #ef4444;
          right: 8%;
          bottom: 8%;
          animation-delay: 1.2s;
        }

        .services-container {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: auto;
          padding: 0 18px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 45px;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(18px);
          color: #7dd3fc;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          margin-bottom: 22px;
        }

        .hero-badge span {
          width: 9px;
          height: 9px;
          background: #ef4444;
          border-radius: 50%;
          box-shadow: 0 0 0 7px rgba(239,68,68,0.18);
        }

        .services-hero h1 {
          font-size: clamp(42px, 6vw, 78px);
          font-weight: 950;
          line-height: 0.98;
          letter-spacing: -0.06em;
          margin-bottom: 24px;
        }

        .services-hero h1 span {
          background: linear-gradient(90deg, #ef4444, #38bdf8, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .services-hero p {
          color: #dbeafe;
          font-size: 18px;
          line-height: 1.8;
          max-width: 650px;
        }

        .hero-stats {
          margin-top: 35px;
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .hero-stat {
          padding: 18px 22px;
          border-radius: 22px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(18px);
          min-width: 145px;
        }

        .hero-stat strong {
          display: block;
          font-size: 26px;
          font-weight: 950;
        }

        .hero-stat span {
          color: #7dd3fc;
          font-size: 12px;
          font-weight: 800;
        }

        .hero-visual-card {
          position: relative;
          padding: 26px;
          border-radius: 36px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(24px);
          box-shadow: 0 35px 90px rgba(0,0,0,0.35);
          animation: heroCardFloat 4s infinite ease-in-out;
        }

        .hero-visual-card img {
          width: 100%;
          height: 390px;
          object-fit: cover;
          border-radius: 26px;
        }

        .hero-floating {
          position: absolute;
          left: -20px;
          bottom: 40px;
          padding: 18px 20px;
          border-radius: 22px;
          background: white;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 25px 55px rgba(0,0,0,0.25);
        }

        .hero-floating svg {
          color: #dc2626;
          font-size: 28px;
        }

        .hero-floating strong {
          display: block;
          font-size: 14px;
          font-weight: 950;
        }

        .hero-floating span {
          font-size: 12px;
          color: #64748b;
        }

        .services-main {
          position: relative;
          padding: 95px 0;
        }

        .section-title {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 55px;
        }

        .section-title span {
          display: inline-block;
          color: #dc2626;
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 12px;
          margin-bottom: 12px;
        }

        .section-title h2 {
          font-size: clamp(34px, 4vw, 56px);
          font-weight: 950;
          letter-spacing: -0.05em;
          margin-bottom: 14px;
        }

        .section-title p {
          color: #64748b;
          font-size: 17px;
          line-height: 1.7;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .crazy-service-card {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          background: white;
          border: 1px solid #bae6fd;
          box-shadow: 0 22px 60px rgba(14,165,233,0.08);
          transition: 0.45s ease;
        }

        .crazy-service-card:hover {
          transform: translateY(-14px) rotate(-1deg);
          box-shadow: 0 35px 90px rgba(14,165,233,0.2);
          border-color: rgba(239,68,68,0.45);
        }

        .service-img-wrap {
          height: 235px;
          overflow: hidden;
          position: relative;
        }

        .service-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.65s ease;
        }

        .crazy-service-card:hover .service-img-wrap img {
          transform: scale(1.12);
        }

        .service-number {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: rgba(7,12,22,0.82);
          backdrop-filter: blur(16px);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 950;
        }

        .service-body {
          padding: 28px;
        }

        .service-icon {
          width: 62px;
          height: 62px;
          border-radius: 20px;
          background: linear-gradient(135deg, #ef4444, #38bdf8);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          box-shadow: 0 18px 36px rgba(14,165,233,0.28);
          margin-top: -60px;
          margin-bottom: 22px;
          position: relative;
          z-index: 4;
        }

        .service-body h3 {
          font-size: 22px;
          font-weight: 950;
          letter-spacing: -0.03em;
          margin-bottom: 12px;
        }

        .service-body p {
          color: #64748b;
          line-height: 1.75;
          font-size: 14px;
          margin-bottom: 18px;
        }

        .service-points {
          list-style: none;
          padding: 0;
          margin: 0 0 22px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .service-points li {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #334155;
          font-size: 14px;
          font-weight: 700;
        }

        .service-points svg {
          color: #22c55e;
          flex-shrink: 0;
        }

        .book-btn {
          width: 100%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          padding: 14px 18px;
          border-radius: 17px;
          background: #07101f;
          color: white;
          font-weight: 950;
          transition: 0.35s ease;
        }

        .book-btn:hover {
          color: white;
          background: linear-gradient(135deg, #ef4444, #38bdf8);
          transform: translateY(-3px);
        }

        .process-section {
          padding: 85px 0;
          background: #07101f;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .process-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(14,165,233,0.2), transparent 45%);
        }

        .process-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .process-card {
          padding: 28px;
          border-radius: 28px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(18px);
          transition: 0.35s ease;
        }

        .process-card:hover {
          transform: translateY(-10px);
          background: rgba(255,255,255,0.11);
        }

        .process-card strong {
          display: inline-flex;
          width: 45px;
          height: 45px;
          border-radius: 16px;
          background: linear-gradient(135deg, #ef4444, #38bdf8);
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .process-card h4 {
          font-weight: 950;
          margin-bottom: 10px;
        }

        .process-card p {
          color: #cbd5e1;
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
        }

        .faq-section {
          padding: 90px 0;
          background: #f0f9ff;
        }

        .faq-box {
          max-width: 850px;
          margin: auto;
        }

        .faq-item {
          margin-bottom: 14px;
          border-radius: 22px;
          background: white;
          border: 1px solid #bae6fd;
          box-shadow: 0 18px 45px rgba(14,165,233,0.05);
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          border: 0;
          background: transparent;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          font-size: 17px;
          font-weight: 950;
          color: #0f172a;
        }

        .faq-item.active .faq-question svg {
          transform: rotate(180deg);
          color: #dc2626;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: 0.35s ease;
        }

        .faq-item.active .faq-answer {
          max-height: 160px;
        }

        .faq-answer p {
          padding: 0 24px 22px;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
        }

        .service-cta {
          padding: 80px 0 100px;
          background: white;
        }

        .service-cta-box {
          border-radius: 36px;
          padding: 50px;
          background:
            linear-gradient(135deg, rgba(7,12,22,0.94), rgba(127,29,29,0.9)),
            url("/emergency/Emergency Electrical Repairs.png") center/cover;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          overflow: hidden;
        }

        .service-cta-box h2 {
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 950;
          letter-spacing: -0.05em;
          margin-bottom: 12px;
        }

        .service-cta-box p {
          color: #dbeafe;
          margin: 0;
          max-width: 630px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          background: linear-gradient(135deg, #ef4444, #38bdf8);
          color: white;
          padding: 17px 25px;
          border-radius: 18px;
          font-weight: 950;
          white-space: nowrap;
          transition: 0.35s ease;
        }

        .cta-btn:hover {
          color: white;
          transform: translateY(-5px) scale(1.03);
        }

        @keyframes floatOrb {
          from { transform: translateY(0) scale(1); }
          to { transform: translateY(35px) scale(1.08); }
        }

        @keyframes heroCardFloat {
          0%, 100% { transform: translateY(0) rotate(1deg); }
          50% { transform: translateY(-16px) rotate(-1deg); }
        }

        @media (max-width: 991px) {
          .hero-grid,
          .service-cta-box {
            grid-template-columns: 1fr;
            flex-direction: column;
            align-items: flex-start;
          }

          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-visual-card img {
            height: 330px;
          }
        }

        @media (max-width: 576px) {
          .services-hero {
            padding: 120px 0 65px;
          }

          .service-grid,
          .process-grid {
            grid-template-columns: 1fr;
          }

          .hero-stats {
            display: grid;
            grid-template-columns: 1fr;
          }

          .hero-visual-card {
            padding: 14px;
            border-radius: 26px;
          }

          .hero-visual-card img {
            height: 280px;
            border-radius: 20px;
          }

          .hero-floating {
            position: static;
            margin-top: 14px;
          }

          .service-cta-box {
            padding: 32px 24px;
            border-radius: 28px;
          }

          .cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <main className="services-page">
        <section className="services-hero">
          <div className="hero-orb one"></div>
          <div className="hero-orb two"></div>

          <div className="services-container">
            <div className="hero-grid">
              <div>
                <div className="hero-badge">
                  <span></span>
                  London Electrical Experts
                </div>

                <h1>
                  Crazy Fast <br />
                  <span>Electrical Services</span>
                </h1>

                <p>
                  We provide professional residential and commercial electrical
                  services across London with premium safety standards, fast
                  response, and certified workmanship.
                </p>

                <div className="hero-stats">
                  <div className="hero-stat">
                    <strong>24/7</strong>
                    <span>Emergency Callouts</span>
                  </div>

                  <div className="hero-stat">
                    <strong>45 min</strong>
                    <span>Average Response</span>
                  </div>

                  <div className="hero-stat">
                    <strong>12 mo</strong>
                    <span>Work Guarantee</span>
                  </div>
                </div>
              </div>

              <div className="hero-visual-card">
                <img
                  src="/Images/home.png"
                  alt="Emergency Electrical Repairs"
                />

                <div className="hero-floating">
                  <ShieldCheck />
                  <div>
                    <strong>NICEIC Approved</strong>
                    <span>Certified & insured electricians</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-main">
          <div className="services-container">
            <div className="section-title">
              <span>Our Services</span>
              <h2>Built for Homes, Landlords & UK Businesses</h2>
              <p>
                Professional electrical solutions with a premium service feel,
                modern visuals, smooth animations and clear calls to action.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service, index) => (
                <div
                  className="crazy-service-card"
                  key={index}
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="service-img-wrap">
                    <img src={service.img} alt={service.title} />
                    <div className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="service-body">
                    <div className="service-icon">{service.icon}</div>

                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>

                    <ul className="service-points">
                      {service.points.map((point, i) => (
                        <li key={i}>
                          <CheckCircleFill />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <a href="tel:+442012345678" className="book-btn">
                      Book Service Now <ArrowRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="services-container">
            <div className="section-title">
              <span>Simple Process</span>
              <h2>How We Handle Your Job</h2>
              <p>
                From emergency call to certified completion, our process is
                clear, fast and professional.
              </p>
            </div>

            <div className="process-grid">
              <div className="process-card">
                <strong>01</strong>
                <h4>Call or Message</h4>
                <p>Contact us with your fault, project or inspection request.</p>
              </div>

              <div className="process-card">
                <strong>02</strong>
                <h4>Fast Diagnosis</h4>
                <p>We inspect the issue and explain the safest solution.</p>
              </div>

              <div className="process-card">
                <strong>03</strong>
                <h4>Professional Repair</h4>
                <p>Our electrician completes the work safely and cleanly.</p>
              </div>

              <div className="process-card">
                <strong>04</strong>
                <h4>Testing & Guarantee</h4>
                <p>We test the job and provide certification when required.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="services-container">
            <div className="section-title">
              <span>FAQ</span>
              <h2>Frequently Asked Questions</h2>
              <p>Common questions about our services and process.</p>
            </div>

            <div className="faq-box">
              {faqs.map((item, index) => (
                <div
                  className={`faq-item ${activeFaq === index ? "active" : ""}`}
                  key={index}
                >
                  <button
                    className="faq-question"
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    }
                  >
                    {item.q}
                    <ChevronDown />
                  </button>

                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="services-container">
            <div className="service-cta-box">
              <div>
                <h2>Need an Electrician Today?</h2>
                <p>
                  Call now for emergency electrical repairs, EICR certificates,
                  fuse box upgrades, rewiring, lighting and maintenance across
                  London.
                </p>
              </div>

              <a href="tel:+442012345678" className="cta-btn">
                <TelephoneFill />
                +44 20 1234 5678
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
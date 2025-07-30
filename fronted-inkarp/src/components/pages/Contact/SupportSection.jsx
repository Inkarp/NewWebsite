import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdPhone } from 'react-icons/md';

const SupportSection = () => {
  const supportData = [
    {
      title: 'Import / Logistics / Customs\nRelated Enquiries',
      email: 'saritha@inkarp.co.in',
      phone: '9949018605',
    },
    {
      title: 'Accounts / Finance Enquiries',
      email: 'sundar@inkarp.co.in',
      phone: '7032221890',
      alert: true,
    },
    {
      title: 'HR Enquiries',
      email: 'hrd@inkarp.co.in',
      phone: '8886277717',
    },
  ];

  return (
    <StyledSection>
      <div className="text-center mb-8">
        <button className="font-[MaxOT] px-4 py-2 border border-[#E63946] rounded-full font-semibold transition mb-3">
          CONTACT US
        </button>
        <h2 className="heading text-3xl text-[#E63946]">For Support & Enquiries</h2>
        <p className="subheading text-lg ">
          For smooth coordination, please reach out to the respective teams for any of the following queries:
        </p>
      </div>


      <div className="cards">
        {supportData.map((item, idx) => (
          <div key={idx} className="card">
            <div className="bg" />
            <div className="blob" />
            <div className="content">
              <div className="title-row">
                <h3>
                  {item.title.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </h3>
                {/* {item.alert && <span className="dot" title="Immediate Attention Required" />} */}
              </div>
              <p className="info">
                <MdEmail className="icon" />
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </p>
              <p className="info">
                <MdPhone className="icon " />
                <a href={`tel:+91${item.phone}`}>+91 {item.phone}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </StyledSection>
  );
};

export default SupportSection;

const StyledSection = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1rem;
  text-align: center;

  .heading {
    // font-weight: bold;
    margin-bottom: 0.5rem;
    font-family: MaxOT;
  }

  .subheading {
    margin-bottom: 2rem;
    font-family: Roboto;
  }

  .cards {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
  position: relative;
  width: 250px;
  height: 200px;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: MaxOT;
  background-color: #fff;
  z-index: 1;
}

/* 🔄 Animated border */
.card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  border-radius: 16px;
  background: conic-gradient(from 0deg, red, white, red);
  animation: rotate-border 4s linear infinite;
  z-index: 0;
}

/* Masking inner content so only border glows */
.card::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  background: #FFF;
  border-radius: 12px;
  z-index: 1;
}

@keyframes rotate-border {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


  @keyframes blob-bounce {
    0% {
      transform: translate(-50%, -50%) translate(0px, 0px);
    }
    25% {
      transform: translate(-50%, -50%) translate(40px, 0px);
    }
    50% {
      transform: translate(-50%, -50%) translate(40px, 40px);
    }
    75% {
      transform: translate(-50%, -50%) translate(0px, 40px);
    }
    100% {
      transform: translate(-50%, -50%) translate(0px, 0px);
    }
  }

  .content {
    position: absolute;
    z-index: 3;
    text-align: left;
    padding: 1rem;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    font-size: 0.9rem;
  }

  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
  }

  .content h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
    margin: 0;
  }

  .dot {
    position: absolute;
    top: 0;
    right: -10px;
    width: 8px;
    height: 8px;
    background: red;
    border-radius: 50%;
  }

  .icon {
    color: red;
    margin-right: 6px;
    font-size: 1.1rem;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
  }

  .info a {
    color: #333;
    text-decoration: none;
    font-weight: 600;
  }

  .info a:hover {
    color: red;
    text-decoration: underline;
  }
`;

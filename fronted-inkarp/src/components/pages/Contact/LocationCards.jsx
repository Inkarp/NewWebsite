import React from 'react';
import styled from 'styled-components';

const branches = [
  {
    name: "Bengaluru",
    address: "Bengaluru, Karnataka",
    phone: "+91 9000000000",
    email: "bengaluru@inkarp.co.in",
  },
  {
    name: "Chennai",
    address: "Chennai, Tamil Nadu",
    phone: "+91 9000000001",
    email: "chennai@inkarp.co.in",
  },
  {
    name: "Kolkata",
    address: "Kolkata, West Bengal",
    phone: "+91 9000000002",
    email: "kolkata@inkarp.co.in",
  },
  {
    name: "Thiruvananthapuram",
    address: "Thiruvananthapuram, Kerala",
    phone: "+91 9000000003",
    email: "trivandrum@inkarp.co.in",
  },
  {
    name: "Ahmedabad",
    address: "Ahmedabad, Gujarat",
    phone: "+91 9000000004",
    email: "ahmedabad@inkarp.co.in",
  },
  {
    name: "Mumbai",
    address: "Mumbai, Maharashtra",
    phone: "+91 9000000005",
    email: "mumbai@inkarp.co.in",
  },
  {
    name: "Delhi",
    address: "Delhi, New Delhi",
    phone: "+91 9000000006",
    email: "delhi@inkarp.co.in",
  },
  {
    name: "Visakhapatnam",
    address: "Visakhapatnam, Andhra Pradesh",
    phone: "+91 9000000007",
    email: "vizag@inkarp.co.in",
  },
  {
    name: "Pune",
    address: "Pune, Maharashtra",
    phone: "+91 9000000008",
    email: "pune@inkarp.co.in",
  },
  {
    name: "Chandigarh",
    address: "Chandigarh",
    phone: "+91 9000000009",
    email: "chandigarh@inkarp.co.in",
  },
  {
    name: "Vadodara",
    address: "Vadodara, Gujarat",
    phone: "+91 9000000010",
    email: "vadodara@inkarp.co.in",
  },
  {
    name: "Hyderabad",
    address: "Hyderabad, Telangana",
    phone: "+91 9000000010",
    email: "hyderabad@inkarp.co.in",
  },
];

const LocationCards = () => {
  return (
    <GridWrapper>
      {branches.map((branch, index) => (
        <Card key={index}>
          <div className="book">
            <div className="info">
              <h3>{branch.name}</h3>
              <p>{branch.address}</p>
              <p>{branch.phone}</p>
              <p>{branch.email}</p>
            </div>
            <div className="cover">
              <p>{branch.name}</p>
            </div>
          </div>
        </Card>
      ))}
    </GridWrapper>
  );
};

export default LocationCards;

// Styled Components

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  padding: 3rem;
//   background-color: #f5f5f5;
`;

const Card = styled.div`
  .book {
    position: relative;
    width: 100%;
    height: 180px;
    background-color: whitesmoke;
    border-radius: 12px;
    box-shadow: 1px 1px 12px rgba(0,0,0,0.2);
    perspective: 1200px;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color: #000;
  }

  .info {
    padding: 16px;
    z-index: 1;
  }

  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: lightgray;
    border-radius: 12px;
    box-shadow: 1px 1px 12px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transform-origin: left;
    transform: rotateY(0deg);
    transition: transform 0.5s;
    z-index: 2;
  }

  .book:hover .cover {
    transform: rotateY(-90deg);
  }

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  p {
    font-size: 14px;
    margin: 2px 0;
  }
`;

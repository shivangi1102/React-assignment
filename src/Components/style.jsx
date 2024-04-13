import styled from "styled-components";

export const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 10px;
  width: 395px;
  height: 350px;
  box-shadow: 0 1px 2px 1px rgba(90, 90, 90, 0.16);

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const StyledCarousel = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledImage = styled.img`
  height: 250px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
`;

export const StyledButtons = styled.div`
  position: absolute;
  top: 15%;
  right: 3%;
  transform: translateY(-50%);

  cursor: pointer;
`;

export const IconButton = styled.div`
  background-color: rgba(256, 256, 256);
  color: black;
  border: 1px solid rgba(256, 256, 256);
  border-radius: 50%;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bolder;
  padding: 10px 20px;
  padding-bottom: 0px;
  width: 70%;
`;

export const MainTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const VerifiedIcon = styled.div`
  margin-left: 30px;
  height: 18px;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
  padding-left: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  .area {
    font-weight: bold;
  }
`;

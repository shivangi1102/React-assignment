// @ts-nocheck
import styled from "styled-components";

export const LandContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

export const Loader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 20px;
  align-items: center;
`;

export const MenuButton = styled.button`
  background-color: #ffde59;
  border-color: #ffde59;
  color: #333;
  font-weight: 700;
  padding: 8px 15px;
  border-radius: 50px;
  font-style: bolder;
  text-decoration: none;
  margin-left: 15px;
  font-size: 18px;
`;

export const Menu = styled.div`
  display: flex;
  right: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${(props) => (props.isOpen ? "0" : "-100%")};
    width: 100%;
    background-color: #fff;
    transition: left 0.3s ease;
    z-index: 1000;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  color: #fff;
  padding: 22px 100px;
  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.18);
  z-index: 1000;
`;

export const Logo = styled.a``;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: flex;
  }

  span {
    height: 2px;
    width: 25px;
    background-color: #333;
    margin-bottom: 4px;
    border-radius: 5px;
  }
`;

export const MenuItem = styled.a`
  padding: 10px 20px;
  text-decoration: underline;
  color: #000;
  font-size: 18px;
`;

import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "black"};  
  /* #07EFF282*/
  color: ${(p) => (p.color ? "#2E186A" : "#07EFF2")};   #fff
  font-size: 1rem;
  font-weight: 700;
  text-decoration:bold;
  width: 100%;
  border: 2.5px solid #07EFF2;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
  }
`;

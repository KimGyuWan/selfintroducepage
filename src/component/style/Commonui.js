import styled from "styled-components";

export const ControllBtn = styled.button`
position: absolute;
top: 50%;
left: ${(props) => props.leftv ? props.leftv : "0"};
right: ${(props) => props.rightv ? props.rightv : "0"};
transform: translateY(-50%);
z-index: 1;
color: white;
background-color: black;
border: 0;
font-size: 1.5rem;
`;


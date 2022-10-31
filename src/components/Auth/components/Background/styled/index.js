import styled from '@emotion/styled';

export const H1AuthPanel = styled.h1`
  font-size: 3rem;
  color: #fff;
`;

export const DescriptionAuthPanel = styled.p`
  margin-top: 1rem;
  color: rgb(189, 189, 189);
`;

export const RingsContainer = styled.div`
  position: fixed;
  top: 0;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  filter: blur(0.2rem);
`;

export const BackgroundAuthPanel = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
`;

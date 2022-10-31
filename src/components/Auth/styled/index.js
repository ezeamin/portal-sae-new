import styled from '@emotion/styled';

export const H1AuthPanel = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const H2AuthPanel = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const FormSection = styled.section`
  margin: 1.5rem 0;
`;


export const PDFViewerStyled = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const modalStyled = {
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 20,
  height: {
    xs: '95%',
    sm: '90%',
    md: '85%',
  },
  left: '50%',
  outline: 'none',
  p: 2, // padding
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '90%',
    sm: '85%',
    md: '65%',
  },
};

export const IframeStyled = styled.iframe`
  align-self: stretch;
  height: 100%;
`;

export const ButtonWithIconStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 1rem;
  padding-right: 1rem;
  p {
    margin-left: 7px;
    padding-top: 1px;
  }
`;

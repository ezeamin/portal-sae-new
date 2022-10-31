import styled from '@emotion/styled';

import LoadingButton from '@mui/lab/LoadingButton';

import { Paper } from '@mui/material';

export const FlexBox = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems || 'stretch'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  flex-wrap: ${(props) => props.flexWrap || 'nowrap'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};

  @media screen and (max-width: 768px) {
    justify-content: ${(props) =>
      props.justifyContent768 || props.justifyContent || 'flex-start'};
    flex-direction: ${(props) =>
      props.flexDirection768 || props.flexDirection || 'row'};
    align-items: ${(props) =>
      props.alignItems768 || props.alignItems || 'stretch'};
  }
`;

export const H1AuthPanel = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const H2AuthPanel = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const HrStyled = styled.hr`
  height: 1px;
  background-color: #ccc;
  border: none;
`;

export const FormSection = styled.section`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const RoundedButton = styled(LoadingButton)`
  border-radius: 3rem;
  /* width: 100%; */
`;

export const RoundedPaper = styled(Paper)`
  border-radius: 1rem;
  background-color: whiteDarkMode;
`;

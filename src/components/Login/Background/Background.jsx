import { Container } from '@mui/material';

import { DescriptionAuthPanel, H1AuthPanel } from './styled';

import SvgBg from './SvgBg';

const Background = () => {
  return (
    <section style={{ width: '100%' }}>
      <article
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Container maxWidth='sm'>
          <H1AuthPanel>
            Bienvenido al
            <br /> Portal del SAE
          </H1AuthPanel>
          <DescriptionAuthPanel>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            esse iure autem tenetur. Molestias accusamus provident quisquam nisi
            saepe eaque commodi nobis, impedit atque incidunt voluptate soluta
            neque sapiente culpa nostrum voluptas numquam.
          </DescriptionAuthPanel>
        </Container>
      </article>

      {/* Background */}
      <SvgBg />
    </section>
  );
};

export default Background;

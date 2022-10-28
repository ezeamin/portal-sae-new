import { BackgroundAuthPanel, RingsContainer } from './styled';

const bgColor = '#3c6199';
const ringsColor = '#949494';

const SvgBg = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        width: '100%',
        height: '100%',
        zIndex: '-1',
      }}
    >
      {/* Rings */}
      <RingsContainer>
        <svg
          viewBox='90 0 960 540'
          preserveAspectRatio='xMidYMax slice'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            height: '100%',
          }}
        >
          <g fill='none' stroke={ringsColor} strokeWidth='100'>
            <path
              r='234'
              cx='196'
              cy='23'
              d='M430 23A234 234 0 0 1 196 257A234 234 0 0 1 -38 23A234 234 0 0 1 430 23z'
            />
            <path
              r='234'
              cx='790'
              cy='491'
              d='M1024 491A234 234 0 0 1 790 725A234 234 0 0 1 556 491A234 234 0 0 1 1024 491z'
            />
          </g>
        </svg>
      </RingsContainer>

      {/* Background */}
      <BackgroundAuthPanel color={bgColor}/>
    </div>
  );
};

export default SvgBg;

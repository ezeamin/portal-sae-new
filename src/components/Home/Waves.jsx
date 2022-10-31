import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import themes from '../../constants/themes';

const Waves = () => {
  const theme = useSelector((state) => state.globalData.theme);

  const color =
    theme === themes.LIGHT
      ? 'rgba(200,200,200, 0.2)'
      : 'rgba(200,200,200, 0.05)';

  return (
    <Box
      className='animate-in'
      sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: -1 }}
    >
      <svg
        className='waves'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 24 150 28'
        preserveAspectRatio='none'
        shapeRendering='auto'
      >
        <defs>
          <path
            id='gentle-wave'
            d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
          />
        </defs>
        <g className='parallax'>
          <use xlinkHref='#gentle-wave' x='48' y='0' fill={color} />
          <use xlinkHref='#gentle-wave' x='48' y='3' fill={color} />
        </g>
      </svg>
    </Box>
  );
};

export default Waves;

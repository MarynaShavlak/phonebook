import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Adjust the height to match your desired visible area
      position: 'relative',
      top: '0',
      left: '0',
      // backgroundColor: 'green',
    }}
  >
    <ThreeCircles
      height={100}
      width={100}
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#feafe5"
      innerCircleColor="#f7e643"
      middleCircleColor="#abe4ff"
    />
  </div>
);

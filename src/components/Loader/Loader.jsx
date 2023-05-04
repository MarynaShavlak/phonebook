import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeCircles
    height="100"
    width="100"
    wrapperStyle={{ justifyContent: 'center' }}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor="#feafe5"
    innerCircleColor="#f7e643"
    middleCircleColor="#abe4ff"
  />
);

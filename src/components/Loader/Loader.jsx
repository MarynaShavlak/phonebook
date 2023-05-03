import { Circles } from 'react-loader-spinner';

export const Loader = () => (
  <Circles
    height="100"
    width="100"
    color="#f7e643"
    ariaLabel="circles-loading"
    wrapperStyle={{
      justifyContent: 'center',
    }}
    wrapperClass=""
    visible={true}
  />
);

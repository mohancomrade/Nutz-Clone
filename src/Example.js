import { useMediaQuery } from 'react-responsive';

const Example= () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isMobile ? (
        <p>This is the mobile view</p>
      ) : (
        <div>
          <h1>This is the desktop view</h1>
          <p>This is the desktop content</p>
        </div>
      )}
    </div>
  );
};





export default Example;
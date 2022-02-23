import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={456}
      viewBox="0 0 280 456"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="10" y="260" rx="3" ry="3" width="260" height="24" />
      <circle cx="135" cy="120" r="120" />
      <rect x="0" y="304" rx="6" ry="6" width="280" height="85" />
      <rect x="0" y="427" rx="0" ry="0" width="90" height="27" />
      <rect x="126" y="409" rx="30" ry="30" width="152" height="45" />
    </ContentLoader>
  );
};

export default LoadingBlock;

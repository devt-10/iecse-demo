import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

const Wrapper = React.forwardRef<HTMLDivElement, Props>(({children, ...props }, ref) => {
  return <div ref={ref} {...props} >
    {children}
  </div>;
});

export default Wrapper;
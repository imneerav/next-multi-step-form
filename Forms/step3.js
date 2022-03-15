import { useEffect } from "react";
import Router from 'next/router';

const Step3 = ({values}) => {
  useEffect(() => {
    Router.push({ pathname: '/result' });
  }, []);

  return (
    ''
  );
};

export default Step3;
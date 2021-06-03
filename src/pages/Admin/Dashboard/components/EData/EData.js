/** @jsxImportSource @emotion/react */

import { useSelector } from 'react-redux';

const EData = () => {
  const supervisors = useSelector(({ adminData }) => adminData.supervisors);
  const reps = useSelector(({ adminData }) => adminData.reps);

  return <p>sfldjslfjs</p>;
};

export default EData;

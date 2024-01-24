import DetailBody from '@components/DetailBody';
import DetailHead from '@components/DetailHead';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

const DetailWrap = styled.div``;

const Detail = () => {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);
  return (
    <DetailWrap>
      <DetailHead data={data} />
      <DetailBody data={data} />
    </DetailWrap>
  );
};

export default Detail;

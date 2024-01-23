import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

const DetailWrap = styled.div``;

const DetailHead = styled.div`
  padding: 40px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
  h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
  }
`;

const DetailBody = styled.div`
  padding: 40px 0;
  video {
    margin: 0 0 40px 0;
    width: 100%;
  }
`;

const DetailFoot = styled.div``;
const Detail = () => {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);
  return (
    <DetailWrap>
      <DetailHead>
        <h1>{data.vdo_ttl_nm}</h1>
        <span>{data.fbctn_yr}</span>
      </DetailHead>
      <DetailBody>
        <video controls>
          <source
            src={data.file_url + data.file_nm}
            type={`video/${data.file_type_nm}`}
          ></source>
        </video>
        <p>{data.vdo_desc}</p>
      </DetailBody>
    </DetailWrap>
  );
};

export default Detail;

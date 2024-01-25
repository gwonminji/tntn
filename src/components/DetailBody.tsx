import { Item } from '@model/video';
import styled from 'styled-components';

const DetailBodyWrap = styled.div`
  padding: 40px 0;
  video {
    margin: 0 0 40px 0;
    width: 100%;
  }
  p {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.black};
    line-height: 1.25;
  }
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 20px 0;
    video {
      margin: 0 0 30px 0;
    }
    p {
      font-size: 16px;
    }
  }
`;

type Props = {
  data: Item;
};

const DetailBody = ({ data }: Props) => {
  return (
    <DetailBodyWrap>
      <video controls>
        <source
          src={data.file_url + data.file_nm}
          type={`video/${data.file_type_nm}`}
        ></source>
      </video>
      <p>{data.vdo_desc}</p>
    </DetailBodyWrap>
  );
};

export default DetailBody;

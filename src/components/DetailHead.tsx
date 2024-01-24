import { Item } from '@model/video';
import React from 'react';
import styled from 'styled-components';

const DetailHeadWrap = styled.div`
  padding: 40px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
  h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    line-height: 1.5;
  }
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 20px 0;
    h1 {
      font-size: 24px;
    }
  }
`;
type Props = {
  data: Item;
};
const DetailHead = ({ data }: Props) => {
  return (
    <DetailHeadWrap>
      <h1>
        [{data.vdo_ttl_nm}]{data.vdo_desc}({data.img_file_sn})
      </h1>
    </DetailHeadWrap>
  );
};

export default DetailHead;

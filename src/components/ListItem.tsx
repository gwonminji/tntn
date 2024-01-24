import { Link } from 'react-router-dom';

import { Item } from '@model/video';

import styled from 'styled-components';

const ListItemWrap = styled.li``;

const StyledLink = styled(Link)`
  // display: flex;
  display: block;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
    // border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

const ImgBox = styled.div``;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const TextBox = styled.div`
  padding: 30px;
  div {
    margin: 0 0 14px 0;
    display: flex;
    justify-content: flex-end;
  }
  span {
    padding: 0 6px;
    display: inline-block;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    height: 20px;
    line-height: 20px;
    background: ${({ theme }) => theme.colors.blue};
  }
  h1 {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    line-height: 1.5;
  }
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 20px;
    span {
      font-size: 12px;
    }
    h1 {
      font-size: 18px;
    }
  }
`;

type Props = {
  item: Item;
};

const ListItem = ({ item }: Props) => {
  const {
    row_num,
    vdo_ttl_nm,
    vdo_desc,
    img_file_url,
    img_file_nm,
    img_file_sn,
    trng_nm,
  } = item;
  return (
    <ListItemWrap>
      <StyledLink to={`/videoDetail/${row_num}`} state={{ data: item }}>
        <ImgBox>
          <StyledImg src={img_file_url + img_file_nm} />
        </ImgBox>
        <TextBox>
          {trng_nm !== '' && (
            <div>
              <span>{trng_nm}</span>
            </div>
          )}
          <h1>
            [{vdo_ttl_nm}]{vdo_desc}({img_file_sn})
          </h1>
        </TextBox>
      </StyledLink>
    </ListItemWrap>
  );
};

export default ListItem;

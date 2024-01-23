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
  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
  }
`;

type Props = {
  item: Item;
};

const ListItem = ({ item }: Props) => {
  const { row_num, vdo_ttl_nm, img_file_url, img_file_nm } = item;
  return (
    <ListItemWrap>
      <StyledLink to={`/videoDetail/${row_num}`} state={{ data: item }}>
        <ImgBox>
          <StyledImg src={img_file_url + img_file_nm} />
        </ImgBox>
        <TextBox>
          <h1>{vdo_ttl_nm}</h1>
        </TextBox>
      </StyledLink>
    </ListItemWrap>
  );
};

export default ListItem;

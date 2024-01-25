import MainSwiper from '@components/MainSwiper';
import styled from 'styled-components';
import SearchBar from '@components/SearchBar';

const MainSearchWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Main = () => {
  return (
    <>
      <MainSwiper />
      <MainSearchWrap>
        <SearchBar />
      </MainSearchWrap>
    </>
  );
};

export default Main;

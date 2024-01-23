import Pagination from 'react-js-pagination';

import '@styles/components/pagination.css';

import { Desktop, Tablet, Mobile } from '@styles/mediaQuery';

type Props = {
  page: number;
  totalCnt: number;
  handlePageChange: (page: number) => void;
};
const Paging = ({ page, totalCnt, handlePageChange }: Props) => {
  return (
    <>
      <Desktop>
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={totalCnt}
          pageRangeDisplayed={10}
          prevPageText={'‹'}
          nextPageText={'›'}
          onChange={handlePageChange}
        />
      </Desktop>
      <Tablet>
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={totalCnt}
          pageRangeDisplayed={5}
          prevPageText={'‹'}
          nextPageText={'›'}
          onChange={handlePageChange}
        />
      </Tablet>
      <Mobile>
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={totalCnt}
          pageRangeDisplayed={5}
          prevPageText={'‹'}
          nextPageText={'›'}
          onChange={handlePageChange}
        />
      </Mobile>
    </>
  );
};

export default Paging;

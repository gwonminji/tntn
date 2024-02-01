import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Item, TotalCount, PageNo } from '@model/video';
import List from '@components/List';
import ListItem from '@components/ListItem';
import Paging from '@components/Paging';
import SearchBar from '@components/SearchBar';
import SearchHead from '@components/SearchHead';
import Loading from '@components/Loading';

const VideoList = () => {
  const [totalCnt, setTotalCnt] = useState<TotalCount>(0);
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState<PageNo>(1);
  const [keyword, setKeyword] = useState<string | undefined>();

  const location = useLocation();

  useEffect(() => {
    setKeyword(location.state.keyword);
  }, [location.state.keyword]);

  useEffect(() => {
    setPage(location.state.page);
    fetchData();
  }, [location]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    // const HEAD_URL = 'https://apis.data.go.kr';
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com';
    const BASE_URL = 'https://apis.data.go.kr/B551014/SRVC_TODZ_VDO_PKG/';
    const PATH = location.state.path;
    const AUTH_KEY =
      'OA30Kpek0CgUgydasE5bNQvx1AvHivi9DY8W4eCC5jH%2BZpeecOfbDmmggd7ElKdpQc6DF%2FQGx7fslh1DxMVZOg%3D%3D';
    const PAGE_NO = page;
    const NUM_OF_ROWS = 10;
    const RESULT_TYPE = 'json';
    const KEYWORD = location.state.keyword;
    let URL = '';
    if (KEYWORD === undefined) {
      URL = `${BASE_URL}${PATH}?serviceKey=${AUTH_KEY}&pageNo=${PAGE_NO}&numOfRows=${NUM_OF_ROWS}&resultType=${RESULT_TYPE}`;
    } else {
      URL = `${BASE_URL}${PATH}?serviceKey=${AUTH_KEY}&pageNo=${PAGE_NO}&numOfRows=${NUM_OF_ROWS}&resultType=${RESULT_TYPE}&trng_nm=${KEYWORD}`;
    }
    // console.log('URL', URL);
    axios
      .get(URL)
      .then((response) => {
        if (response.data.response.header.resultCode === '00') {
          setTotalCnt(response.data.response.body.totalCount);
          setItems(response.data.response.body.items.item);
          console.log('response data', response.data);
          // console.log('item', response.data.response.body.items.item);
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  };

  const handlePageChange = (page: PageNo) => {
    setPage(page);
  };

  return (
    <>
      <SearchBar />
      {keyword !== undefined && (
        <SearchHead keyword={keyword} totalCnt={totalCnt} />
      )}
      {items.length > 0 ? (
        <List>
          {items.map((item: Item) => (
            <ListItem key={item.row_num} item={item} />
          ))}
        </List>
      ) : (
        <Loading />
      )}
      {/* <Loading /> */}
      {/* <List>
        {items.length > 0
          ? items.map((item: Item) => (
              <ListItem key={item.row_num} item={item} />
            ))
          : 'loading'}
      </List> */}
      {items.length > 0 && (
        <Paging
          page={page}
          totalCnt={totalCnt}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default VideoList;

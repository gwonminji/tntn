import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';
import { Item } from '@model/video';

import List from '@components/List';
import ListItem from '@components/ListItem';
import Paging from '@components/Paging';

const Menu1 = () => {
  const [items, setItems] = useState<Item[] | null>(null);
  const [totalCnt, setTotalCnt] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const location = useLocation();

  useEffect(() => {
    setPage(location.state.paging);
    fetchData();
    console.log(location);
  }, [location]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    // const HEAD_URL = 'https://apis.data.go.kr';
    const BASE_URL = '/B551014/SRVC_TODZ_VDO_PKG/';
    const PATH = location.state.path;
    const AUTH_KEY =
      'OA30Kpek0CgUgydasE5bNQvx1AvHivi9DY8W4eCC5jH%2BZpeecOfbDmmggd7ElKdpQc6DF%2FQGx7fslh1DxMVZOg%3D%3D';
    const PAGE_NO = page;
    const NUM_OF_ROWS = 10;
    const RESULT_TYPE = 'json';
    const URL = `${BASE_URL}${PATH}?serviceKey=${AUTH_KEY}&pageNo=${PAGE_NO}&numOfRows=${NUM_OF_ROWS}&resultType=${RESULT_TYPE}`;
    axios
      .get(URL)
      .then((response) => {
        if (response.data.response.header.resultCode === '00') {
          setTotalCnt(response.data.response.body.totalCount);
          setItems(response.data.response.body.items.item);
          console.log('아이템 : ', response.data.response.body.items.item);
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <List>
        {items &&
          items.map((item: Item) => (
            <ListItem key={item.row_num} item={item} />
          ))}
      </List>
      <Paging
        page={page}
        totalCnt={totalCnt}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Menu1;

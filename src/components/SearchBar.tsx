import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { FaSearch } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SearchBarWrap = styled.form`
  width: 600px;
  margin: 60px auto;
  display: flex;
  border-radius: 4px;
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 100%;
    margin: 40px auto;
    padding: 0 40px;
  }
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    margin: 20px auto;
    padding: 0 20px;
  }
`;

const SearchBarInput = styled.input`
  flex: 1;
  padding: 0 16px;
  width: 100%;
  height: 60px;
  line-height: 58px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    height: 50px;
    line-height: 48px;
    font-size: 16px;
  }
`;

const SearchBarBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.blue};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  svg {
    width: 60%;
    height: 60%;
    color: ${({ theme }) => theme.colors.white};
  }
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    width: 50px;
    height: 50px;
  }
`;

const SearchBar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [keyword, setKeyword] = useState<string>('');
  const keywordInput = useRef<HTMLInputElement>(null);
  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    if (keyword === '') {
      alert('검색어를 입력해주세요.');
    }
    if (keyword !== '') {
      // alert(`입력한 단어 : ${keyword}`);
      // location.location.href = 'videoList';
    }
    if (keywordInput.current !== null) {
      keywordInput.current.focus();
    }
  };

  type State = {
    keyword: string;
    path: string;
    paging: number;
  };
  const state: State = {
    keyword: keyword,
    path: 'TODZ_VDO_VIEW_ALL_LIST_I',
    paging: 1,
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (keyword === '') {
      alert('검색어를 입력해주세요.');
      // keywordInput.current.focus();
      return;
    }
    if (keyword !== '') {
      // alert(`입력한 단어 : ${keyword}`);
      // location.location.href = 'videoList';
      navigate(`/videoList?keyword=${keyword}`, {
        state: state,
      });
      setInput('');
      setKeyword('');
    }
    if (keywordInput.current !== null) {
      keywordInput.current.focus();
    }
  };
  return (
    <SearchBarWrap onSubmit={onSubmit}>
      <SearchBarInput
        type="text"
        placeholder="어떤 운동을 찾으시나요?"
        value={input}
        onChange={handleKeyword}
        ref={keywordInput}
      />
      <SearchBarBtn
        // to={'videoList'}
        // state={{ path: '', paging: 1, keyword: keyword }}
        // onClick={handleSearch}
        title="검색"
      >
        <FaSearch />
      </SearchBarBtn>
    </SearchBarWrap>
  );
};

export default SearchBar;

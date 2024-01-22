import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { FaSearch } from 'react-icons/fa';

const SearchWrap = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  border-radius: 4px;
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 100%;
    padding: 0 40px;
  }
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 0 20px;
  }
`;

const SearchInput = styled.input`
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
    height: 40px;
    line-height: 38px;
    font-size: 16px;
  }
`;

const SearchBtn = styled.button`
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
    width: 40px;
    height: 40px;
  }
`;

const Search = () => {
  const [input, setInput] = useState('');
  const [keyword, setKeyword] = useState('');
  const keywordInput = useRef<HTMLInputElement>(null);
  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    alert(`입력한 단여 : ${keyword}`);
    if (keywordInput.current !== null) {
      keywordInput.current.focus();
    }
  };
  return (
    <SearchWrap>
      <SearchInput
        type="text"
        placeholder="검색어를 입력하세요."
        value={input}
        onChange={handleKeyword}
        ref={keywordInput}
      />
      <SearchBtn onClick={handleSearch}>
        <FaSearch />
      </SearchBtn>
    </SearchWrap>
  );
};

export default Search;

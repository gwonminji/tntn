import { TotalCount } from '@model/video';
import styled from 'styled-components';

const SearchHeadWrap = styled.div`
  margin: 60px 0;
  padding: 60px 0px;
  border-top: 1px solid ${({ theme }) => theme.colors.blue};
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  p {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    line-height: 1.25;
  }
  span {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 600;
  }
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    margin: 50px 0;
    padding: 50px 0px;
  }
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    margin: 40px 0;
    padding: 40px 0px;
    p {
      font-size: 20px;
    }
  }
`;

type Props = {
  keyword: string;
  totalCnt: TotalCount;
};

const SearchHead = ({ keyword, totalCnt }: Props) => {
  return (
    <SearchHeadWrap>
      <p>
        &quot;<span>{keyword}</span>&quot;(으)로 검색한 결과 운동 영상은 총
        &quot;
        <span>{totalCnt}</span>&quot;개입니다.
      </p>
    </SearchHeadWrap>
  );
};

export default SearchHead;

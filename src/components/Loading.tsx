import styled from 'styled-components';
import Lottie from 'lottie-react';
import loadingLottie from '@assets/lottie/loading.json';
const LoadingWrap = styled.div`
  position: relative;
`;
const LottieBox = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Loading = () => {
  return (
    <LoadingWrap>
      <LottieBox>
        <Lottie animationData={loadingLottie} />
      </LottieBox>
    </LoadingWrap>
  );
};

export default Loading;

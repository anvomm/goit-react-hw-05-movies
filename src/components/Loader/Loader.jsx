import { ProgressBar } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => (
  <StyledLoader>
    <ProgressBar
      height="70"
      width="150"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#5ce4cf"
      barColor="#99a9ff"
    />
  </StyledLoader>
);

import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  
@media (max-width: 576px) {
  .container {
    padding: 0 5px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 10px;
  }
  
}


@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    padding: 0 15px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 20px;
  }
}
`;

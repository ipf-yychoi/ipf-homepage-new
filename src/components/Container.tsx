import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px calc((100% - 1040px) / 2);
  width: 100%;
  flex-wrap: wrap;

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
    padding: 80px calc((100% - 320px) / 2);
  }
`;

export default Container;

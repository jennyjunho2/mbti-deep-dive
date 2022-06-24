import styled from 'styled-components';

const ButtonBar = styled.div`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.8);
`;

const ButtonForm = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  color: rgba(0, 0, 0, 0.3);
  &:hover {

  }
`;

function Buttons() {
  return <ButtonBar></ButtonBar>;
}

export default Buttons;

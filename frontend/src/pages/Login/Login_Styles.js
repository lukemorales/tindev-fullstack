import styled from 'styled-components';

export const Container = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;

    input {
      margin: 20px 0 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 48px;
      padding: 0 20px;
      font-size: 16px;
      color: #666;
      background: #f8f8f2;

      &::placeholder {
        color: #999;
      }
    }

    button {
      border-radius: 4px;
      height: 48px;
      font-size: 16px;
      background: #df4723;
      color: white;
    }
  }
`;

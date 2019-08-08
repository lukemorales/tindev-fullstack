import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.main`
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;

  header + div {
    font-size: 20px;
    color: #65666d;
    font-weight: bold;
    margin-top: 300px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;

    li {
      display: flex;
      flex-direction: column;

      header {
        max-width: 100%;
        max-height: 300px;
        border-radius: 4px 4px 0 0;
        overflow: hidden;
        background: #44475a;

        img {
          max-width: 100%;
          object-fit: cover;
        }
      }

      section {
        flex: 1;
        background: #44475a;
        border: 1px solid #44475a;
        padding: 15px 20px;
        text-align: left;
        border-radius: 0 0 4px 4px;

        h2 {
          font-size: 16px;
          color: #fff;
        }

        p {
          font-size: 14px;
          line-height: 20px;
          color: #ccccc7;
          margin-top: 5px;
        }
      }

      footer {
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;

        button {
          height: 50px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
          border-radius: 4px;
          background: #44475a;
          transition: all 150ms ease-in-out;

          &:hover {
            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
            transform: translateY(-1px);
            background: ${lighten(0.03, '#44475a')};
          }

          &:active {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.8);
            transform: translateY(1px);
            background: ${darken(0.03, '#44475a')};
          }
        }
      }
    }
  }
`;

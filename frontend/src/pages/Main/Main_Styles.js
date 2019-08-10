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

export const MatchContainer = styled.aside`
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);

  article {
    margin-top: 50px;
    max-width: 400px;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 5px solid #44475a;
    }

    h1 {
      margin-top: 20px;
      font-size: 32px;
      color: #fff;
    }

    p {
      margin-top: 10px;
      font-size: 20px;
      line-height: 30px;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  footer {
    margin-top: 10px;

    button {
      height: 50px;
      border-radius: 4px;
      background: none;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
      transition: all 150ms ease-in-out;

      &:hover {
        transform: translateY(-1px);
      }

      &:active {
        transform: translateY(1px);
      }
    }
  }
`;

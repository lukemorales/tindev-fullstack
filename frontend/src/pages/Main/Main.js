import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './Main_Styles';

import logo from '~/assets/logo.svg';
import like from '~/assets/like.svg';
import dislike from '~/assets/dislike.svg';

import api from '~/services/api';

export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('devs', {
        headers: {
          user: match.params.ID,
        },
      });

      setUsers(response.data);
    })();
  }, [match.params.ID]);

  async function handleDislike(ID) {
    await api.post(`devs/${ID}/dislikes`, null, {
      headers: {
        user: match.params.ID,
      },
    });

    setUsers(users.filter(user => user._id !== ID));
  }

  async function handleLike(ID) {
    await api.post(`devs/${ID}/likes`, null, {
      headers: {
        user: match.params.ID,
      },
    });

    setUsers(users.filter(user => user._id !== ID));
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <img src={logo} alt="tinDev" />
        </Link>
      </header>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <header>
                <img src={user.avatar} alt={user.name} />
              </header>

              <section>
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
              </section>

              <footer>
                <button type="button" onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt="Dislike Dev" />
                </button>
                <button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="Like Dev" />
                </button>
              </footer>
            </li>
          ))}
        </ul>
      ) : (
        <div>Oops... there are no devs available at the moment. </div>
      )}
    </Container>
  );
}

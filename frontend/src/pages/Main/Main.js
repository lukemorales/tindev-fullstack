import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';

import { Container, MatchContainer } from './Main_Styles';

import logo from '~/assets/logo.svg';
import like from '~/assets/like.svg';
import dislike from '~/assets/dislike.svg';
import itsamatch from '~/assets/itsamatch.png';

import api from '~/services/api';

export default function Main({ match }) {
  const [users, setUsers] = useState([]);
  const [itsAMatch, setItsAMatch] = useState(null);

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

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user: match.params.ID },
    });

    socket.on('match', dev => {
      setItsAMatch(dev);
    });
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

      {itsAMatch && (
        <MatchContainer>
          <header>
            <img src={itsamatch} alt="It's a Match" />
          </header>
          <article>
            <img src={itsAMatch.avatar} alt={itsAMatch.name} />
            <h1>{itsAMatch.name}</h1>
            <p>{itsAMatch.bio}</p>
          </article>
          <footer>
            <button type="button" onClick={() => setItsAMatch(null)}>
              Close
            </button>
          </footer>
          {/* <img src={users && users[0]} alt={users[0].name} /> */}
        </MatchContainer>
      )}
    </Container>
  );
}

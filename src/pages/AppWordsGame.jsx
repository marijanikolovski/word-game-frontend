import React, { Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectPoints, selectResponse, selectSearchTerm } from '../store/game/selector';
import { setPoints, setResponse, setSearchTerm, wordsGame } from '../store/game/slice';
import { GameSearchComponent } from '../component/GameSearchComponent';
import { useHistory } from 'react-router-dom';

export const AppWordsGame = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const points = useSelector(selectPoints);
  const term = useSelector(selectSearchTerm);
  const response = useSelector(selectResponse);

  function handleSearchTerm(event) {
    dispatch(setSearchTerm(event.target.value));
  }

  function handleSearchWord() {
    dispatch(wordsGame({ term: term }));
    history.push("/");
  }

  function handleResetGame() {
    dispatch(setPoints({}));
    dispatch(setResponse(''))
  }

  return (
    <div>
      <h1>Word Game</h1>
      <div className='content'>
        <div className='search-score'>
          <div className='search'>
            <GameSearchComponent
              handleSearchTerm={handleSearchTerm}
              searchWord={handleSearchWord}
              resetGame={handleResetGame}
            />
          </div>
          <div className='score'>
            {points.points &&
              (<h3>You have won {points.points} points.</h3>)
            }
            {response &&
              <h3>{response}</h3>
            }

          </div>
        </div>
        <div className='instructions'>
          <h4>The rules of the game:</h4>
          <h5 className='item'>✶ Write an english word.</h5>
          <h5 className='item'>✶ You get 1 point for each unique letter.</h5>
          <h5 className='item'>✶ You get 3 points if the word is a palindrome.</h5>
          <h5 className='item'>✶ You get 2 points if the word is almost a palindrome.</h5>
          <h5 className='item'>(by removing one letter from a word, the word will be a palindrome)</h5>
        </div>
      </div>
    </div >
  );
}

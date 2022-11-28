import { useState } from 'react';

function Search() {
  const [searchValue, setSearchValue] = useState('sveiki');
  const [searchDone, setSearchDone] = useState(false);

  // padaryti kad veiktu isSearchValueEmpty
  // const isSearchValueEmpty = searchValue.length || false;
  const isSearchValueEmpty = !searchValue.length;

  function inputHandler(event) {
    // console.log('event ===', event);
    // console.log('    event.target.value ===', event.target.value);

    // =======  One Way Binding ========
    const enteredValue = event.target.value;
    setSearchValue(enteredValue);
  }

  function searchHandler(event) {
    // when user pressed search
    const newSearchObj = { term: searchValue.trim() };
    console.log('newSearchObj ===', newSearchObj);
    // siusti paieskos objekta, {term: <paieskosReiksme>}
    // isvalyti paieskos laukas
    setSearchValue('');
    // atvaizduoti ko ieskojau
    setSearchDone(true);
  }

  console.log('searchValue ===', searchValue);

  return (
    <fieldset>
      <legend>Search</legend>
      {/* two way biding effect */}
      <input onChange={inputHandler} value={searchValue} type='search' />
      {/* <input veikia tik su vienu veiksmu: */}
      {/* onChange={(event) => setSearchValue(event.target.value)}  */}
      {/* value={searchValue}
      type='search' /> */}
      <button onClick={searchHandler}>Search</button>
      {/* rodyti priklausomai  ar yra */}
      {/* kur rodys */}
      {/* {searchValue && <h3>You have search for: {searchValue}</h3>} */}
      {!isSearchValueEmpty && <h3>You have entered: {searchValue}</h3>}
      {searchDone && isSearchValueEmpty && <h3>Your Search was sent </h3>}
    </fieldset>
  );
}

export default Search;

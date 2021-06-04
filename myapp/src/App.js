import './App.css';
import MovieList from './Components/MovieList/MovieList.js'
import Filter from './Components/Filter/Filter'
import { movies } from './Data'
import { Component, useState } from 'react';
import MoviePage from './Components/Movie_page/Movie_page';
import { Route } from "react-router-dom"

function App() {

  const [Movie, SetMovie] = useState(movies);
  const [titre, SetTitre] = useState("");
  const [rating, SetRating] = useState(1);

  const add_movie = (new_movie) => { SetMovie([...Movie, new_movie]) }

  let filter_tab = [];
  let val_titre = titre.toLowerCase().trim();

  filter_tab = Movie.filter(el => (el.title.toLowerCase().includes(val_titre)) && (el.rating >= rating))

  return (
    <div className="App">
      <Route exact path="/">
        <Filter val_titre={SetTitre} val_rating={SetRating} set_list={add_movie} state_rating={rating} />
        <MovieList {...filter_tab} />
      </Route>
      <Route exact path={`/movie/:title`} render={(props)=><MoviePage Movie={Movie} {...props} />} />
    </div>
  );
}

export default App;

import React from "react";
import axios from "axios";
import Movie from "./Movie";
import Book from "./Book";
import "./App.css";

class App extends React.Component {

  
  state = {
    isLoading: true,
    movies: [],
    books: [],
    query: "Na"
  };

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  getBooks = async() =>{
    const { query } = this.state;
    const {data:{documents:books}} = await axios({
      url: `https://dapi.kakao.com/v3/search/book?query=${query}`,
      method: 'get',
      headers: {Authorization: `KakaoAK dfa03086c4a2134d8fe234a777eaa281`}
    })
    console.log(books);
    this.setState({ books, isLoading: false });
    

    //.then(function (response) {
    //console.log(response);
    //console.log(response.data.documents[0].thumbnail)
    //p.append("<strong>" + response.data.documents[0].title + "</strong>");
    

    };




  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });

    console.log(movies)
  };
  componentDidMount() {
    this.getMovies();
    this.getBooks();
  }
  render() {
    const { isLoading, movies, books } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div>
            <div className="movies">
              {/*movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))*/}
            </div>
            <form>
              <label>
                Name:
                <input id="bookName" type="text" value={this.state.query} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
            <div className="books">
              {books.map(book => (
                <Book
                  key={book.id}
                  title={book.title}
                  contents={book.contents}
                  thumbnail={book.thumbnail}
                  price={book.price}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default App;

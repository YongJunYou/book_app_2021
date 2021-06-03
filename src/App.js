import React from "react";
import axios from "axios";
import Book from "./Book";
import "./App.css";

class App extends React.Component {

  
  state = {
    isLoading: true,
    books: [],
    query: "미움받을 용기"
  };


  handleChange = (event) => {
    this.setState({query: event.target.value});
  }

  handleSubmit = (event) => {
	this.getBooks();
	event.preventDefault();
  }

  getBooks = async() =>{
    const { query } = this.state;
    const {data:{documents:books}} = await axios({
      url: `https://dapi.kakao.com/v3/search/book?query=${query}`, //이거 나중에 parse로 보안해줘야하나
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


  componentDidMount() {
    this.getBooks();
  }
  render() {
    const { isLoading, books, query } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div>
			  <form className="search_bar" onSubmit={this.handleSubmit}>
				<label>
				  책이름:
				  <input type="text" value={query} onChange={this.handleChange} />
				</label>
				<input type="submit" value="검색" />
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

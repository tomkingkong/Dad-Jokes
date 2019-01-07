class LoggedIn extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    }
  }

  logout = () => {
    localStorage.removeItem("id_token");
    localStorage.removeItem("access_token");
    localStorage.removeItem("profile");
    location.reload();
  }

  serverRequest = () => {
    $.get("http://localhost:3000/api/jokes", res => {
      this.setState({
        jokes: res
      });
    });
  }

  componentDidMount() {
    this.serverRequest();
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <br />
          <span className="pull-right">
            <a onClick={this.logout}>Log Out</a>
          </span>
          <h2>Dad Jokes</h2>
          <p>Let's feed you with some funny jokes!!</p>
          <div className="row">
            {this.state.jokes.map((joke, i) => <Joke key={i} joke={joke} />)}
          </div>
        </div>
      </div>
    )
  }
}

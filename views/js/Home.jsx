class Home extends React.Component {
  authenticate = () => {
    this.WebAuth = new auth0.WebAuth({
      domain: AUTH0_DOMAIN,
      clientID: AUTH0_CLIENT_ID,
      scope: "openid profile",
      audience: AUTH0_API_AUDIENCE,
      responseType: "token id_token",
      redirectUri: AUTH0_CALLBACK_URL
    });
    this.WebAuth.authorize();
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-8 col-xs-offset-2 jumbotron text-center">
          <h1>Dad Jokes</h1>
          <p>A load of Dad jokes XD</p>
          <p>Sign in to get access</p>
          <a 
            onClick={this.authenticate} 
            className="btn btn-primary btn-lg btn-login btn-block">
            Sign In</a>
        </div>
      </div>
    )
  }
}

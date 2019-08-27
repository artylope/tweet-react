var monkey = "hello";
// var profile = tweets.user.name

console.log(tweets.user);


class App extends React.Component {

    render() {
        return (

          <div className="feed">

            <Feed tweets = {tweets} />
          </div>
        );
    }
}


class Feed extends React.Component {

    render() {

      let tweetsList = this.props.tweets.map(function(tweet, index){
                              return (
                                <div className="tweet-container" key={index}>
                                    <div className="user-avatar">
                                      <img src={tweet.user.profile_image_url}/>
                                    </div>
                                    <div className="tweet-content">
                                        <div className="user-username">{tweet.user.name}
                                            <div className="verified"></div>
                                            <span className="user-handler">@{tweet.user.screen_name}</span>
                                          <span className="tweet-date">{tweet.created_at}</span>
                                        </div>
                                        <div className="tweet-text">{tweet.text}</div>
                                    </div>
                                </div>
                            )
                            });
        return (
          <div>
            { tweetsList}
          </div>
        );
    }
}

class User extends React.Component{

  render(){

    return (
      <div>ash</div>
    )
  }
}




ReactDOM.render(<App/>,document.getElementById('app'));

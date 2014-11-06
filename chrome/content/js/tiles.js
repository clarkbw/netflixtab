/** @jsx React.DOM */

var Tile = React.createClass({
  getDefaultProps: function() {
    return {
      url: 'about:blank',
      title: "Blank"
    };
  },
  render: function() {
    var liStyle = {
      backgroundColor: this.props.tile.bgColor || "",
      backgroundImage: 'url(' + this.props.tile.imageURI + ')'
    };
    return (
      <div className="tile col-xs-12 col-sm-6 col-lg-4" style={liStyle}>
        <a href={this.props.tile.url}>
          <div >{this.props.tile.title}</div>
        </a>
      </div>
    );
  }
});

var TileGrid = React.createClass({
  getInitialState: function() {
    return {
      tiles: []
    };
  },
  componentDidMount: function() {
    // console.log("GRID:this.props.category", this.props.category);
    addon.on("tiles", function(items) {
      if (Array.isArray(items)) {
        console.log("TILES", items);
        if (this.isMounted()) {
          this.setState({ tiles: items });
        }
      }
    }.bind(this));
    addon.emit("ready");
  },
  render: function() {
    var results = this.state.tiles;
    return (
      <div className="row">
        {results.map(function(result) {
          return <Tile tile={result}/>;
        })}
      </div>
    );
  }
});

var MediaItem = React.createClass({
  render: function() {
    console.log(this.props.link, this.props.link.siteType);
    var imgStyle = {
      display: (this.props.link.siteType == "website") ? "none" : "block",
      backgroundImage: 'url(' + this.props.link.imageURI + ')'
    };
    return (
      <a className="media cat-item" href={this.props.link.url}>
        <div className="media-left">
          <img className="link-favicon-circle" src={this.props.link.favicon} />
        </div>
        <div className="media-body">
          <div className="media-heading">{this.props.link.title}</div>
          <p className="text-muted media-text">{this.props.link.description}</p>
          <div className="link-image" style={imgStyle} />
        </div>
      </a>
    );
  }
});

var MediaList = React.createClass({
  render: function() {
    return (
      <div>
        <h4 className="text-muted">{this.props.title}</h4>
        <div>
          {this.props.links.map(function(result) {
            return <MediaItem link={result} />;
          })}
        </div>
      </div>
    );
  }
});

var LinkList = React.createClass({
  render: function() {
    if (this.props.links.length < 1) {
      return (<div/>);
    }
    return (
      <div>
        <h4 className="text-muted">{this.props.title}</h4>
        <ol className="list-unstyled">
          {this.props.links.map(function(result, index) {
            return <li className="link-item"><a href={result.url}><img className="link-favicon-square" src={result.favicon}/> {result.title}</a></li>;
          })}
        </ol>
      </div>
    );
  }
});

var searches = [ { url : "http://google.com/search?q=sushi", title : "sushi", imageURI : ""},
              { url : "http://google.com/search?q=coffee%20shops", title : "coffee shops", imageURI : "" },
              { url : "http://google.com/search?q=fitbit", title : "fitbit", imageURI : "" } ];

var links = [ { url : "http://facebook.com", title : "Facebook", description : "The Facebook site", imageURI : "", type: "website"},
              { url : "http://youtube.com", title : "YouTube", description : "All the vids", imageURI : "", type: "website" },
              { url : "http://reddit.com", title : "Reddit", description : "Crazy internet discussion hole", imageURI : "", type: "website" } ];

var RecentSites = React.createClass({
  getInitialState: function() {
    return {
      links: links
    };
  },
  componentDidMount: function() {
    addon.on("history:reset", function(items) {
      if (Array.isArray(items)) {
        if (this.isMounted()) {
      console.log("HISTORY", items);
          this.setState({ links: items });
        }
      }
    }.bind(this));
  },
  render: function() {
    return (
      <MediaList title="Recent Sites" links={this.state.links}/>
    );
  }
});

var RecentSearches = React.createClass({
  getInitialState: function() {
    return {
      links: searches
    };
  },
  componentDidMount: function() {
    addon.on("searches:reset", function(items) {
      if (Array.isArray(items)) {
        if (this.isMounted()) {
          this.setState({
            links: items
          });
        }
      }
    }.bind(this));
  },
  render: function() {
    return (
      <LinkList title="Recent Searches" links={this.state.links}/>
    );
  }
});

var SuggestedSites = React.createClass({
  getInitialState: function() {
    return {
      links: links
    };
  },
  componentDidMount: function() {
    addon.on("suggestions", function(items) {
      if (Array.isArray(items)) {
        if (this.isMounted()) {
          this.setState({
            links: items
          });
        }
      }
    }.bind(this));
  },
  render: function() {
    return (
      <MediaList title="Suggested Sites" links={this.state.links}/>
    );
  }
});

var RecentBookmarks = React.createClass({
  getInitialState: function() {
    return {
      links: []
    };
  },
  componentDidMount: function() {
    addon.on("bookmarks", function(items) {
      if (Array.isArray(items)) {
        if (this.isMounted()) {
          this.setState({
            links: items
          });
        }
      }
    }.bind(this));
  },
  render: function() {
    return (
      <LinkList title="Recent Bookmarks" links={this.state.links}/>
    );
  }
});

var NewTabPage = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-8">
          <TileGrid/>
        </div>
        <div className="col-xs-6 col-sm-4">
          <RecentSites/>
          <RecentSearches/>
          <SuggestedSites/>
          <RecentBookmarks/>
        </div>
      </div>
    );
  }
});

React.render(
  <NewTabPage/>,
  document.getElementById('tiles')
);

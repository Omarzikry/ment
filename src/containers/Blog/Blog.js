import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import Post from "./Post/Post";
import { Route, Switch } from "react-router-dom";
class Blog extends Component {
  componentDidMount() {
    this.props.onFetchArticles();
  }

  handleClick = (id, article) => {
    this.props.history.push("/blog/" + id);
    this.setState({ currentArticle: article });
  };

  style = {
    paddingTop: "300px"
  };

  render() {
    let posts = <Spinner />;

    if (!this.props.loading) {
      posts = this.props.articles.map(article => {
        return (
          <div
            onClick={this.handleClick.bind(this, article.id, article)}
            key={article.id}
          >
            <h2>{article.title}</h2>
          </div>
        );
      });
    }

    return (
      <Switch>
        <Route path="/blog/:id" component={Post} />
        <Route
          path="/blog"
          render={() => {
            return <div style={this.style}>{posts}</div>;
          }}
        />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchArticles: () => {
      dispatch(actionCreators.fetchArticles());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);

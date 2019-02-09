import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import Post from "./Post/Post";
import { Route, Switch } from "react-router-dom";
import FeaturdNews from "../../components/FeaturedNews/FeaturedNews";
import BlogPostsGrid from "../../components/BlogPostsGrid/BlogPostsGrid";
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
    const { articles, loading } = this.props;

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
            return (
              <Fragment>
                <FeaturdNews articles={articles} loading={loading} />
                <BlogPostsGrid articles={articles} loading={loading} />
              </Fragment>
            );
          }}
        />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    loading: state.loading
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

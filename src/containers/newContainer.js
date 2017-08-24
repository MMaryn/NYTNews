import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loadNews } from "../action/newsAction";
import NewsFeed from "./NewsFeed";
import { reshapeNewsData } from "../core/parseData.js";

const mapStateToProps = state => ({
    news: reshapeNewsData(state.news)
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({ loadNews }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
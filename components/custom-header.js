const React = require('react');

class CustomHeader extends React.Component {

    constructor(props) {
      super(props);
      console.log('Initializing Header.')
    }
  
    render() {
    const title = this.props.title;
    const author = this.props.author;
    const date = this.props.date;
    const category = this.props.category;
    const url = this.props.external_url;

    return (
        <div className="inline-header">
            <div className="article-category">{category}</div>
            <h1 className='typography-paragraph-header'>{title}</h1>
            <div className="article-details">
                <div className="article-detail">PUBLISHED <span>{date}</span></div>
                <div className="article-detail">CREATOR: <span><a href={url}>{author}</a></span></div>
            </div>
        </div>
      );
    }
  }
  
  module.exports = CustomHeader;
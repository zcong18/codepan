webpackJsonp([12],{152:function(n,t){n.exports='/* @jsx h */\nconst { Component, h, render } = preact\n\nconst githubStars = repo => fetch(`https://api.github.com/repos/${repo}`)\n  .then(res => res.json())\n  .then(res => res.stargazers_count)\n\nclass Stars extends Component {\n  async componentDidMount() {\n    const stars = await githubStars(this.props.repo)\n    this.setState({ stars })\n  }\n  render({ repo }, { stars = 0 }) {\n    const url = `//github.com/${repo}`\n    return (\n            <a href={url} class="stars">\n                ⭐️ {stars} Stars\n            </a>\n    )\n  }\n}\n\nrender(<Stars repo="developit/preact" />, document.body)\n'}});
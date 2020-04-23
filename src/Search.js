import React, { Component } from "react";
import "./Search.css";

import daum_icon from "./img/daum_icon.png";
import google_icon from "./img/google_icon.png";
import naver_icon from "./img/naver_icon.png";
import youtube_icon from "./img/YouTube_icon.png";

class Search extends Component {
  state = {
    engines: [
      {
        id: 0,
        name: "Google",
        engine: "https://www.google.com/search?q=",
        img: google_icon,
        select: true,
      },
      {
        id: 1,
        name: "Naver",
        engine:
          "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=",
        img: naver_icon,
      },
      {
        id: 2,
        name: "Daum",
        engine: "https://search.daum.net/search?w=tot&q=",
        img: daum_icon,
      },
      {
        id: 3,
        name: "YouTube",
        engine: "https://www.youtube.com/results?search_query=",
        img: youtube_icon,
      },
    ],
    inputMessage: "",
    selected: 0,
  };

  changeStyle = () => {};

  submitInput = (e) => {
    const { engines, inputMessage, selected } = this.state;
    e.preventDefault();
    window.open(engines[selected].engine + inputMessage);
  };

  handleMessage = (e) => {
    this.setState({
      inputMessage: e.target.value,
    });
  };

  componentDidMount() {
    document
      .querySelector(".engines:first-child input")
      .setAttribute("checked", "true");
  }

  render() {
    const { engines } = this.state;

    return (
      <div className="search">
        <form onSubmit={this.submitInput}>
          <div className="engines">
            {engines.map((e) => (
              <label key={e.id}>
                <input
                  type="radio"
                  name="engine"
                  value={e.id}
                  onClick={() => {
                    this.setState({ selected: e.id });
                    this.changeStyle();
                  }}
                />
                <img src={e.img} alt={e.name} width="15"></img>
                {e.name}
              </label>
            ))}
          </div>

          <div id="searchBar">
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              value={this.state.inputMessage}
              onChange={this.handleMessage}
              name="input"
              autoFocus
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;

import React, { Component } from "react";
class BookMovie extends Component {
  state = {
    price: ["101-200", "201-300", "301-400"],
    showTime: ["Morning", "Afternoon", "Evening", "Night"],
  };
  render() {
    console.log(this.props.movieData.showTiming[0]);
    var today = new Date(),
      date =
        today.getDate() +
        " " +
        today.toLocaleString("default", { month: "long" });
    let tomorrow =
      today.getDate() +
      1 +
      " " +
      today.toLocaleString("default", { month: "long" });
    var nextDay = new Date(tomorrow + "," + today.getFullYear());
    nextDay =
      nextDay.getDate() +
      1 +
      " " +
      nextDay.toLocaleString("default", { month: "long" });
    let dateData = [date, tomorrow, nextDay];
    return (
      <div className="container-fluid">
        <div className="row bg-secondary text-white pt-4">
          <div className="col">
            <h3>{this.props.movieData.title}</h3>
          </div>
        </div>
        <div className="row bg-secondary text-white">
          <div className="col">
            <i className="fas fa-heart" style={{ color: "#d6181f" }}></i>&nbsp;
            <span style={{ fontSize: "20px" }}>
              <strong>{this.props.movieData.rating}</strong>
            </span>
            &nbsp;&nbsp;
            <span
              className="badge"
              style={{
                width: "80px",
                height: "20px",
                fontSize: "12px",
                padding: "2px 8px",
                borderRadius: "11px",
                border: "1px solid rgba(255,255,255,.5",
                marginLeft: "5px",
                textTransform: "uppercase",
                display: "inline-block",
              }}
            >
              Action
            </span>
            &nbsp;
            <span
              className="badge"
              style={{
                width: "80px",
                height: "20px",
                fontSize: "12px",
                padding: "2px 8px",
                borderRadius: "11px",
                border: "1px solid rgba(255,255,255,.5",
                marginLeft: "5px",
                textTransform: "uppercase",
                display: "inline-block",
              }}
            >
              Thriller
            </span>
          </div>
        </div>
        <div className="row bg-secondary text-white">
          <div className="col">
            <span style={{ fontSize: "12px" }}>
              {this.props.movieData.votes},votes
            </span>
          </div>
        </div>
        <div className="row bg-light pt-2 pb-2">
          <div className="col-lg-5">
            {dateData.map((d) => (
              <button
                key={d}
                className="btn btn-sm btn-light m-1"
                id="buttoncss-true"
              >
                <b>{d}</b>
              </button>
            ))}
          </div>
          <div className="col-lg-2 border-right d-none d-lg-block">
            <div className="dropdown">
              <div className="dropbtn1">
                {" "}
                Filter Price &nbsp;
                <span>
                  <i
                    className="fa fa-chevron-down"
                    id="onhover"
                    style={{ fontSize: "10px", color: "lightgray" }}
                  ></i>
                </span>
              </div>
              <div className="dropdown-content">
                {this.state.price.map((p) => (
                  <div key={p}>
                    <div className="checkbox ml-1">
                      <label>
                        <input
                          type="checkbox"
                          value="item.value"
                          className="ng-untouched ng-pristine ng-valid"
                        />
                        &nbsp;Rs. {p}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-2 border-right d-none d-lg-block">
            <div className="dropdown">
              <div className="dropbtn1">
                {" "}
                Filter Showtime &nbsp;&nbsp;
                <span>
                  <i
                    className="fa fa-chevron-down"
                    id="onhover"
                    style={{ fontSize: "10px", color: "lightgray" }}
                  ></i>
                </span>
              </div>
              <div className="dropdown-content">
                {this.state.showTime.map((p) => (
                  <div key={p}>
                    <div className="checkbox ml-1">
                      <label>
                        <input
                          type="checkbox"
                          value="item.value"
                          className="ng-untouched ng-pristine ng-valid"
                        />
                        &nbsp;&nbsp;{p}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 col-12">
            <div
              className="row"
              style={{ backgroundColor: "rgb(245,191,169)" }}
            >
              <div className="col-lg-6 col-6 border-right">
                <div className="row">
                  <span className="logo nav-item">
                    <svg
                      xmlSpace="preserve"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ height: "45", style: "fill:green" }}
                      version="1.1"
                      viewBox="0 0 130 45"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M73.5 95.2H26.8c-1.3 0-2.3-1-2.3-2.3V7.6c0-1.3 1-2.3 2.3-2.3h46.7c1.3 0 2.3 1 2.3 2.3V93c0 1.2-1.1 2.2-2.3 2.2zM26.8 6.4c-.6 0-1.1.5-1.1 1.1v85.4c0 .6.5 1.1 1.1 1.1h46.7c.6 0 1.1-.5 1.1-1.1V7.6c0-.6-.5-1.1-1.1-1.1l-46.7-.1z"></path>
                      <path d="M68.8 78.9H31.3c-.6 0-1.2-.5-1.2-1.2V16c0-.6.5-1.2 1.2-1.2h37.5c.6 0 1.2.5 1.2 1.2v61.7c0 .6-.5 1.2-1.2 1.2zm0-62.9H31.3v61.6h37.4l.1-61.6zm-19 74.4c-2.3 0-4.1-1.9-4.1-4.1 0-2.3 1.9-4.1 4.1-4.1 2.3 0 4.1 1.9 4.1 4.1a4 4 0 0 1-4.1 4.1zm0-7.1a2.9 2.9 0 1 0 2.9 2.9c.1-1.5-1.2-2.9-2.9-2.9zm-5.5-72.1h-1.6c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h1.6c.3 0 .6.3.6.6s-.3.6-.6.6zm11 0h-6.5c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h6.5c.3 0 .6.3.6.6s-.2.6-.6.6z"></path>
                    </svg>
                  </span>
                </div>
                <div className="row" style={{ size: "2px", fontSize: "10px" }}>
                  <span>M-Ticket Available</span>
                </div>
              </div>
              <div className="col-lg-6 col-6 border-right">
                <div className="row">
                  <span className="logo nav-item">
                    <svg
                      xmlSpace="preserve"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ height: "45", style: "fill:green" }}
                      version="1.1"
                      viewBox="0 0 102 102"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.7 85.9H8.5c-4.1 0-7.5-3.4-7.5-7.5v-1.1c0-4.1 3.4-7.5 7.5-7.5h50.2c4.1 0 7.5 3.4 7.5 7.5v1.1c0 4.1-3.4 7.5-7.5 7.5zM8.5 74.3a3 3 0 0 0-3 3v1.1a3 3 0 0 0 3 3h50.2a3 3 0 0 0 3-3v-1.1a3 3 0 0 0-3-3H8.5zM54.8 99H12.4c-3.7 0-6.8-3-6.8-6.8v-4c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v4c0 1.3 1.1 2.3 2.4 2.3h42.4c1.3 0 2.3-1.1 2.3-2.3v-4c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v4c.1 3.8-3 6.8-6.7 6.8zm42-57.9c-1.2 0-2.2-1-2.2-2.2v-2.8c0-.6-.5-1-1-1h-54a1 1 0 0 0-1 1v2.8c0 1.2-1 2.2-2.2 2.2-1.2 0-2.2-1-2.2-2.2v-2.8c0-3 2.5-5.5 5.5-5.5h54c3 0 5.5 2.4 5.5 5.5v2.8c-.2 1.2-1.2 2.2-2.4 2.2z"
                        fill="#F90"
                      ></path>
                      <path
                        d="M63.9 31.4c-1 0-1.9-.7-2.2-1.7L56.6 6.2c-.1-.4-.3-.5-.4-.6-.1-.1-.4-.2-.8-.1L41 8.6c-1.2.3-2.4-.5-2.6-1.7-.3-1.2.5-2.4 1.7-2.6l14.4-3.1c1.4-.3 2.9 0 4.1.7 1.2.8 2.1 2 2.4 3.4l5.1 23.5c.3 1.2-.5 2.4-1.7 2.6h-.5zm-3.7 38.7c-.8 0-1.5-.4-1.9-1.1-3.9-6.7-12.4-14.5-23.8-14.5s-20 7.8-23.8 14.5c-.6 1.1-2 1.4-3 .8-1.1-.6-1.4-2-.8-3 5.9-10.1 16.7-16.7 27.7-16.7s21.8 6.5 27.7 16.7c.6 1.1.3 2.4-.8 3-.5.2-.9.3-1.3.3z"
                        fill="#F90"
                      ></path>
                      <ellipse
                        cx="24.3"
                        cy="63.9"
                        fill="#F90"
                        rx="1.7"
                        ry="1.7"
                      ></ellipse>
                      <ellipse
                        cx="40.7"
                        cy="65.6"
                        fill="#F90"
                        rx="1.7"
                        ry="1.7"
                      ></ellipse>
                      <ellipse
                        cx="33.6"
                        cy="58.8"
                        fill="#F90"
                        rx="1.7"
                        ry="1.7"
                      ></ellipse>
                      <path
                        d="M47 49.6c-1.2 0-2.2-.9-2.2-2.1l-.5-10.3c-.1-1.2.9-2.3 2.1-2.3 1.3-.1 2.3.9 2.3 2.1l.5 10.3c.1 1.2-.9 2.3-2.1 2.3H47zM82.1 93H71.4c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2h10.7c.6 0 1-.5 1-1L85.5 37a2.3 2.3 0 0 1 2.3-2.1c1.2.1 2.2 1.1 2.1 2.3l-2.4 50.5c.1 2.9-2.4 5.3-5.4 5.3z"
                        fill="#F90"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="row" style={{ size: "2px", fontSize: "10px" }}>
                  <span>Food Availlable</span>
                </div>
              </div>
            </div>

            {this.props.movieData.showTiming[0].map((m) => (
              <div key={m.name} className="row border-bottom-1 pt-1">
                <div className="col-lg-1 col-2">
                  <a href="a" id="heartcss-false">
                    <i className="far fa-heart"></i>
                  </a>
                </div>
                <div className="col-lg-3 col-9" style={{ fontSize: "12px" }}>
                  <div className="row">
                    <strong>{m.name}</strong>
                  </div>
                  <div className="row">
                    <span
                      className="logo nav-item"
                      style={{ size: "2px", fontSize: "10px" }}
                    >
                      <svg
                        xmlSpace="preserve"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                          height: "25",
                          style: "fill:green",
                          width: "20",
                        }}
                        version="1.1"
                        viewBox="0 0 102 130"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M73.5 95.2H26.8c-1.3 0-2.3-1-2.3-2.3V7.6c0-1.3 1-2.3 2.3-2.3h46.7c1.3 0 2.3 1 2.3 2.3V93c0 1.2-1.1 2.2-2.3 2.2zM26.8 6.4c-.6 0-1.1.5-1.1 1.1v85.4c0 .6.5 1.1 1.1 1.1h46.7c.6 0 1.1-.5 1.1-1.1V7.6c0-.6-.5-1.1-1.1-1.1l-46.7-.1z"></path>
                        <path d="M68.8 78.9H31.3c-.6 0-1.2-.5-1.2-1.2V16c0-.6.5-1.2 1.2-1.2h37.5c.6 0 1.2.5 1.2 1.2v61.7c0 .6-.5 1.2-1.2 1.2zm0-62.9H31.3v61.6h37.4l.1-61.6zm-19 74.4c-2.3 0-4.1-1.9-4.1-4.1 0-2.3 1.9-4.1 4.1-4.1 2.3 0 4.1 1.9 4.1 4.1a4 4 0 0 1-4.1 4.1zm0-7.1a2.9 2.9 0 1 0 2.9 2.9c.1-1.5-1.2-2.9-2.9-2.9zm-5.5-72.1h-1.6c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h1.6c.3 0 .6.3.6.6s-.3.6-.6.6zm11 0h-6.5c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h6.5c.3 0 .6.3.6.6s-.2.6-.6.6z"></path>
                      </svg>{" "}
                      M-Ticket
                    </span>{" "}
                    &nbsp;&nbsp;
                    <span
                      className="logo nav-item"
                      style={{ size: "2px", fontSize: "10px" }}
                    >
                      <svg
                        xmlSpace="preserve"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                          height: "25",
                          style: "fill:green",
                          width: "40",
                        }}
                        version="1.1"
                        viewBox="0 0 102 102"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M58.7 85.9H8.5c-4.1 0-7.5-3.4-7.5-7.5v-1.1c0-4.1 3.4-7.5 7.5-7.5h50.2c4.1 0 7.5 3.4 7.5 7.5v1.1c0 4.1-3.4 7.5-7.5 7.5zM8.5 74.3a3 3 0 0 0-3 3v1.1a3 3 0 0 0 3 3h50.2a3 3 0 0 0 3-3v-1.1a3 3 0 0 0-3-3H8.5zM54.8 99H12.4c-3.7 0-6.8-3-6.8-6.8v-4c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v4c0 1.3 1.1 2.3 2.4 2.3h42.4c1.3 0 2.3-1.1 2.3-2.3v-4c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v4c.1 3.8-3 6.8-6.7 6.8zm42-57.9c-1.2 0-2.2-1-2.2-2.2v-2.8c0-.6-.5-1-1-1h-54a1 1 0 0 0-1 1v2.8c0 1.2-1 2.2-2.2 2.2-1.2 0-2.2-1-2.2-2.2v-2.8c0-3 2.5-5.5 5.5-5.5h54c3 0 5.5 2.4 5.5 5.5v2.8c-.2 1.2-1.2 2.2-2.4 2.2z"
                          fill="#F90"
                        ></path>
                        <path
                          d="M63.9 31.4c-1 0-1.9-.7-2.2-1.7L56.6 6.2c-.1-.4-.3-.5-.4-.6-.1-.1-.4-.2-.8-.1L41 8.6c-1.2.3-2.4-.5-2.6-1.7-.3-1.2.5-2.4 1.7-2.6l14.4-3.1c1.4-.3 2.9 0 4.1.7 1.2.8 2.1 2 2.4 3.4l5.1 23.5c.3 1.2-.5 2.4-1.7 2.6h-.5zm-3.7 38.7c-.8 0-1.5-.4-1.9-1.1-3.9-6.7-12.4-14.5-23.8-14.5s-20 7.8-23.8 14.5c-.6 1.1-2 1.4-3 .8-1.1-.6-1.4-2-.8-3 5.9-10.1 16.7-16.7 27.7-16.7s21.8 6.5 27.7 16.7c.6 1.1.3 2.4-.8 3-.5.2-.9.3-1.3.3z"
                          fill="#F90"
                        ></path>
                        <ellipse
                          cx="24.3"
                          cy="63.9"
                          fill="#F90"
                          rx="1.7"
                          ry="1.7"
                        ></ellipse>
                        <ellipse
                          cx="40.7"
                          cy="65.6"
                          fill="#F90"
                          rx="1.7"
                          ry="1.7"
                        ></ellipse>
                        <ellipse
                          cx="33.6"
                          cy="58.8"
                          fill="#F90"
                          rx="1.7"
                          ry="1.7"
                        ></ellipse>
                        <path
                          d="M47 49.6c-1.2 0-2.2-.9-2.2-2.1l-.5-10.3c-.1-1.2.9-2.3 2.1-2.3 1.3-.1 2.3.9 2.3 2.1l.5 10.3c.1 1.2-.9 2.3-2.1 2.3H47zM82.1 93H71.4c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2h10.7c.6 0 1-.5 1-1L85.5 37a2.3 2.3 0 0 1 2.3-2.1c1.2.1 2.2 1.1 2.1 2.3l-2.4 50.5c.1 2.9-2.4 5.3-5.4 5.3z"
                          fill="#F90"
                        ></path>
                      </svg>
                      F&amp;B{" "}
                    </span>
                  </div>
                </div>
                <div className="col-lg-6">
                  {m.timings.map((s) => (
                    <button
                      key={s.name}
                      className="btn btn-outline-secondary text-primary btn-sm border-muted m-1"
                      routerlinkactive="router-link-active"
                      style={{
                        marginBottom: "12px",
                        maxHeight: "40px",
                        fontSize: "12px",
                        tabindex: "0",
                      }}
                    >
                      <span data-toggle="tooltip" title="164">
                        {s.name}
                      </span>
                    </button>
                  ))}
                  <ul style={{ fontSize: "12px" }}>
                    <li>Cancellation available</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="col-2 mt-1 d-none d-lg-block">
            <img
              alt=""
              className="img-fluid"
              src="https://i.ibb.co/JqbbCJz/1331654202504679967.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BookMovie;

import React from 'react';


export default function Header () {
  const headerSlide = () => {
    const pullOut = document.getElementById('js-main-navigation__pull-out');

  };

  return (

    <div>
      <header className="main-navigation">

        <div className="main-navigation__list">
          <a href="#o" className="main-navigation__list--1">Rental Criteria</a>
          <a href="#search-results" className="main-navigation__list--2">Search Results</a>
          <a href="#site-info" className="main-navigation__list--3">Rental Site Info</a>
        </div>

        {/* <div id="main-navigation__pull-out js-main-navigation__pull-out" onClick= { headerSlide }>PULL ME</div> */}

      </header>


      <div className="logo-box">
        <img src="../public/img/macbook.jpg" alt="Logo" className="logo" />
      </div>

    </div>
  );
};
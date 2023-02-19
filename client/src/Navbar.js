import React from 'react';
import { Event } from './App';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-scroll';

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="/">
          <img src={require('./sources/logo-white.png')}  className='logo'></img>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" className="navbar-nav">
              <Link to="mission">
                <a class="nav-link" href="#">About Us</a>
              </Link>
              <Link to="eboards">
                <a class="nav-link" href="#">E-Board</a>
              </Link>
              <Link to="contact">
                <a class="nav-link" href="#">Contact</a>
              </Link>
              <Link to="sponsor">
                <a class="nav-link" href="#">Sponsor</a>
              </Link>
                <a class="nav-link" href="/FEASU/Events">Events</a>
                <a class="nav-link" href="/FEASU/Gallery">
                  Gallery
                </a>
            <li class="nav-item">
            </li>
          </ul>
        </div>
      </nav>
    )
  };
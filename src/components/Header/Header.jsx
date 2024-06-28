import React from 'react';
import './Header.scss'

export default function Header() {
  return (
    <section className="header" id="header">
        <div className="header__intro">
            <p className="header__intro-text header__intro-wrap">Hi, my name is</p>
            <h2 className="header__intro-name header__intro-wrap">Aika Manalo</h2>
            <h2 className="header__intro-job header__intro-wrap">A Software Developer</h2>
            <p className="header__intro-location header__intro-wrap">based in Vancouver, Canada</p>
        </div>
        <a href="" className="header-btn">Let's Connect!</a>
    </section>
  )
}

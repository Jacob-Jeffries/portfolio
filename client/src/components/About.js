import React from 'react';

function About() {
  return (
    <section class="card" id="mc00">
        <aside class="mc-aside" id="a-mc00">
        <div class="middle">
        <div class="inside">
            <h2>TI BASIC READY<br/>
            {'>'} 10 PRINT "About Me"
            </h2>
        </div>
        </div>
        </aside>

        <section class="text" id="t-mc00">
        <p>Hello, my name is Jacob. I've been educated and trained in various disciplines: web application development, laboratory management, and biological (wet-lab) research.</p>

        <p><b>Frontend Skills: HTML, CSS, Javascript, Handlebars, React.js</b></p>
        <p><b>Backend Skills: Apache, Node.js, Express, MySQL, MongoDB</b></p>

        <p>My professional training began at Purdue University, graduating with a BSc in Cellular, Molecular, and Developmental Biology. I furthermore completed a MSc, at Purdue University, with a focus in Immunology & Genetics. Currently, I serve as the <a href="https://nmu.edu/chemistry/faculty-and-staff" target="_blank"> Chemistry Department Laboratory Supervisor at Northern Michigan University</a>, located in Marquette, Michigan.</p>

        <p>Throughout my youth and professional path I have used computers to facilitate projects, increase my efficacy, and to have fun! My computer programming experience began with making MadLibs using TI-BASIC on a TI-99/4a computer that my uncle gave me. A few years down the road, I built my first DX2 486 computer (Y2K was going to destroy the world so companies were throwing away computers) and got to experience the wonders of a GUI; DOS 6.22, Windows 3.11 and a VGA graphics card - DOOM, Duke Nukem, and Commander Keen!</p>
        
        <p>I was first introduced to C, in middle school; finally taking programming more seriously in graduate school, I incrementally added Python, R, HTML, CSS, JavaScript, and Node.js to my repertoire.</p>

        <p>This page represents a very basic, static, homepage. You can view much more complex web & CLI applications in the Portfolio section of this page.</p>

        <p>To show a variety of hosting techniques different <a href="#mc01">portfolio projects</a> are hosted in various ways; including GitHub Pages, Heroku, and through an Apache reverse proxy serving up Node.js/Express pages.</p>

        <p>For example <a href="/test">this</a> is a simple MVC test page running on an express server.</p>
        </section>
    </section>
  );
}

export default About;
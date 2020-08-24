import React from "react";
import aboutpic from "./about.jpg";
import "./about.css";
const About = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
      });
  return (
      <div style={{background:"cornsilk"}}>
    <div className="about">
      <div class="header-about">
        <div>
          <p class="header-intro">Hi, I'm</p>
          <h1 class="header-name">ANKIT </h1>
          <img className="about-img" src={aboutpic} />
        </div>
      </div>

      <section class="">
        <h2 className="about-h2">Introduction</h2>
        <p>
          Hi, I'm a<b> Ankit Kumar </b>, a freelance Designer who's currently
          learning to code on{" "}
          <a href="https://www.udemy.com/" target="_blank">
            Udemy
          </a>
          . I really want to learn how to implement my own designs in the
          browser and offer a better service to my clients by telling them that
          I can code too!
        </p>

        <p>
          I am a hardworking and ambitious individual with a great passion for
          the transport and logistics industry. I am currently in my third year
          of studying <b>Computer Science Engineering</b> at <b>Cambridge Institute of Technology</b>
         . I have excellent communication skills, enabling me to
          effectively communicate with a wide range of people. I am seeing a
          part-time position in the industry in which I can put into practice my
          knowledge and experience, ultimately benefiting the operations of the
          organisation that I work for..
        </p>
      </section>

      <section class="questions">
        <h2 className="about-h2">More about me</h2>
        <h3>Where am I from?</h3>
        <p>
          I'm originally from a North Side , India .I grew up in a small town
          but moved over to the Bangalore 15 years ago .As of now , I consider
          myself a part of Bangalore and proud to be called as Bangaloren .
        </p>

        <h3>What is my Dream Job?</h3>
        <p>
          Part of the reason I'm learning to code is because I want to be able
          to put my own ideas into practice. My dream 'job' would be to build my
          own product and be responsbible for the entire experience from design
          through to implementation.{" "}
        </p>

        <h3>What music have you been listening to?</h3>
        <p>
          I only just recently discovered an awesome website called{" "}
          <a href="https://www.jiosaavn.com/" target="_blank">
            Savan
          </a>{" "}
          which watches popular music blogs and discovers new artists and lets
          you stream all the music completely free. I've been really implressed
          with their breadth and can just hit play and forget about it.
        </p>
      </section>
    </div>
    </div>
  );
};

export default About;

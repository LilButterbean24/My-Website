import React from 'react';
import './App.css';
import seanPic from './images/me.jpg';
import kingHall from './images/kingHall.jpg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Hi, I'm Sean Talbot</h1>
        <img src={seanPic} alt="Sean Talbot" style={{marginRight: "20px"}}/>
      </header>

      <body className="">
        
        <div className="body intro">
          <h1>About me</h1>
          <p>I enlisted in the Air National Guard in March of 2016. After I graduated high school I shipped out to Basic Military Training for 9 weeks. I then had a 6-month break in training between BMT and my Technical School. Until then I worked full time as a cashier at Food Lion. I attended three Months at NAS Pensacola in Northern Florida with the 359th TRS DET 1 where I learned various Low Observable tasks for stealth-capable aircraft. Upon graduation in May 2017, I served 6 months of on-the-job training at Langley Air Force Base Hampton, VA. I accumulated 26 credit hours in classes being a full-time student at J Sargeant Reynolds Community College. Finally, I transferred to James Madison University in fall 2019 where I am currently studying, pursuing a Bachelor's Degree in Computer Science. And plan to graduate in Fall 2023. I am also currently a part time employee with Starship where I work closely with autonomous robotics.</p>
        </div>
        <div className="body education">
          <h1>My Education</h1>
          <h3>James Madison University (Graduating Fall 2023)</h3>
          <p>My journey through the Computer Science program at JMU began in Fall 2019. I spent the first year becoming fluent in Java, having no prior experience. It was a tough learning curve, but rewarding.</p>
          <img src={kingHall} alt="Sean Talbot" style={{marginTop: "50px"}}/>
        </div>
      </body>
      
      </div>
  );
}

export default App;

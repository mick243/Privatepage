import "./App.css";

import React from "react";

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <div>&lt;LOG</div>
        <div>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Work
          </a>
          <a href="#" className="hover:underline">
            Article
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </header>

      {/* Main Section */}
      <main>
        <div>&lt;home </div>
        <div>
          <p>
            Hello! <br />
            Welcome to the Full Stack Developer Studio.
          </p>
        </div>

        <hr />

        {/* LOG Title */}
        <div>&lt; LOG </div>

        <hr />

        <div>
          The log where the class started was created as a space to contain life
          <br />
          as a developer and move forward.
        </div>

        {/* Korean Text Section */}
        <div>
          <p>
            안녕하세요. <br />
            풀스택 개발자 강정민민의 스튜디오입니다.
          </p>

          <p>
            Class가 시작된 저의 LOG는 개발자로서의 삶을 담고 <br />
            앞으로 나아갈 수 있는 공간으로 만들어졌습니다.
          </p>
        </div>

        {/* Bottom Right Date */}
        <div>
          Data has been
          <br />
          created since 2025.
        </div>
      </main>

      {/* Background abstract effect placeholder */}
      <div>
        <img />
      </div>
    </div>
  );
}

export default App;

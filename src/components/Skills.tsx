import React from "react";
import Heading from "./Heading";

const skillLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
  "https://copm.s3.amazonaws.com/189aa059.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png",
  "https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png",
  "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_251be2af3ae607c45c14e816eaa1cf41/postgresql.png",
  "https://miro.medium.com/max/1000/1*MdTvC66EwOO3_fzjJmW3tA.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png",
  "https://assets.stickpng.com/thumbs/62c6bc0beee9410fe137d91e.png",
  "https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png",
  "https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
  "https://mui.com/static/logo.png",
];

const Skills = () => {
  return (
    <div className=" p-3" id="skill-section">
      <Heading>Skills</Heading>
      <div className="grid grid-cols-2">
        {skillLogos.map((each) => (
          <div className="border border-black grid place-content-center ">
            <img width={200} src={each} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

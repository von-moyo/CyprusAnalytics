import React, { useEffect } from "react";
import Image from "next/image";
//= Scripts
import parallaxie from "@/common/parallaxie";

function Content() {
  // useEffect(() => {
  //   parallaxie(".back-image.parallaxie", 0.4);
  // }, []);

  return (
      <div className="container portfolioo">
        <img
          src="/assets/imgs/portfolio/Hero-X_large.jpg"
          alt=""
          className="heroImage"
        />
        <div className="heroDescription">
          <h2 className="heroTitle">Yoowa: Food Delivery App</h2>
          <p className="heroText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in <br/>
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          </p>
        </div>
        <div className="firstImageSection">
          <img
            alt=""
            src="/assets/imgs/portfolio/Delivery man-X_large.jpg"
          />
          <iframe className="iframe" src="https://player.vimeo.com/video/846596223?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1&amp;loop=1" width="590" height="664" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Yoowa Display Animation 4k"></iframe>
          <img
            alt=""
            src="/assets/imgs/portfolio/Billboard-X_large.jpg"
          />
        </div>
        <div className="secondImageSection">
          <img
            className="people"
            alt=""
            src="/assets/imgs/portfolio/People-X_large.jpg"
          />
          <div>
            <img
            className="stickers"
            alt=""
            src="/assets/imgs/portfolio/Stickers-X_large.jpg"
          />
            <img
            alt=""
            src="/assets/imgs/portfolio/Shirts-X_large.jpg"
          />
          </div>
        </div>
        <iframe className="iframe" src="https://player.vimeo.com/video/846595872?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1&amp;loop=1" width="488" height="648" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="icon animation 4k"></iframe>
        <div className="thirdImageSection">
          <img
            alt=""
            src="/assets/imgs/portfolio/Food pack-X_large.jpg"
          />
          <img
            className="banner"
            alt=""
            src="/assets/imgs/portfolio/Large Banner-X_large.png"
          />
        </div>
        <div className="fourthImageSection">
          <img
            alt=""
            src="/assets/imgs/portfolio/Hand holding phone-X_large.jpg"
          />
          <img
            alt=""
            src="/assets/imgs/portfolio/Woman eating-X_large.jpg"
          />
        </div>
        <iframe className="iframe" src="https://player.vimeo.com/video/846610612?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1&amp;loop=1" width="590" height="787" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Food moving with stop motion effect 4k"></iframe>
        <div className="fifthImageSection">
          <img
            alt=""
            src="/assets/imgs/portfolio/Bottle floating-X_large.jpg"
          />
        </div>
        <iframe className="iframe" src="https://player.vimeo.com/video/846596077?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1&amp;loop=1" width="692" height="256" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Smile Word Language 4k"></iframe>
      </div>
  );
}

export default Content;

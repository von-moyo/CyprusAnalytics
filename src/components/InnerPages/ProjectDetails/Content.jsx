import React from "react";
import Image from "next/image";

function Content() {
  // useEffect(() => {
  //   parallaxie(".back-image.parallaxie", 0.4);
  // }, []);

  return (
      <div className="container portfolioo">
        <img
          src={`/assets/imgs/portfolio/hero.jpg`}
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
        <div>
        </div>
        <div className="imageSection">
          <Image
            width={2031}
            height={4096}
            className="deliveryManImage"
            alt=""
            src="/assets/imgs/portfolio/delivery.jpg"
          />
          <iframe className="iframe" src="https://player.vimeo.com/video/846596223?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1&amp;loop=1" width="590" height="664" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Yoowa Display Animation 4k"></iframe>
          <img
            alt=""
            src={`/assets/imgs/portfolio/billboard.jpg`}
          />
        </div>
        <div className="secondImageSection">
          <div className="fr">
          <iframe
            className="one"
            src="https://player.vimeo.com/video/846595872?h=4adcd8e23f&autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1"
            style={{ width: '100%', height: '100%' }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            ></iframe>
          </div>
          <div className="secondcl">
            <img
            className="stickers"
            alt=""
            src={`/assets/imgs/portfolio/stickers.jpg`}
            />
            <img
            alt=""
            src={`/assets/imgs/portfolio/shirts.jpg`}
            />
          </div>
        </div>

        <div className="imageSection noMargin">
          <img
            className="people"
            alt=""
            src={`/assets/imgs/portfolio/people.jpg`}
          />
          <img
            alt=""
            src={`/assets/imgs/portfolio/foodpack.jpg`}
          />
          <img
          className="banner"
          alt=""
          src={`/assets/imgs/portfolio/banner.png`}
          />
        </div>
        <div className="fourthImageSection">
          <img
            alt=""
            src={`/assets/imgs/portfolio/phone.jpg`}
          />
          <img
            alt=""
            src={`/assets/imgs/portfolio/eating.jpg`}
          />
        </div>
        <div className="imageSection noMargin">
          <iframe className="iframe" src="https://player.vimeo.com/video/846610612?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1&amp;loop=1" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Food moving with stop motion effect 4k"></iframe>
          <img
            alt=""
            src={`/assets/imgs/portfolio/bottle.jpg`}
          />
        </div>
        <img
            alt=""
            src={`/assets/imgs/portfolio/shirts.jpg`}
        />
      </div>
  );
}

export default Content;

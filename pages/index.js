import TopBar from "../components/topBar";

import Thumbnail from "../components/thumbnail";

import img1 from "../images/image_1.gif";

import image_2 from "../images/image_2.jpg";

import image_3 from "../images/image_3.jpg";

import img2 from "../images/image_banner_1.jpg";

import img3 from "../images/banner_1.jpg";

import ImageBanner from "../components/imageBanner";

import BannerGroup from "../components/bannerGroup";

function HomePage()
{
    return (
    <div>
            <TopBar></TopBar>

            <Thumbnail thumbnail_images={[ {"image":img1, "route": "/"}, {"image":image_2, "route": "/"}, {"image":image_3, "route": "/"} ]}></Thumbnail>
            
            <ImageBanner imgs={ [ img2, img2, img2, img2 ] }></ImageBanner>
            
            <BannerGroup imgs={ [img3, img3, img3] } ></BannerGroup>     
    </div>    
    );
}

export default HomePage;
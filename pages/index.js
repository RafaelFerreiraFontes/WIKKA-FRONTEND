import TopBar from "../components/topBar";

import Thumbnail from "../components/thumbnail";

import ImageBanner from "../components/imageBanner";

import BannerGroup from "../components/bannerGroup";

// Images Files:

import image_1 from "../images/image_1.gif";

import image_2 from "../images/image_2.jpg";

import image_3 from "../images/image_3.jpg";

import image_banner_1 from "../images/image_banner_1.jpg";

import banner_1 from "../images/banner_1.jpg";

import banner_circule_1 from "../images/banner_circule_1.jpg";

import CategoryBannerCirculeGroup from "../components/categoryBannerCirculeGroup";


function HomePage()
{
    return (
    <div>
            <TopBar></TopBar>
            
            <Thumbnail thumbnail_images={[ {"image":image_1, "route": "/"}, {"image":image_2, "route": "/"}, {"image":image_3, "route": "/"} ]}></Thumbnail>
            
            <ImageBanner imgs={ [ {"image":image_banner_1, "route": "/"}, {"image":image_banner_1, "route": "/"}, {"image":image_banner_1, "route": "/"}, {"image":image_banner_1, "route": "/"} ] }></ImageBanner>
            
            <BannerGroup imgs={ [{"image":banner_1, "route": "/"}, {"image":banner_1, "route": "/"}, {"image":banner_1, "route": "/"}] } ></BannerGroup>     


             <CategoryBannerCirculeGroup banners={ 
                [ 
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto"},
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto"},
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto"}, 
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto"}, 
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto"} 
                ] 
            }/> 
    </div>    
    );
}

export default HomePage;
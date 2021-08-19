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
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto1"},
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto2"},
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto3"}, 
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto4"}, 
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto5"},
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto6"},
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto7"},
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto8"}, 
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto9"}, 
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto10"},
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto11"},
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto12"},
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto13"}, 
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto14"}, 
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto15"},
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto16"},
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto17"},
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto18"}, 
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto19"}, 
                    {'img': banner_circule_1, 'link': "#", 'name': "Produto20"} 
                ] 
            }/> 
    </div>    
    );
}

export default HomePage;
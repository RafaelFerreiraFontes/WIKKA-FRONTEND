import TopBar from "../components/topBar";
import Thumbnail from "../components/thumbnail";
import img1 from "../images/image_1.gif"

function HomePage()
{
    return (
    <div>
        <TopBar></TopBar>
        <Thumbnail thumbnail_image={img1}></Thumbnail>
    </div>
    );
}

export default HomePage;
import Image from "next/image";

function Thumbnail({ thumbnail_image })
{
    return(
        <Image src={ thumbnail_image } />
    )
}

export default Thumbnail;
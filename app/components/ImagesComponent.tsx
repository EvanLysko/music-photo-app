

export default function ImagesComponent({images} :{images: string[]}) {
    if (images.length > 1) {
        return (
            <div className="images-wrapper">
                {images.map((image, index) => {
                    if (image != "") {
                        return <img className="image" key={index} src={image} />
                    }
                })}
            </div>
        )
    }
}
import React, { useEffect, useState } from "react";
import { PortfolioSection, Portfoliotitle, Span, PortfolioList, ImageWrapper, Image, Overlay, OverlaySpan, PortfolioItem } from "./style.js";
import axios from "axios";

const Portofolio = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('js/data.json').then(res => { setImages(res.data.portfolio) })
    }, [])

    const PortfolioImages =images.map( (imageItem) => {
        // console.log(imageItem, "uu");
        return (
            <ImageWrapper key={imageItem.id}>
            <Image src={imageItem.image} alt=""/>
            <Overlay>
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </ImageWrapper>

        )

    })

    return (
        <PortfolioSection>
            <Portfoliotitle><Span>My</Span> Portfolio</Portfoliotitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>

            <div className="box">

                {PortfolioImages}

            </div>

        </PortfolioSection>

    )
}
export default Portofolio
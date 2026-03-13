import Image from "next/image"
import InteractiveCard from "./InteractiveCard"

export default function Card({imgSrc,venueName}:{imgSrc:string,venueName:string}){

    return(
        <InteractiveCard>

            <Image
                src={imgSrc}
                alt={venueName}
                width={500}
                height={300}
            />

            <div>{venueName}</div>

        </InteractiveCard>
    )
}
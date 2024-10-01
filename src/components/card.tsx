import Image from "next/image"

export const Card: {image: string, title: string, text: string, time: string, read: number, views: number, comments: number} =
    ({image, title, text, time, read, views, comments}) => {
    return (
        <div>
            <Image src={image} alt={title}/>
            <div>
                <p>{time}</p>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div>
                <div>{read}</div>
                <div>{views}</div>
                <div>{comments}</div>
            </div>
        </div>
    )
}
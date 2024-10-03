import Image from "next/image"

export const Card: React.FC<{image: string, title: string, text: string, time: string, read: number, views: number, comments: number, color: string}> =
    ({image, title, text, time, read, views, comments, color}) => {
    return (
        <div className="flex flex-col w-96 h-[60vh] justify-between bg-white">
            <Image className="h-1/3 object-cover" src={image} alt={title}/>
            <div className="flex flex-col h-4/5 px-4 items-center">
                <div className="flex flex-col justify-center text-center py-4">
                    <p className={`text-${color}`}>{time}</p>
                    <h2 className="text-3xl font-bold">{title}</h2>
                </div>
                <p className="text-center my-6 text-gray-400">{text}</p>
            </div>
            <div className={`flex flex-row w-full h-1/5 justify-between divide-x divide-gray-400 text-white bg-${color}`}>
                <div className="flex flex-col w-1/3 justify-center items-center text-1xl">
                    <p>{read}</p>
                    <span>Read</span>
                </div>
                <div className="flex flex-col w-1/3 justify-center items-center text-1xl">
                    <p>{views}</p>
                    <span>Views</span>
                </div>
                <div className="flex flex-col w-1/3 justify-center items-center text-1xl">
                    <p>{comments}</p>
                    <span>Comments</span>
                </div>
            </div>
        </div>
    )
}
import img1 from "@/assets/predio1.jpg"
import img2 from "@/assets/predio2.jpg"
import img3 from "@/assets/predio3.jpg"
import { Card } from "@/components/card"


const data: {image: any, title: string, text: string, time: string, read: number, views: number, comments: number, bgcolor: string, txtcolor: string}[] = [
    {
        image: img1,
        title: "Post One",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat posuere dictum. Morbi neque arcu, facilisis in laoreet sit amet, semper eu erat. Vivamus sit amet arcu bibendum, interdum nisl at, facilisis tellus.",
        time: "4 days ago",
        read: 4,
        views: 5123,
        comments: 32,
        bgcolor: "bg-pink-500",
        txtcolor: "text-pink-500"
    },
    {
        image: img2,
        title: "Post Two",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat posuere dictum. Morbi neque arcu, facilisis in laoreet sit amet, semper eu erat. Vivamus sit amet arcu bibendum, interdum nisl at, facilisis tellus.",
        time: "1 week ago",
        read: 7,
        views: 7152,
        comments: 21,
        bgcolor: "bg-orange-500",
        txtcolor: "text-orange-500"
    },
    {
        image: img3,
        title: "Post Three",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat posuere dictum. Morbi neque arcu, facilisis in laoreet sit amet, semper eu erat. Vivamus sit amet arcu bibendum, interdum nisl at, facilisis tellus.",
        time: "3 week ago",
        read: 5,
        views: 3021,
        comments: 15,
        bgcolor: "bg-green-500",
        txtcolor: "text-green-500"
    }
]

const Cards:React.FC = () => {
    return(
        <>
            <div className="flex flex-wrap w-screen h-screen justify-center items-center gap-8 bg-gradiente">
            {data.map((item, index) => (
                <Card image={item.image} title={item.title} text={item.text} time={item.time} read={item.read} views={item.views} comments={item.comments} bgcolor={item.bgcolor} txtcolor={item.txtcolor}></Card>
            ))
            }
            </div>
        </>
    )
}

export default Cards;
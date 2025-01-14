import { FaRegStar, FaStar } from "react-icons/fa6";

interface Props {
    rating: number
}

const StarRating = (props: Props) => {
    const numStars = Math.round(props.rating / 2);
    const fullStars = [];
    const emptyStars = [];

    for(let i = 0; i < 5; i++) {
        if(i < numStars) {
            fullStars.push(i);
        } else {
            emptyStars.push(i);
        }
    }

    return (
    <div>
        <FaStar />
        <FaRegStar />
    </div>
  )
}

export default StarRating;
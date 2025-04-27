import { FaSuitcase, FaPiggyBank, FaGem, FaUser, FaUsers } from 'react-icons/fa';
import { GiLovers, GiThreeFriends } from "react-icons/gi";

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Affordable and effective Budget',
        icon: <FaPiggyBank className='text-rose-400'/>
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '💰'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Don’t worry about the cost',
        icon: '💵'
    }
];

export const SelectTravelersList = [
    {
        id: 1,
        title: 'Just me',
        desc: 'A solo traveler in exploration',
        icon: '🧔',
        people: '1'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two travelers in tandem',
        icon: '🥂',
        people: '2'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adventurers',
        icon: '🏠',
        people: '3 to 5'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A group of friends living memories',
        icon: '👥',
        people: '6 to 8'
    }
];

export const AI_PROMPT = "generate Travel Plan for Location : {location} , for {totalDays} days for {travelers} with a {budget} budget , Give me a Hotels options list with HotelName , Hotel address , Price , hotel image url , geo coordinates , rating , descriptions , and suggest itinerary with placeName , Place Details , Places Image Url , Geo Coordinates , ticket pricing , Time to travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format"

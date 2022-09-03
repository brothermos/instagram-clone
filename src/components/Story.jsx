import React from "react";
import storyImg from "../assets/img/ProfilePicS.png";
import story2 from '../assets/img/story2.png'
import story3 from '../assets/img/story3.png'
import story4 from '../assets/img/story4.png'
const Story = () => {
    return (
        <div>
            <ul className="flex text-center my-5 ml-[35px]">
                <li className="mr-[30px] p-[10px]">
                    <img src={storyImg} className="w-16 md:w-16 lg:w-16 border-4 rounded-full border-slate-100" alt="story img" />
                    <p>Thailand</p>
                </li>
                <li className="mr-[30px] p-[10px]">
                    <img src={story2} className="w-16 md:w-16 lg:w-16 border-4 rounded-full border-slate-100" alt="story img" />
                    <p>Japan</p>
                </li>
                <li className="mr-[30px] p-[10px]">
                    <img src={story3} className="w-16 md:w-16 lg:w-16 border-4 rounded-full border-slate-100" alt="story img" />
                    <p>Korea</p>
                </li>
                <li className="mr-[30px] p-[10px]">
                    <img src={story4} className="w-16 md:w-16 lg:w-16 border-4 rounded-full border-slate-100" alt="story img" />
                    <p>Australia</p>
                </li>
            </ul>
        </div>
    );
};

export default Story;

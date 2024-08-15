import React from 'react'
import backArrow from "../../../public/arrow-back.png";
import elon from "../../../public/elon-musk.png";
import menu from "../../../public/three-dot.png";
import comment from "../../../public/comment.png";
import save from "../../../public/save.png";
import like from "../../../public/like.png";
import retweet from "../../../public/retweet.png";


const TweetCard = ({jokeData}) => {

  return (
    <div className='bg-black w-72 sm:w-[524px] h-auto sm:h-72 overflow-auto rounded-xl text-white py-2 sm:py-4 px-6 sm:px-12'>
        <div className="post-nav flex items-center gap-5">
            <div className="arrow mt-1">
            <img src={backArrow} alt="back-arrow" />
            </div>
            <p>Post</p>
        </div>

        <div className="user flex justify-between items-center mt-4">
            <div className="left-user flex items-center gap-2">
                <img className='mt-1' src={elon} alt="profile pic" />
                <div className="userName">
                    <p>Elon Musk</p>
                    <p className='text-xs text-[#A0A0A0]'>@elonMusk</p>
                </div>
            </div>

            <div className="rigth-menu">
                    <img src={menu} alt="menu" />
            </div>
        </div>

        <div className="tweet-joke mt-2">
            <p className='font-normal text-xs sm:text-sm'>{jokeData.data.content}</p>
        </div>

        <div className="date-time my-4">
            <p className='text-[10px] font-semibold text-[#A0A0A0] leading-3'>11:18 PM · Jul 30, 2024 · <span className='text-white'>20.5M </span>Views</p>
        </div>

        <div className="like-comment flex justify-between items-center text-[#71767B] border-[#71767B] border-y-[0.2px] p-2">
            <div className="comment flex justify-between items-center gap-1">
                <img src={comment} alt="comment logo" />
                <span className='text-[8px] leading-[9.68px]'>4.9k</span>
            </div>

            <div className="retweet flex justify-between items-center gap-1">
            <img src={retweet} alt="comment logo" />
            <span className='text-[8px] leading-[9.68px]'>5.3k</span>
            </div>

            <div className="like flex justify-between items-center gap-1">
            <img src={like} alt="comment logo" />
            <span className='text-[8px] leading-[9.68px]'>59k</span>
            </div>

            <div className="save flex justify-between items-center gap-1">
            <img src={save} alt="comment logo" />
            <span className='text-[8px] leading-[9.68px]'>1.1k</span>
            </div>
        </div>

        <div className="footer text-center">
            <p className='text-[10px] font-semibold text-[#FFFFFF66] mt-6'>© chai aur code</p>
        </div>
    </div>
  )
}

export default TweetCard
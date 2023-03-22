import { quotes } from "../assets"

const Feedback = ({ content, name, title, img }) => (
    <div className='flex justify-between flex-col feedback-card px-10 py-12 rounded-[20px] md:mr-10 sm:mr-5 mr-0 sm:mx-5 mx-0 max-w-[370px]'>
        <img src={quotes} alt="quotes" className="w-[42px] h-auto object-contain" />
        <p className="text-white font-poppins font-normal text-[18px] leading-[32px] my-10">{content}</p>

        <div className="flex flex-row">
            <img src={img} alt={name} className='w-[42px] h-auto object-contain' />
            <div className="flex flex-col ml-4">
                <h6 className="font-poppins text-white text-[20px]">{name}</h6>
                <p className="font-poppins text-dimWhite text-[16px]">{title}</p>
            </div>
        </div>
    </div>
)

export default Feedback
import styles from "../style"
import { arrowUp } from "../assets"

const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} bg-blue-gradient w-[140px] h-[140px] p-[2px] rounded-full cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px] text-gradient">Get</p>
                    <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain ml-1" />
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23px] text-gradient">Started</p>
            </div>
        </div>
    )
}

export default GetStarted
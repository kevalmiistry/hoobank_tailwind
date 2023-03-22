import { features } from "../constants"
import styles, { layout } from "../style"
import Button from '../components/Button'

const Feature = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] feature-card ${index !== features.length - 1 ? 'mb-6' : 'mb-0'}`}>
        <div className={`h-[64px] w-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins text-white font-semibold text-[20px] leading-[26px]">{title}</h4>
            <p className="font-poppins text-dimWhite font-normal text-[16px] leading-[23px]">{content}</p>
        </div>
    </div>
)

const Business = () => {
    return (
        <section id='features' className={`${layout.section}`}>
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2}`}>You do the business, <br className="sm:block hidden" /> we'll handle the money.</h2>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

                <Button styles='mt-10' />
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <Feature key={feature.id} index={index} {...feature} />
                ))}
            </div>
        </section>
    )
}

export default Business
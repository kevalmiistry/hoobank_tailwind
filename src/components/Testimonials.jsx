import { feedback } from "../constants"
import styles, { layout } from "../style"
import FeedbackCard from './Feedback'

const Testimonials = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className="absolute w-[60%] h-[60%] -right-1/2 rounded-full z-[0] blue__gradient" />
        <div className="w-full flex sm:flex-row flex-col justify-between items-center">
            <h2 className={styles.heading2}>What people are <br className="sm:block hidden" />saying about us</h2>
            <div className="sm:mt-0 mt-5 w-full">
                <p className={`${styles.paragraph} max-w-[470px]`}>Everything you need to accept card payments and grow your business anywhere on planet.</p>
            </div>
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1] feedback-container pt-10">
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
)

export default Testimonials
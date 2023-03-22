import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => (
    <section id="product" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2}`}>Find a better card deal <br className="sm:block hidden" /> in few steps.</h2>

            <p className={`${styles.paragraph} mt-4 max-w-[470px]`}>Get a superior credit card offer quickly by following a simple process to compare and choose.</p>
            <Button styles='mt-5' />
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="cards" className="w-[90%] h-auto object-contain" />
        </div>
    </section>
)

export default CardDeal
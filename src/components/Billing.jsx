import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
    <section id='billing' className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={bill} alt="billing" className='relative w-[100%] h-[100%] z-[5]' />

            <div className='absolute z-[3] -left-1/2 top-0 rounded-full white__gradient w-[50%] h-[50%]' />
            <div className='absolute z-[0] -left-1/2 bottom-0 rounded-full pink__gradient w-[50%] h-[50%]' />
        </div>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-4`}>Take charge of your finances with effortless billing and invoicing management. Simplify the process by using user-friendly software that streamlines payments and tracks expenses with ease.</p>
            <div className='flex gap-4 mt-7'>
                <img src={apple} alt="apple" className='w-[130px] h-auto object-contain cursor-pointer' />
                <img src={google} alt="apple" className='w-[130px] h-auto object-contain cursor-pointer' />
            </div>
        </div>
    </section>
)

export default Billing
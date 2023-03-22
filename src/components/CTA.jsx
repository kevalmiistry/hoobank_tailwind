import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 sm:gap-0 gap-5 rounded-[20px] box-shadow`}>
        <div className='flex-1 flex flex-col'>
            <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
            <p className={`${styles.paragraph} mt-2 max-w-[470px]`}>Everything you need to accept card payments and grow your business anywhere on planet.</p>
        </div>

        <div>
            <Button />
        </div>
    </section>
)

export default CTA
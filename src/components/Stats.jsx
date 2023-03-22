import { stats } from "../constants"
import styles from "../style"

const Stats = () => {
    return (
        <section className={`${styles.flexCenter} xs:flex-row flex-col flex-wrap sm:mb-20 mb-6`}>
            {stats?.map((stat) => (
                <div key={stat.id} className={`flex-1 ${styles.flexCenter}`}>
                    <h4 className="font-poppins font-semibold sm:text-[40px] text-[30px] sm:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
                    <p className="font-poppins font-normal sm:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] uppercase text-gradient ml-3">{stat.title}</p>
                </div>
            ))}
        </section>
    )
}

export default Stats
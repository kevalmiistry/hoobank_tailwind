import { airbnb, binance, coinbase, dropbox } from "../assets"
const imgStyle = "sm:w-[250px] w-[180px] h-auto object-contain"

const Clients = () => (
    <section className="my-10 flex sm:flex-row flex-col items-center sm:gap-0 gap-4 justify-evenly flex-wrap">
        <img src={airbnb} alt="airbnb" className={imgStyle} />
        <img src={binance} alt="binance" className={imgStyle} />
        <img src={coinbase} alt="coinbase" className={imgStyle} />
        <img src={dropbox} alt="dropbox" className={imgStyle} />
    </section>
)

export default Clients
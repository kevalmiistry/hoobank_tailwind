import React from 'react'

const Button = ({ styles }) => {
    return (
        <button type='button' className={`bg-blue-gradient px-6 py-2 font-poppins font-medium text-[18px] text-primary outline-none rounded-md ${styles}`}>Get Started</button>
    )
}

export default Button
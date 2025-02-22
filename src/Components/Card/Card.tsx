import React from 'react'
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({ companyName, ticker, price }: Props) => {
  return (
    <div className="card">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8HY6O4RoSGPogVK1MVHrEROWak714g2e6BQ&s"
            alt="Image"
        />
        <div className='details'>
            <h2>
              {companyName} ({ticker})
            </h2>
            <p>${price}</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, minus tempora? Officia veritatis deleniti dolores eaque provident, est, recusandae dicta at ex unde voluptatem nobis velit maxime! Eos, suscipit facilis?</p>
    </div>
  )
}

export default Card;

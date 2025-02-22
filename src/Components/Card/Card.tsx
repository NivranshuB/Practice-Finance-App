import React from 'react'
import "./Card.css";

type Props = {}

const Card = (props: Props) => {
  return (
    <div className="card">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8HY6O4RoSGPogVK1MVHrEROWak714g2e6BQ&s"
            alt="Image"
        />
        <div className='details'>
            <h2>AAPL</h2>
            <p>$110</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, minus tempora? Officia veritatis deleniti dolores eaque provident, est, recusandae dicta at ex unde voluptatem nobis velit maxime! Eos, suscipit facilis?</p>
    </div>
  )
}

export default Card;

import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className="card">
        <img
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
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

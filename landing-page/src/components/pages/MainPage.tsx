import React from 'react'
import Button from '../commons/Button'
import SlideImages from '../Content/SlideImages'

type Props = {}

const MainPage = (props: Props) => {
    return (
        <div className='container'>
            <div className='content-main'>
                <h1 className='title'>Enjoy Your Favorite <br />
                    Coffee with Ngopi</h1>
                <p className='sub-title'>Discover tranquility at Ngopi a sanctuary for unwinding, <br />
                    where your evenings are perfected with relaxation and rich flavors.</p>
            </div>
            <Button />
            <div className='section__images'>
                <SlideImages />
            </div>
        </div>
    )
}

export default MainPage
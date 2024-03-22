import React from 'react'
import Button from '../commons/Button'
import Content from '../Content/Content'

type Props = {}

const MainPage = (props: Props) => {
    return (
        <div className='container'>
            <div className='title-main'>
                <h1 style={{fontSize: '64px'}}>Enjoy Your Favorite <br />
                    Coffee with Ngopi</h1>
                <p>Discover tranquility at Ngopi a sanctuary for unwinding, <br />
                    where your evenings are perfected with relaxation and rich flavors.</p>
            </div>
            <Button onClick={() => console.log('Button clicked')} />
            <div className='grid wide'>
                <Content />
            </div>
        </div>
    )
}

export default MainPage
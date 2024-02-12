import React from 'react'

const DummyBlk = (props) => {
    return (
        <section className='py-32 bg-white text-gray text-center text-5xl  border-4 font-extrabold'>
            {props.inputData.dummyText}
        </section>
    )
}

export default DummyBlk

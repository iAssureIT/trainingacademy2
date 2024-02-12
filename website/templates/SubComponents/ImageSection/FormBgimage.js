import React from 'react'

const FormBgimage = (props) => {
    return (
    
        // <section className="bg-gray-50 dark:bg-gray-900  flex flex-col md:flex-row h-auto items-center  xl:w-2/3 mx-auto">
            <div className=" hidden lg:block w-full h-screen">
                <img src={props.image} alt="" className="w-full h-full object-cover"/>
            </div>
        // </section>
    )
}

export default FormBgimage

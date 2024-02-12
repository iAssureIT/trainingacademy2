import React from 'react'

const AddressDetails = (props) => {
	return (
    <section id="AddressDetails" className='hidden lg:block'>
		<div className='addDetailContent text-center text-2xl'>{props?.content}</div>
        {
            props?.Address?.map((data,index)=>{
                return(
                    <div key={index} className={props?.contentCss?props?.contentCss:'flex flex-wrap   mt-9'}>
                        <div className="addIconWrapper mx-auto md:mx-0">
                            {
                            data.icon?
                            <i className={data.icon+" addIcon"}></i>
                            :
                            <img className={"iconWrapper"} src={data?.iconImage}/>  
                            }
                            
                        </div>
                        <div className={props?.addStyle?props?.addStyle+' my-auto':"my-auto"}>
                            <h6><b>{data?.Title}</b></h6>
                            <p className=" addListWrapper">
                                {data?.address} <br/>
                            </p>
                        </div> 
                    </div>
                )
            })
        }		
    </section>
  )
}

export default AddressDetails

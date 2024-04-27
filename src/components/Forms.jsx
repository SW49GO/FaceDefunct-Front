import {useForm} from "react-hook-form"
import { useUpperCaseFistLetter} from "../hooks/upperCaseFirstLetter"
import React from "react"


const Forms=({returnForm, containerClass, classButton, nameButton, data})=>{
    const upperCaseFirstLetter = useUpperCaseFistLetter
    const {register,handleSubmit, reset}=useForm()
    const handleFormData=(data)=>{
        returnForm(data)
        reset()
    }
    return (
        <>
        <form className={containerClass} onSubmit={handleSubmit(handleFormData)}>
            {data.map((item, index)=>(
                <React.Fragment key={index} >
                 <label  htmlFor={`${containerClass}__${item.name}`}>{item.labelForm}</label>
                 <input  type={item.inputForm} name={item.name} id={`form__${item.name}`} {...(item.req ? { required: true } : {})} {...register(`${item.name}`, {setValueAs: (value)=>upperCaseFirstLetter(value)})}/>
                 {item.formText ? <p className={`${containerClass}__text-${item.name}`}>{item.formText}</p>:''}
                 </React.Fragment>
            ))}
            <input className={`${classButton} ${containerClass}-button`} type="submit" value={nameButton}/>
        </form>
        </>
    )
}
export default Forms
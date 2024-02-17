import { useState } from "react"

export const useForm = (initialStateForm) => {
 
    const [stateform, setStateform] = useState(initialStateForm);

    const onChangeForm = ({target}) =>{

        const {name, value} = target;

        setStateform(
           {
            ...stateform,
            [name]: value
           }
        )}

    return {
        stateform,
        onChangeForm
    }
}

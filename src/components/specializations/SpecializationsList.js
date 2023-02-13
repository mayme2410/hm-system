import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"

import SpecializationItem from "./SpecializationItem"
import { selectAllSpecializations,getSpecializationError,getSpecializationStatus,fetchSpecializations} from "./specializationSlice"

function SpecializationsList(){
    const specializations = useSelector( selectAllSpecializations )
    const specializationStatus = useSelector(getSpecializationStatus)
    const error = useSelector(getSpecializationError)

    const dispatch = useDispatch();

    useEffect(()=>{
        if(specializationStatus === 'idle'){
            dispatch(fetchSpecializations())
        }
    },[specializationStatus,dispatch])

    let content;
    
    if(specializationStatus === 'loading'){
        content = (<p>Loading....</p>)
    }

    if(specializationStatus === 'succeeded'){
        content = specializations.map(specialization => <SpecializationItem 
            main_specialization={specialization.main_specialization}
            sub_specialization={specialization.sub_specialization}
            degree={specialization.degree}
            organ={specialization.organ}
            doctorId={specialization.doctorId}
    />)
    }

    if(specializationStatus === 'failed'){
        content = (<p>{error}</p>)
    }

   

    return content;
}

export default SpecializationsList
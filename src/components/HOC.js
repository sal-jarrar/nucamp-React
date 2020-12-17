import React from 'react';
import Loading from './LoadingComponent';

const HOC = (WrappedComp)=>{
    const Spinner = ({isLoading,errMess,...otherprops})=>{
        return isLoading? <Loading/>
        :  errMess ? <h3>{errMess}</h3>
        : <WrappedComp {...otherprops}/>
    }
    return Spinner
}

export default HOC;
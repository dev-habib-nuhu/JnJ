import Header from 'components/Headers/Header'
import React from 'react'
import Devices from './Devices'
import {useDispatch,useSelector} from 'react-redux';

const Mydevices = () => {
    const dispatch = useDispatch()
    const Mydevicelist = useSelector(state => state.Mydevicelist)

    return (
        <div>
            <Header/>
            <h3 className='text-center' style={{textTransform:'uppercase'}}>Devices in my Posession</h3>
            <Devices pagetitle="CHECKED OUT DEVICES" tabledata={[]} page="checkedout"/>
        </div>
    )
}

export default Mydevices
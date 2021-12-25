import React, {useState} from 'react'
import Checkbox from '@mui/material/Checkbox'
import { Facebook } from '@mui/icons-material'
import { Rating } from '@mui/material'


function Check() {
    const [value, setValue] = useState(2)
    return (
        <div>
            <Checkbox icon={<Facebook />} checkedIcon={<Facebook />} />
            <Rating value={value} onChange={(event, newValue) => {
                setValue(newValue)
            }} />
        </div>
    )
}

export default Check

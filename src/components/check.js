import React, {useState} from 'react'
import Checkbox from '@mui/material/Checkbox'
import { Face, Facebook } from '@mui/icons-material'
import { Rating } from '@mui/material'
import ClickAwayListener from '@mui/material/ClickAwayListener';


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

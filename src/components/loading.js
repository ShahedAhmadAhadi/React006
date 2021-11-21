import React, { useState } from 'react'
import { LoadingButton } from '@mui/lab'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function Loading() {
    const [loading, setLoading] = useState(false)
    function handleClick() {
        setLoading(!loading)
    }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div>
            <div>

            <FormControlLabel
                sx={{
                    display: 'block',
                }}
                control={
                    <Switch
                        checked={loading}
                        onChange={() => setLoading(!loading)}
                        name="loading"
                        color="primary"
                    />
                }
                label="Loading"
            />
            <LoadingButton variant="contained" loading={loading} onClick={() => { handleClick() }} >Submit</LoadingButton>
            <LoadingButton
                onClick={handleClick}
                loading={loading}
                loadingIndicator="Loading..."
                variant="outlined"
            >
                Fetch data
            </LoadingButton>
            </div>
        </div>
    )
}

export default Loading

import { TextField, Tooltip, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles({
    add: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    }
})

function Insert({ handleAdd }) {

    const [player, setPlayer] = useState('');
    const classes = useStyles();

    return (
        <div>
            <TextField
                value={player}
                onChange={(e) => {
                    setPlayer(e.target.value)
                }}
                label="insert a new player: "
                type="text"
                margin="normal"
                id="insert"
                name="insert"
                fullWidth
            />
            <Tooltip
                title="Add"
                placement="bottom-end"
                className={classes.add} >
                <Fab>
                    <AddIcon
                        type="submit"
                        onClick={(e) => {
                            handleAdd({ player })
                        }} />
                </Fab>
            </Tooltip>
        </div>
    )
}

export default Insert
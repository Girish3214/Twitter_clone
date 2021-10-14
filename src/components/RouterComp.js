import { Grid } from '@mui/material'
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import HeaderBar from './HeaderBar'
import Routers from './Router'

const RouterComp = () => {
    return (
        <Router>
            <Grid container>
          <Grid item xs={3}>
            <HeaderBar />
          </Grid>
          <Grid item xs={9}>
            <Routers />
          </Grid>
        </Grid>
        </Router>
    )
}

export default RouterComp

import { Box, Container } from '@material-ui/core'
import React              from 'react'

import Description        from './Description'
import Header             from './Header'
import Survey             from './Survey'

const Layout = () => (
  <Box mt={10} mb={20}>
    <Container component='main' maxWidth='md'>
      <Header />
      <Description />
      <Survey />
    </Container>
  </Box>
)

export default Layout
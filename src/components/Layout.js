import Container   from '@material-ui/core/Container'
import React       from 'react'

import Description from './Description'
import Header      from './Header'
import Survey      from './Survey'

const Layout = () => (
  <Container maxWidth="md">
    <Header />
    <main>
      <Description />
      <Survey />
    </main>
  </Container>
)

export default Layout
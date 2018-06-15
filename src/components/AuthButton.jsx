import React from 'react'
import { withRouter } from 'react-router-dom'

import fakeAuth from '../fakeAuth'

export default withRouter(
  ({ history }) => (
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push('/'))
          }}
        >
          Sign Out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
  )
)

import React from "react"
import {TitleComponent} from '../components/Title'

const NotFoundPage = () => (
  <div>
    <TitleComponent title="404 Error" />
    <h1>ayy... nothing here!</h1>
    <p>You just hit a route that doesn&#39;t exist...
    the sadness.</p>
  </div>
)

export default NotFoundPage
import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { getGifs } from './actions'

import GifList from './components/GifList'
import GifForm from './components/GifForm'

import './App.css'

function App(props) {
  const { loading, error, getGifs, search } = props

  useEffect(() => {
    getGifs(search)
  }, [search])

  return (
    <div className = 'App'>
      <h1>Search for Gifs</h1>
      <GifForm />
      <br />{error !== '' && <p className='error'>Error: {error}</p>}
      {loading ? <h3>We are loading...</h3> : <GifList/>}

    </div>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    search: state.search
  }
}

export default connect(mapStateToProps, { getGifs })(App);
import {connect} from 'react-redux'
import React from 'react'
import './App.css'
import GifList from './components/GifList'
import GifForm from './components/GifForm'

function App(props) {
  const { loading, error } = props

  return (
    <div className = 'App'>
      <h1>Search for Gifs</h1>
      <GifForm />
      {error !== '' && <p className='error'>{error}</p className='error'>}
      {loading ? <h3>We are loading...</h3> : <GifList/>}

    </div>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, )(App);
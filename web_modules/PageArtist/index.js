import React, { Component, PropTypes } from 'react';
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import ItemDetails from "ItemDetails"

import {connect} from "react-redux"
import {get as getArtist} from "app/reducers/artist"

@connect(
    (state) => ({
      artist: state.artist
    }),
    (dispatch) => ({
      getArtist: (value) => dispatch(getArtist(value)),
    })
  )


export default class PageArtist extends Component {

  static propTypes = {
      params: PropTypes.shape({
        artistId:PropTypes.string,
      }),
      artist : PropTypes.object,
      getArtist: PropTypes.func,
  };

  static defaultProps = {
      params: {},
      artist : null,
      getArtist : () => {}
  };

  ComponentDidMount(){
    const {
      params,
      getArtist,
    } = this.props

    if (params.artistId) getArtist(params.artistId)
  }

  render() {
    const {
      params
    } = this.props
    
    return (
      <div>
        {
            params.artistId &&
            <ItemDetails name={params.artistName}
                         image={"https://camo.githubusercontent.com/90cc8402b761c2c1539fb811b1fa84088552e5b0/687474703a2f2f6973342e6d7a7374617469632e636f6d2f696d6167652f70662f75732f7233302f507572706c65372f76342f38372f38632f34342f38373863343435312d383335622d663031622d383834372d6166303461356238336634622f70725f736f757263652e706e67"}
                         kinds={["...","..."]}
                         songs={[{name:"..."},{name:"..."},{name:"..."}]}  />
        }
      </div>
    )
  }
}

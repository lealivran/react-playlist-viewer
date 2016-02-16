import React, { Component, PropTypes } from 'react';
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"
import InputList from "InputList";

import styles from "./index.css";

import {connect} from "react-redux"
import {get as getArtists} from "app/reducers/artists"

export default class InputArtist extends Component {

  @connect(
    (state) => ({
      artists: state.artists
    }),
    (dispatch) => ({
      getArtists: (value) => dispatch(getArtists(value)),
    })
  )

  static contextTypes = {
      router: PropTypes.object,
  };

  static propTypes = {
    artists : PropTypes.object,
    getArtists: PropTypes.func,
  };

  fetchArtist(name){
    fetchJSON(consts.api.enpoints.getSearch(name,"artist")).then((response) => {
        if(!response.error){
          this.setState({artists:response.artists.items})
        }
    });
  };







  onInputArtistChange = (value) => {
      //this.fetchArtist(value);
      //this.props.getArtists();
      this.props.artists.results;

  };

  selectArtist = (item) => {
      this.context.router.push(`/artist/${item.id}`)
  };

  render() {
    return (
      <div className={styles.input}>
        <InputList title="Search Artists"
              onItemClick={this.selectArtist}
              items={this.state.artists}
              autoFilter={true}
              onInputChange={this.onInputArtistChange} />
      </div>
    )
  }
}

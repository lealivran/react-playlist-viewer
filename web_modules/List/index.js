import React, {PropTypes, Component } from 'react';
import Item from "Item";
import Input from "Input";
import debounce from 'lodash.debounce';

export default class List extends Component {

    static propTypes = {
        title: PropTypes.string,
        items: PropTypes.array,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        title: "",
        items: [],
        onChange: null,
    };

    state = {
        inputValue: ""
    };

    onChangeHandler = (value) => {
      this.setState({inputValue: value})
      this.props.onChange(value)
    };

    render() {

      const {
        title,
        items,
        onChange,
      } = this.props

      const onChangeHandler = (onChange) ? debounce(onChange,30000) : this.onChangeHandler

      return (
        <div className="list">
            {
                <Input placeholder={title} onChange={this.onChangeHandler}/>
            }
            {
              items &&
              items.map((item, index) => {
                return (
                    item.name && item.name.toLowerCase().search(this.state.inputValue)!=-1 &&
                    <Item key={index} name={item.name} />
                );
              })
            }
        </div>)

    }
}

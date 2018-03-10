import React, { Component} from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { setMovies } from '../actions'

class SearchMovies extends Component {
    constructor() {
        super()

        this.state = {
            title: '',
            searched: '',
            year: ''
        }
    }
    search () {
        const api = 'apikey=9959aa63'
        let {title, searched, year} = this.state
        if ( title !== ''){
            const url = `http://www.omdbapi.com/?t=${title}&y=${year}&${api}`
            fetch(url, {
                method: 'GET'
            }).then(res => res.json())
                .then(json => {
                    this.props.setMovies(json)
                })
                title = ''
        }
        else if (searched !== ''){
            const url = `http://www.omdbapi.com/?s=${searched}&y=${year}&${api}`
            fetch(url, {
                method: 'GET'
            }).then(res => res.json())
                .then(json => {
                    this.props.setMovies(json)
                })
                searched=''
        }
    }


    render () {
        return (
            <Form inline>
            <FormGroup>
                <ControlLabel>Search by exact Movie name: </ControlLabel>
                    &nbsp;
                <FormControl type="text" placeholder="The Dark Knight"
                        onChange={event => this.setState({ title: event.target.value.replace(/ /g, "+")})}
                    />
            </FormGroup>
            &nbsp;&nbsp;
            <FormGroup>
                    <ControlLabel>General movies search: </ControlLabel>
                    &nbsp;
                <FormControl type="text" placeholder="The Dark Knight"
                        onChange={event => this.setState({ searched: event.target.value.replace(/ /g, "+") })}
                    />
                </FormGroup>
            &nbsp;&nbsp;
            <FormGroup>
                <ControlLabel>Year:</ControlLabel>
                &nbsp;
                <FormControl type="text" placeholder="2008"
                onChange={event => this.setState({year: event.target.value})}
                />
            </FormGroup>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={() => this.search()}> Search</Button>
            </Form>
        )
    }
}

export default connect(null, {setMovies}) (SearchMovies)
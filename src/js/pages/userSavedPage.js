var React = require('react');
var fetch = require('whatwg-fetch');
var User = require('../models/User.js')

var userSavedPage = React.createClass({
    getInitialState: function() {
        return {
            dataToSend: { email:"", saved: [""] },
            status: null,;
            response: null
        };
    },

    handleSendData: function (e) {
        // Set status to 'posting...' and kick off the post
        this.setState({ status: 'Posting...' }, this.postData);
    },

    postData: function() {
        fetch('/users/:id', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.dataToSend)
        }).then(function(response) {
            return response.json()
        }).then(function(json) {
            this.setState({ response: json, status: 'Done.' });
        }).catch(function(ex) {
            this.setState({ status: 'error!' });
            console.log('parsing failed', ex)
        });
    },

    render: function() {
        return (
            <div>
                <button onClick={this.handleSendData}>Send Data</button>
                <div>{this.state.status}</div>
                <div>{this.state.response}</div>
            </div>
    }
});

module.exports = userSavedPage;
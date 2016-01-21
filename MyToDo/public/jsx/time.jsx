/** @jsx React.DOM */

var TimerExample = React.createClass({

    getInitialState: function(){
        return { elapsed: 0 };
    },

    componentDidMount: function(){
        this.timer = setInterval(this.tick, 50);
    },

    componentWillUnmount: function(){
        clearInterval(this.timer);
    },

    tick: function(){
        this.setState({elapsed: new Date() - this.props.start});
    },

    render: function() {
        var datetime = new Date();
		var currenttime = datetime.toLocaleDateString()+" "+ datetime.toLocaleTimeString();
        return <p><b>{currenttime}</b></p>;
    }
});


React.render(
    <TimerExample start={Date.now()} />,
    document.getElementById('DateTime')
);
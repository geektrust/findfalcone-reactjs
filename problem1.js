var CommentBox = React.createClass({
    render: function() {
        return ( < div className = "commentBox" >
            Hello, world!I am a CommentBox. < /div>
        );
    }
});

var SelectPlanets = React.createClass({
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: this.succesHandler
        });
    },
    getInitialState: function() {
        return {
            planets: []
        }
    },
    succesHandler: function(data) {
        this.setState({
            planets: data
        })
    },
    render: function() {
        return ( < div > < select > {
            this.state.planets.map(function(planet) {
                return <option key = {
                    planet.name
                }
                value = {
                    planet.distance
                }
                label = {
                    planet.name
                } > {
                    planet.name
                } < /option>        
            })
        } < /select> </div > );
    }
});


var SelectPlanetList = React.createClass({
            render: function() {
                return ( < div > < h3 > Planets to Search
                    for Falcone < /h3>  < SelectPlanets url = "http://findfalcone.herokuapp.com/planets" / >
                    < SelectPlanets url = "http://findfalcone.herokuapp.com/planets" / >
                    < SelectPlanets url = "http://findfalcone.herokuapp.com/planets" / >
                    < SelectPlanets url = "http://findfalcone.herokuapp.com/planets" / >
                    < /div>)
                }
            })


        ReactDOM.render( < SelectPlanetList / > ,
            document.getElementById('content')
        );
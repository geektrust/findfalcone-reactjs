var SelectPlanets = React.createClass({
    render: function() {
        return ( < div > < select > {
            this.props.optionData.map(function(planet) {
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

    render : function(){
    	     return ( < div className = "container" > < h3 > Planets to Search
            for Falcone < /h3>  <div className ="row"> <div className="col-md-3">< SelectPlanets optionData={this.state.planets} / > </div> <div className="col-md-3 ">< SelectPlanets  optionData={this.state.planets} / ></div> <div className="col-md-3">< SelectPlanets optionData={this.state.planets} / > < /div> <div className="col-md-3"> < SelectPlanets optionData={this.state.planets} / > < /div> < /div> < /div > )
    }

});


ReactDOM.render( < SelectPlanetList url = "http://findfalcone.herokuapp.com/planets"/ > ,
    document.getElementById('content')
);
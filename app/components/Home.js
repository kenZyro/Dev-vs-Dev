var React = require("react");

var Link = require("react-router-dom").Link;
class Home extends React.Component{
render(){

return(

<div className="home-containers">

<h1 className="main" >Dev Vs Dev: battle other devs</h1>

<Link className='button' to='/battle'>
    Battle

</Link>



</div>

)
}
}

module.exports = Home;
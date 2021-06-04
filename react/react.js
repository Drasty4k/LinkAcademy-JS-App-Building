class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const renderH1 = () => {
            if(this.props.name === 'Dragos'){
                return <h1>Hello, sir!</h1>
            }
            return <h1>Hello { this.props.name.toUpperCase() }</h1>
        }
        const h1 = renderH1()
        return  <div>
                    { h1 }
                </div>
        
    }
}

class Clicker extends React.Component {
    constructor() {
        super()
        // starea initiala a componentei
        this.state = {
            clicks: 0
        }
    }
    render() {
        
        return <button onClick={ this.increment }>You clicked { this.state.clicks } times</button>
    }

    // definind metoda ca arrow function se face automat bind la this
    increment = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }
    
}

const template = 
<div>
    <Welcome name="Dragos" ></Welcome>
    <Clicker></Clicker>
</div>

ReactDOM.render(
    template,
    document.getElementById('root')
)


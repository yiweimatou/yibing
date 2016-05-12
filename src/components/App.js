import React from 'react'
import {Tabs,Tab} from 'material-ui/Tabs'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import {
	getMuiTheme,
	MuiThemeProvider
} from 'material-ui/styles'

class App extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state = {
            value:'home',
            title:'主页',
            navLeft:<i />,//<IconButton><NavigationArrowBack /></IconButton>
            navRight:null
        }
    }
    static propTypes = {
        children:React.PropTypes.node
    }
    static contextTypes = {
        router:React.PropTypes.object
    }
    componentWillMount(){
        if(!this.props.location.pathname) return
        switch (this.props.location.pathnem) {
            case '/me':
                this.setState({
                    title:'我',
                    value:'me'
                })
                break;
        
            default:
                break;
        }
    }
    handleChange = (value)=>{
        this.setState({
            value:value
        })
        switch(value){
            case 'home':
                this.context.router.push('/home')
                this.setState({
                    title:'主页'
                })
                break
            case 'me' :
                this.context.router.push('/me')
                this.setState({
                    title:'我'
                })
                break
            default:
                break
        }
    }
    styles = {
        flex:{
            display:'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        },
        content:{
            flex:1
        },
        title:{
            textAlign:'center'
        }
    }
    render(){
        return(
            <MuiThemeProvider muiTheme = {getMuiTheme()}>
                <div style = {this.styles.flex}>
                    <AppBar
                        title = {this.state.title}
                        titleStyle = {this.styles.title}
                        iconElementLeft = {this.state.navLeft}
                        iconElementRight = {this.state.navRight}
                    />
                    <div style={this.styles.content}>
                        {this.props.children}
                    </div>
                    <Tabs
                        value = {this.state.value}
                        onChange = {this.handleChange}
                    >
                        <Tab
                            icon = {<i className="fa fa-home" />}
                            label = "主页"
                            value ="home"
                        />
                        <Tab 
                            icon = {<i className="fa fa-book" />}
                            label = "通讯录"
                            value = "contacts"
                        />
                        <Tab
                            icon = {<i className="fa fa-compass"/>}
                            label = "发现"
                            value = "discover"
                        />
                        <Tab
                            icon = {<i className="fa fa-user" />}
                            label = "我"
                            value = "me"
                        />
                    </Tabs>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
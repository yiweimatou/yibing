import React from 'react'
import {Tabs,Tab} from 'material-ui/Tabs'
import {
	getMuiTheme,
	MuiThemeProvider
} from 'material-ui/styles'

class App extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state = {
            value:'home'
        }
    }
    static propTypes = {
        children:React.PropTypes.node
    }
    static contextTypes = {
        router:React.PropTypes.object
    }
    handleChange = (value)=>{
        this.setState({
            value:value
        })
        switch(value){
            case 'home':
                this.context.router.push('/home')
                break
            case 'me' :
                this.context.router.push('/me')
                break
            default:
                break
        }
    }
    styles = {
        flex:{
            display:'flex',
            flexDirection: 'column',
            // flexWrap:'wrap'
            minHeight: '100vh'
        },
        content:{
            flex:1
        }
    }
    render(){
        return(
            <MuiThemeProvider muiTheme = {getMuiTheme()}>
                <div style = {this.styles.flex}>
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
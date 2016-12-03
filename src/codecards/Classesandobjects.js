import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import ReactMarkdown from 'react-markdown';
import RaisedButton from 'material-ui/RaisedButton';


// the markdown text
const Classesandobjectstext = `
### Classes and Objects

### What is a class ?
This is a data type blueprint.
<p>
<b>Remember</b> <br />
The data type of a number is  <b>int</b> <br />
The data type of a character is <b>char</b> <br />
</p>
<br />
So The data type of an object is a <b>Class</b> :)
<br />

#### What is an Object
An object is an instance of a Class <br />
<b> Remember </b>
<br />
<b>int data </b> means that <b>data </b> is an instance of type <b><b> int </b></b>
<br /><br />

 In that Case : In the following example-
 <br />
 <b>Lines line1;</b> <br />
 line1(which is an object)
 is an instance of Lines(which is a class).

 #### What of class member functions?

 This are functions which are defined within a class

 #### And what about access modifiers ?

 Access restrictions and accessibility to data within a class are classified under
  - public
  - private
  - protected

In OOP data is meant to be protected and not flow in the program freely.
<br />
If non of the above three access modifiers are defined in class. The members in the class are defaulted to <b> private. </b>
<br />

#### What do friend functions do ?
This are functions that are defined outside a class but have access to the class's private and protected fields.

### Constructors and destructors

A COnstructor is a special function that is called once an object of a class has been created.
 - In the code example you will find a Constructor example that takes parameters.
<br />
A destructor
This function is called once an object is destroyed or taken out of scope.
It never takes a parameter.

`;


export default class Classesandobjects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };


  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <div
        style={{maxWidth: '95%', position: 'relative', margin: 'auto'}}
      >
        <div style={{height: 40}}/>
        <Card
          style={{maxWidth: 600, position: 'relative', margin: 'auto', marginBottom: 20}}
          expanded={this.state.expanded}
          zDepth={3}
          onExpandChange={this.handleExpandChange}
        >
          <CardHeader
            title="Classes and objects"
            subtitle="By Tevin Thuku of House Stark"
            avatar={<Avatar>C</Avatar>}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText>
          </CardText>
          <CardText expandable={true}>
            <ReactMarkdown source={Classesandobjectstext} />
            <div style={{height: 20}}/>

            <RaisedButton
              label="Code Example"
              fullWidth={true}
              primary={true}
              href="https://gist.github.com/Tevinthuku/62ffe30013a86729c158f83105cfe4d3"
              target='_blank'
            />

          </CardText>
          <CardActions>
            <FlatButton label="Expand" onTouchTap={this.handleExpand} />
            <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

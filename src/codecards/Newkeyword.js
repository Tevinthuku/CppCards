import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import ReactMarkdown from 'react-markdown';
import RaisedButton from 'material-ui/RaisedButton';


// the markdown text
const newkeywordtext = `
### The new Keyword : TL:DR

We use the new keyword in most cases when creating an object / an array of objects from a class and yet you want memory allocated to it. (i.e: the objects or the array).

###### NB: There's an example in the code sample

#### The catch:
If you are to use the new keyword. You must accompany it with the delete keyword to deallocate memory from the object or array.
<p>
If not you will have a <b>memory leak</b>
</p>

#### What is a memory leak.
This is where an object is still stored in the memory but cannot be accessed by the currently running code.

<p>
C++ does not have an automatic garbage collector so we need to deallocate the memory manually

</p>

#### Garbage collection??
This is the act of deallocating memory. (ie: Getting rid of the objects that are still in memory but are not being used)
<p>
One way of doing this is by using the <b>delete</b>
Keyword
</p>

An example is in the code. Press the link below

`;


export default class Newkeyword extends React.Component {

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
            title="New Keyword"
            subtitle="By Tevin Thuku Of House Stark"
            avatar={<Avatar>N</Avatar>}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText>
          </CardText>
          <CardText expandable={true}>
            <ReactMarkdown source={newkeywordtext} />
            <div style={{height: 20}}/>

            <RaisedButton
              label="Code Example"
              fullWidth={true}
              primary={true}
              href="https://gist.github.com/Tevinthuku/85b6062e8cb6c236a3c602ad58a5a214"
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

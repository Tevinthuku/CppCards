import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import ReactMarkdown from 'react-markdown';
import RaisedButton from 'material-ui/RaisedButton';

// the markdown text
const pointerstext = `
### Why do we need pointers ?

Pointers are necessary when it comes to dynamic memory allocation.

#### What are pointers?

Pointers are variables that hold the address of other variables.

The address of other variables are accessible via the & (ampersand) sign.

#### What about pointers and variables .. Are they the same thing ?

Nope. But they are closely related.
By this I mean that pointers can access an array.

A pointer pointing to an array can access that array.

#### And what about an array of pointers ? What is that ?

An array of pointers is whereby we want an array to hold the memory address of any particular data type of your choosing.
Could be
 - Int
 - Char
 - String
 - Float

#### Can a pointer point to a pointer ?
<p>Yeap. They can .. For this we use ( ** ).
A double asterisks</p>
The first pointer contains the address of the second pointer, which points to the location of the address of a variable.
`;

export default class Pointers extends React.Component {

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
            title="Pointers"
            subtitle="By Tevin Thuku"
            avatar={<Avatar>P</Avatar>}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText>
          </CardText>
          <CardText expandable={true}>
            <ReactMarkdown source={pointerstext} />
            <div style={{height: 20}}/>
            {/* contributing button link */}
            <RaisedButton
              label="Code Example"
              fullWidth={true}
              secondary={true}
              href="https://gist.github.com/Tevinthuku/6a1f50b34795ba9711bd0b8961b21cbd"
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

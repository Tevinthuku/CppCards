import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import ReactMarkdown from 'react-markdown';
import RaisedButton from 'material-ui/RaisedButton';


// the markdown text
const arraystext = `
### Arrays

#### What are arrays?

This is a data structure that stores elements of the same <b>type</b>
<p>
We can have arrays of the following types
</p>
<ul>Integers</ul>
<ul>String</ul>
<ul>Floats</ul>
<ul>Characters</ul>

`;


export default class Arrays extends React.Component {

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
            title="Arrays"
            subtitle="By Tevin Thuku"
            avatar={<Avatar>A</Avatar>}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText>
          </CardText>
          <CardText expandable={true}>
            <ReactMarkdown source={arraystext} />
            <div style={{height: 20}}/>

            <RaisedButton
              label="Code Example"
              fullWidth={true}
              primary={true}
              href="https://gist.github.com/Tevinthuku/1750f3329438dde69997967ce82ecfe0"
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

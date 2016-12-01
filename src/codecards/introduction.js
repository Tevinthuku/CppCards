import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import ReactMarkdown from 'react-markdown';
import RaisedButton from 'material-ui/RaisedButton';

// the markdown text
const introductiontext = `
## Hello,
<p>This are twitter like cards meant to help you learn <b>C++</b></p>

### About
<p>They will have a brief summary of the main concepts in <b>C++</b>.

### How to use this software
- On mobile: Swipe left of right / Hit the icon in the app-bar to drop down a menu of what is in the app.

- On desktop:  Hit the icon in the app-bar to drop down a menu of what is in the app.

#### Do you want to contribute to the content ?
<code>
  #include <iostream>
</code>
`;

export default class Introduction extends React.Component {

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
            title="Introduction"
            subtitle="By Tevin Thuku"
            avatar={<Avatar>I</Avatar>}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText>
          </CardText>
          <CardText expandable={true}>
            <ReactMarkdown source={introductiontext} />
            <div style={{height: 20}}/>
            {/* contributing button link */}
            <RaisedButton
              label="Contributing"
              fullWidth={true}
              primary={true}
              href="https://guides.github.com/activities/contributing-to-open-source/"
              target='_blank'
            />
            <div style={{height: 5}}/>
            <RaisedButton
              label="The code"
              fullWidth={true}
              secondary={true}
              href="https://guides.github.com/activities/contributing-to-open-source/"
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

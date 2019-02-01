import React from 'react'
import M from 'moment'
import { Tab } from 'semantic-ui-react'
//GET THE UNIX CODES AND ADD FILTERS, SO YOU CAN SHOW THOSE IN THE TABS.

const today = M().format("MM/DD")

export const xboxPanes = [
  { menuItem: 'Yesterday', render: (props) => <Tab.Pane attached={false}>{console.log(props.games.games.filter(elem => elem.date === 1548892800))}</Tab.Pane> },
  { menuItem: `${today}`, render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tommorow', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

export const playstationPanes = [
  { menuItem: 'Yesterday', render: (props) => <Tab.Pane attached={false}>{props.games.success.success}</Tab.Pane> },
  { menuItem: `${today}`, render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tommorow', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

export const switchPanes = [
  { menuItem: 'Yesterday', render: (props) => <Tab.Pane attached={false}>{props.games.success.success}</Tab.Pane> },
  { menuItem: `${today}`, render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tommorow', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]
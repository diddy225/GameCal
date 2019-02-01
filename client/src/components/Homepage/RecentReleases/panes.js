import React from 'react'
import M from 'moment'
import { Tab } from 'semantic-ui-react'


const today = M().format("MM/DD")

export const xboxPanes = [
  { menuItem: 'Yesterday', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: `${today}`, render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tommorow', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

export const playstationPanes = [
  { menuItem: 'Yesterday', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: `${today}`, render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tommorow', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

export const switchPanes = [
  { menuItem: 'Yesterday', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: `${today}`, render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tommorow', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]
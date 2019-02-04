import React from 'react'
import moment from 'moment'
import { Tab } from 'semantic-ui-react'
const yesterdayUnix = moment.utc().startOf('day').subtract(1, 'd').format('X')
const tomrrowUnix = moment.utc().startOf('day').add(1, 'd').format('X')
const todayUnix = moment.utc().startOf('day').format('X')
const today = moment().format("MM/DD")


//YOU WILL NEED AN API CALL FOR EACH CONSOLE PER DAY...UNLESS YOU CAN FIGURE OUT ANOTHER WAY???
const xboxPane = (props,unixStamp) => {
  return (
    <Tab.Pane attached={false}>
      <div>
        { props.games.filter(elem => elem.date === parseInt(unixStamp)).filter(elem => elem.game.platforms.filter(c => c.name === "Xbox One")) }
      </div>
    </Tab.Pane>
  )
}

export const xboxPanes = [
  { menuItem: 'Yesterday', render: (props) => xboxPane(props, yesterdayUnix)},
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
import moment from 'moment'
import TabPane from './TabPane'
const yesterdayUnix = moment.utc().startOf('day').subtract(2, 'd').format('X')
const tomrrowUnix = moment.utc().startOf('day').format('X')
const todayUnix = moment.utc().startOf('day').subtract(1, 'd').format('X')
const today = moment().format("MMM Do")

export const xboxPanes = [
  { menuItem: 'Yesterday', render: (props) => TabPane(props.games, yesterdayUnix, "Xbox One") },
  { menuItem: `${today}`, render: (props) => TabPane(props.games, todayUnix, "Xbox One") },
  { menuItem: 'Tommorow', render: (props) => TabPane(props.games, tomrrowUnix, "Xbox One") },
]

export const playstationPanes = [
  { menuItem: 'Yesterday', render: (props) => TabPane(props.games, yesterdayUnix, "PlayStation 4") },
  { menuItem: `${today}`, render: (props) =>  TabPane(props.games, todayUnix, "PlayStation 4") },
  { menuItem: 'Tommorow', render: (props) =>  TabPane(props.games, tomrrowUnix, "PlayStation 4") },
]

export const switchPanes = [
  { menuItem: 'Yesterday', render: (props) => TabPane(props.games, yesterdayUnix, "Nintendo Switch") },
  { menuItem: `${today}`, render: (props) => TabPane(props.games, todayUnix, "Nintendo Switch") },
  { menuItem: 'Tommorow', render: (props) => TabPane(props.games, tomrrowUnix, "Nintendo Switch") },
]
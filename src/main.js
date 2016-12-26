import { start } from './Game'
import './index.scss';

var players = [{
	name: 'A',
	color: 'blue'
}, {
	name: 'B',
	color: 'yellow'
}, {
	name: 'C',
	color: 'green'
}, {
	name: 'D',
	color: 'red'
}]

start(players)
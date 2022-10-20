import data from './data.json' assert { type: 'json' };

let d = new Date();
let today = d.toDateString().slice(0, 3).toLowerCase();

const days = document.querySelectorAll('.day');

days.forEach((day) => {
	if (today === day.dataset.day) {
		document.getElementById(`${day.innerText}-bar`).style.backgroundColor =
			'hsl(186, 34%, 60%)';
	}
});

const amountArray = data.map((el) => el.amount);
const maxSpend = amountArray.reduce((a, b) => {
	return Math.max(a, b);
}, 0);
const maxSpendBarHeight = maxSpend * 1.25;
const barMaxHeightInPixels = 250;

function calcBarHeight(amount) {
	return (amount / maxSpendBarHeight) * barMaxHeightInPixels;
}

data.forEach((datum) => {
	days.forEach((day) => {
		if (datum.day === day.dataset.day) {
			document.getElementById(
				`${day.innerText}-bar`
			).style.height = `${calcBarHeight(datum.amount)}px`;
			document.getElementById(
				`${day.innerText}-amount`
			).innerText = `$${datum.amount}`;
		}
	});
});

# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Learning & Development](#learning-&-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](./images/screenshot.png)

### Links

- Solution URL: [https://github.com/akshaypatel99/frontend-mentor/tree/main/expenses-chart-component](https://github.com/akshaypatel99/frontend-mentor/tree/main/expenses-chart-component)
- Live Site URL: [https://akshaypatel99.github.io/expenses-chart-component/](https://akshaypatel99.github.io/expenses-chart-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### Learning & Development

Practicing and reinforcing my knowledge of HTML, CSS and JS.

```js
days.forEach((day) => {
	if (today === day.dataset.day) {
		document.getElementById(`${day.innerText}-bar`).style.backgroundColor =
			'hsl(186, 34%, 60%)';
	}
});

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
```

## Author

- Website - [Akshay Patel](https://www.akshaypatel.dev)
- Frontend Mentor - [@akshaypatel99](https://www.frontendmentor.io/profile/akshaypatel99)
- Twitter - [@laidbackak](https://www.twitter.com/laidbackak)

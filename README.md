# Analytics Challenge
A React app that displays stock prices and its charts.




## Installation Instructions

### Set it up
1. `$ git clone` it into your chosen directory
2. `$ cd` into it
3. `$ yarn install` or `npm install`
4. Edit `.env_sample` and replace `YOUR_API_KEY_HERE` with your API key.
	- You can get a free one [here](https://financialmodelingprep.com/developer/docs/pricing/)
5. Rename the `.env_sample` file with `.env`

### Run it
* `$ yarn start` or `npm run start`

### Build it
* `yarn build` or `npm run build`



## Future Releases

### Improvements
- [ ] Create automated tests
- [ ] Add new stock data to compare when in view page
- [ ] Add new types of charts for each company
- [ ] Make table headers clickable to order the search based on the stock list shown
- [ ] Create filters (Price range), (Exchange)
- React API
	- [ ] Refactor some elements that need global state to share with others
	- [ ] Implement `useState` more on certain cases

### Known issues
- Can't compare more than 3 companies, since the API only allows it up to 3



## Used APIs
- Stock data: [Financial Modeling Prep](https://financialmodelingprep.com)
- Charts: [Chart.js](https://www.chartjs.org/)



## An Honest Disclaimer
This challenge was easily one of the most `challenging` I've already done. *But why? This is just a simple application, isn't it?*<br/>
<br/>
Well... I've dedicated myself with the programming world for almost 2 years, and since I tried web dev for the first time, I've felt a passion for it.<br/>
I've done a few website projects using pure `html` `css` and `javascript`. Sometimes using `pre-processors` such as `sass` and `typescript`, but essentially they are all the same.<br/>
When this project *kind of required* to be done using ReactJS, a technology I've never really dealt with, it really scared me. Now that the project is done, or at least its main idea is, my web browsers are in pain with such many history indexed from googling tons of questions and documentation from the used APIs. I had only set one requirement for this project. Not to google solutions, and deliver whatever my limitations took me to.<br/>
Experienced React devs can easily spot those limitations, such as components that could become their own, and use global states. But I did't really understand that yet. So I've just put them all in the same place to have their states shared, and used vanilla JS DOM manipulations when I found myself on those situations.<br/>
With that said, I can easily say that I am very proud of what I've come up with. I also hope that in a near future, those `improvements` will be all checked and it'll all be free of those nasty bugs. :)

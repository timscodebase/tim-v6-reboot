<h1>Gresham Hacktoberfest Jam</h1>
<p>
	Let's come together to celebrate open source software and the Gresham community! We'll be hosting
	a Hacktoberfest Jam in on October 7th from 12pm to 5pm. Come join us for a day of learning,
	hacking, and fun!
</p>

<p>More information to come, as we find a location, and finalize a few more details</p>

<div class="map">
	<iframe
		title="Gresham Hacktoberfest Jam"
		style="border:0"
		loading="lazy"
		allowfullscreen
		referrerpolicy="no-referrer-when-downgrade"
		src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBcKwV9qpObdXpCReq1dDMyIkqBa0fcf3k&q=Gresham+OR`}
	/>
</div>

<style>
	.map {
		position: relative;
		height: 60vh;
		margin: var(--spacer) 0;
		background: var(--gradient-red);
		border-radius: var(--spacer);
	}
	.map::after {
		position: absolute;
		content: '';
		display: block;
		top: 50%;
		left: 50%;
		border-radius: calc(var(--spacer) / 2);
		transform: translate(-50%, -50%);
		width: calc(100% - var(--spacer));
		height: calc(100% - var(--spacer));
		background: var(--color-blue);
	}
	iframe {
		position: relative;
		z-index: 5;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: calc(100% - var(--spacer));
		height: calc(100% - var(--spacer));
		border-radius: calc(var(--spacer) / 2);
	}
</style>

<script lang="ts">
	import type { ResumeDataType } from '$lib/types'

	import { Job } from '$lib'
	import { School } from '$lib'

	const data: ResumeDataType = {
		articles: [
			{
				title:
					'CSS-Tricks.com - HTML, CSS, and JS in an ADD, OCD, Bi-Polar, Dyslexic and Autistic World',
				url: 'https://css-tricks.com/html-css-js-add-ocd-bi-polar-dyslexic-autistic-world/'
			},
			{
				title: 'Sapper/SvelteKit + CSS Houdini',
				url: 'https://dev.to/tithos/sveltekit-css-houdini-59l8'
			}
		],
		education: [
			{
				name: 'Diablo Valley College',
				location: 'Pleasant Hill, CA',
				startYear: 2018,
				endYear: 2020,
				fieldsOfStudy: ['Statistics', 'Sociology', 'Psychology']
			},
			{
				name: 'Contra Costa College',
				location: 'San Pablo, CA',
				startYear: 2016,
				endYear: 2018,
				fieldsOfStudy: ['S.P.I.R.I.T']
			},
			{
				name: 'Diablo Valley College',
				location: 'Pleasant Hill, CA',
				dates: '2006 - 2008',
				startYear: 2006,
				endYear: 2008,
				fieldsOfStudy: ['Algebra', 'Statistics', 'Computer Science']
			},
			{
				name: 'Harford Community College',
				location: 'Bel Air, MD',
				startYear: 2000,
				endYear: 2002,
				fieldsOfStudy: ['Art History', 'Mathematics', 'Computer Information Systems']
			}
		],
		jobs: [
			{
				title: 'Frontend Engineer',
				company: 'Gap, Inc.',
				location: 'San Francisco, CA',
				startYear: 2021,
				endYear: 2022,
				description:
					"Built standards-based, reusable React components for GAP's checkout flow UI. xAPI is used in place of other flux libraries to pass data throughout the site and other parts of the application. I helped to move GAP towards microservices by upgrading their node version allowing better use of modern APIs. All of the code and components I wrote were tested at the code level with full-on E2E testing suites. Another part of my role at gap is DevOps and maintaining core metrics for the app's health.",
				skills: [
					'React',
					'Javascript',
					'TypeScript',
					'Node',
					'Agile',
					'Jira',
					'Figma',
					'Confluence',
					'Github',
					'xAPI',
					'Splunk',
					'New Relic',
					'Kubernetes',
					'Redux',
					'Docker'
				]
			},
			{
				title: 'Senior Frontend Developer',
				company: 'SpotKey, Inc',
				location: 'San Francisco, CA',
				startYear: 2014,
				endYear: 2016,
				description:
					"As the lead Frontend Developer, I was responsible for choosing and implementing the stack of our company's corporate website and core product. Worked closely with the Backend and iOS developers on the data schemas database design and the internal and external APIs. I wrote the entire front and UI of the website and app.",
				skills: ['Ruby on Rails', 'Angular 2', 'Javascript', 'Node', 'MySQL', 'MongoDB', 'Github']
			},
			{
				title: 'Senior Frontend Developer',
				company: 'LafLife',
				location: 'San Francisco, CA',
				startYear: 2013,
				endYear: 2014,
				description:
					'Maintained and built several iterations of the company website and application design. Was in charge of designing and implementing the voting system. Worked closely with and mentored a junior developer while building out the functionality. I wrote the entire front and UI of the website and app.',
				skills: ['Backbone', 'Foundation', 'CSS', 'Javascript', 'Ruby on Rails', 'Node', 'jQuery']
			},
			{
				title: 'Email Marketing',
				company: 'Zynga',
				location: 'San Francisco, CA',
				startYear: 2010,
				endYear: 2012,
				description:
					"Built and maintained email marketing campaigns for several of Zynga's featured games. Hand-coded each email to ensure maximum compatibility with many email clients. We utilized testing suites to ensure quality and click-through. I was consulted on the layout and UI of mobile emails.",
				skills: ['HTML', 'HAML', 'Javascript', 'Photoshop']
			},
			{
				title: 'Frontend Developer',
				company: 'The Clorox Company',
				location: 'Oakland, CA',
				startYear: 2010,
				endYear: 2012,
				description:
					'My role was to update their codebase by removing jQuery and MooTools and replacing them with vanilla Javascript. Another responsibility was building new mobile-first templates for their Brita products.',
				skills: ['HTML', 'CSS', 'Javascript', 'jQuery']
			}
		]
	}

	const { articles, education, jobs } = data
</script>

<svelte:head>
	<title>Tim Smith's Resume</title>
	<link rel="canonical" href="https://timsmith.tech" />
	<meta name="description" content="Here is my resume.  Hire me!" />
</svelte:head>

<h1>Resume</h1>

<h2>Past Jobs</h2>
{#each jobs as job}
	<Job {job} />
{/each}

<h2>Education</h2>
{#each education as school}
	<School {school} />
{/each}

<h2>Articles</h2>
<ul class="articles">
	{#each articles as article}
		<li />
	{/each}
</ul>

<style>
	.articles {
		padding-bottom: 2rem;
	}
	h2 {
		background: var(--gradient-red);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 100% 200%;
		background-position-y: 100%;
		animation: pulse 2s ease-in-out infinite;
		margin: 1rem 0 0 0;
	}

	li {
		padding-top: 0.5rem;
	}
</style>

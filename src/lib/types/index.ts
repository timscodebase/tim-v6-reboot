export type ArticlesType = {
	title: string
	url: string
}

export type EducationType = {
	name: string
	location: string
	startYear: number
	endYear: number | null
	fieldsOfStudy: string[]
}

export type JobsType = {
	role: string
	company: string
	startYear: number
	endYear: number | null
	description: string
	jobSkills: string[]
}

export type ProjectType = {
	name: string
	image: string
	description: string
	url: string
	github: string
	tech: string[]
}

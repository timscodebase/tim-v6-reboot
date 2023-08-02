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
	title: string
	company: string
	location: string
	startYear: number
	endYear: number | null
	description: string
	skills: string[]
}

export type ProjectType = {
	name: string
	image: string
	description: string
	url: string
	github: string
	tech: string[]
}

export type ResumeDataType = {
	articles: ArticlesType[]
	education: EducationType[]
	jobs: JobsType[]
}
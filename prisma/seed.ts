import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

// type Project = {
//   name: string
//   image: string
//   description: string
//   url: string
//   github: string
// }

type Job = {
  role: string
  company: string
  startYear: number
  endYear: number
  description: string
}

type School = {
  name: string
  location: string
  startYear: number
  endYear: number
}

type Article = {
  title: string
  url: string
}

async function getProjects() {
  const res = await fetch('http://localhost:5173/api/projects')
  const { projects } = await res.json()
  return projects as Project[]
}

async function getArticles() {
  const res = await fetch('http://localhost:5173/api/articles')
  const { articles } = await res.json()
  return articles as Article[]
}

async function getJobs() {
  const res = await fetch('http://localhost:5173/api/jobs')
  const { jobs } = await res.json()
  console.log('jobs', jobs);
  return jobs as Job[]
}

async function getSchools() {
  const res = await fetch('http://localhost:5173/api/jobs')
  const { schools } = await res.json()
  console.log('schools', schools);
  return schools as School[]
}

async function main() {
  const projects = await getProjects()
  const articles = await getArticles()
  const jobs = await getJobs()
  const schools = await getSchools()

  for (const project of projects) {
    await db.project.create({
      data: {
        name: project.name,
        image: project.image,
        description: project.description,
        url: project.url,
        github: project.github
      }
    })
  }

  for (const article of articles) {
    await db.article.create({
      data: {
        title: article.title,
        url: article.url,
      }
    })
  }
  
}

main()
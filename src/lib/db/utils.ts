import db from './db'

import type {
  ArticlesType,
  EducationType,
  JobsType,
  ProjectType
} from '../types'

export async function fetchArticles(): Promise<void> {
  db.on('connect', () => {
    console.log('Redis client connected')
    // db.get('articles', (err, reply) => {
    //   if (err) {
    //     console.error('ERR:REDIS:', err)
    //     return
    //   }
    //   console.log('articles: ', reply)
    // })
  })
  db.on('error', err => console.error('ERR:REDIS:', err))
}

export async function fetchEducation(): Promise<EducationType[]> {
  try {
    const education = await db.get('education')
    if (!education) {
      return []
    }

    console.log('education: ', education);

    return JSON.parse(education)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch education')
  }
}

export async function fetchJobs(): Promise<JobsType[]> {
  try {
    const jobs = await db.get('jobs')
    if (!jobs) {
      return []
    }

    console.log('jobs: ', jobs);

    return JSON.parse(jobs)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch jobs')
  }
}

export async function fetchProjects(): Promise<ProjectType[]> {
  try {
    const projects = await db.get('projects')
    if (!projects) {
      return []
    }

    console.log('projects: ', projects);

    return JSON.parse(projects)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch projects')
  }
}
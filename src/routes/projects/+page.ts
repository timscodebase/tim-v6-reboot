import { fetchProjects } from 'lib/db/utils';

export const load = async () => {
  const projects = await fetchProjects()
  return { projects }
};

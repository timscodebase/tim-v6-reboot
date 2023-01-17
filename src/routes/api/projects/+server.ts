import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const options: ResponseInit = {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  }

  const projects = {
    "projects": [
      {
        "name": "SpaceX API Fun",
        "image": "https://res.cloudinary.com/tihos/image/upload/c_scale,f_auto,q_auto,w_488/v1663094189/rpsls_ouki6m.png",
        "description": "This app shows the latest SpaceX launches and rockets. It also shows the latest news from SpaceX. It was built with SvelteKit, Graphql Request and Graphql.",
        "url": "https://spacex-api-fun.netlify.app",
        "github": "https://github.com/timscodebase/spaceX",
        "tech": [
          "Svelte",
          "Playwright",
          "CSS",
          "HTML",
          "TypeScript",
          "GraphQL",
          "Graphql Request",
          "Netlify"
        ]
      },
      {
        "name": "Rock, Paper, Scissors, Lizards, Spock",
        "image": "https://res.cloudinary.com/tihos/image/upload/c_scale,f_auto,q_auto,w_488/v1663094189/rpsls_ouki6m.png",
        "description": "A Rock, Paper, Scissors, Lizards, Spock, based on The Big Bang Theory game for Hactoberfest",
        "url": "https://rock-paper-scissors-lizards-spock.com/",
        "github": "https://github.com/timscodebase/RPS",
        "tech": [
          "Svelte",
          "Playwright",
          "CSS",
          "HTML",
          "TypeScript"
        ]
      },
      {
        "name": "Memory Game",
        "image": "https://res.cloudinary.com/tihos/image/upload/f_auto,q_auto/v1663024599/Screenshot_2022-09-12_at_4.13.11_PM_tnhtxf.png",
        "description": "A fun memory game built with React",
        "url": "https://cute-haupia-c97ca6.netlify.app/",
        "github": "https://github.com/timscodebase/memory-game",
        "tech": [
          "Svelte",
          "CSS",
          "HTML",
          "TypeScript"
        ]
      },
      {
        "name": "Let's Get Quizy",
        "image": "https://res.cloudinary.com/tihos/image/upload/c_scale,f_auto,q_auto:best,w_488/v1663094189/quizy_keqlje.png",
        "description": "A simple quiz game for Hactoberfest",
        "url": "https://quizy-2.pages.dev/",
        "github": "https://github.com/timscodebase/Quizy-2",
        "tech": [
          "Svelte",
          "Playwright",
          "CSS",
          "HTML",
          "TypeScript"
        ]
      },
      {
        "name": "United States COVID-19 projects",
        "image": "https://res.cloudinary.com/tihos/image/upload/c_scale,f_auto,q_auto,w_488/v1663094189/rpsls_ouki6m.png",
        "description": "I wrote this in the height of Covid-19 to help people visualize the data",
        "url": "https://us-covid-19-data.netlify.app/",
        "github": "https://github.com/timscodebase/covid",
        "tech": [
          "React",
          "Styled-Components",
          "Jest",
          "CSS",
          "HTML"
        ]
      }
    ]
  };

  return new Response(JSON.stringify(projects, null, 2), options);
};
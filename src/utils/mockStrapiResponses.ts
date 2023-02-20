import portrait from '../assets/1657481587710.jpg'

export const header = {
  "data": {
    "id": 1,
    "attributes": {
      "title": "Logan Roth",
      "createdAt": "2022-12-29T18:43:58.158Z",
      "updatedAt": "2022-12-29T18:51:36.035Z",
      "publishedAt": "2022-12-29T18:51:36.032Z"
    }
  },
  "meta": {}
}

export const footer = {
  "data": {
    "id": 1,
    "attributes": {
      "linkedinURL": "https://www.linkedin.com/in/lo-gr/",
      "email": "logan.roth.g@gmail.com",
      "githubURL": "https://github.com/Lo-GR",
      "createdAt": "2022-12-29T20:10:07.069Z",
      "updatedAt": "2022-12-29T20:10:09.475Z",
      "publishedAt": "2022-12-29T20:10:09.471Z"
    }
  },
  "meta": {}
}

export const home = {
  "data": {
    "id": 1,
    "attributes": {
      "createdAt": "2022-12-29T18:50:40.455Z",
      "updatedAt": "2022-12-29T18:50:48.909Z",
      "publishedAt": "2022-12-29T18:50:48.905Z",
      "widget1": {
        "id": 1,
        "hello":
          "Hello! I'm",
        "name": "Logan",
        "subtext": "What I love about tech is there is a never-ending ceiling of potential and opportunities to learn"
      },
      "widget2": {
        "id": 1,
        "title": "Front-end",
        "subtitle": ["Developer", "Engineer", "Enjoyer"]
      }
      ,
      "widget3": {
        "id": 1,
        "linkedinText": "Connect with me!",
        "linkedinURL": "https://www.linkedin.com/in/lo-gr/"
      },
      "widget4": {
        "id": 1,
        "topText": "Skills at a glance",
        "skills": ["React and Vue Frontend,", "AWS CloudOps,", "Server Side and Client Side Rendering,", "Full-Stack Experience"]
      }
    }
  },
  "meta": {}
}

export const projectPage = {
  "data": {
    "id": 1,
    "attributes": {
      "createdAt": "2022-12-29T20:20:52.300Z",
      "updatedAt": "2022-12-29T20:20:53.362Z",
      "publishedAt": "2022-12-29T20:20:53.358Z",
      "project1": {
        "id": 1,
        "image": "Insert Image Link Here",
        "title": "Project Title 1",
        "description": "Project Description 1",
        "tech": "Unity, lol"
      },
      "project2": {
        "id": 2,
        "image": "Insert Image Link Here",
        "title": "Project Title 2",
        "description": "Project Description 2",
        "tech": "Unity, lol"
      },
      "project3": {
        "id": 3,
        "image": "Insert Image Link Here",
        "title": "Project Title 3",
        "description": "Project Description 3",
        "tech": "Unity, lol"
      }
    }
  },
  "meta": {}
}

export const background = {
  "data": {
    "id": 1,
    "attributes": {
      "image": portrait, //This would be a hosted image in strapi if I were hosting a db
      "skills": {
        "frontend": ["JavaScript", "TypeScript", "HTML5", "CSS3", "SASS", "Tailwind", "Amplify", "Storybook", "React", "React Native", "Vue", "Nuxt", "Redux", "Jest", "HLS", "Three.js"],
        "backend": ["C#", "ASP.NET 5", "Strapi", "Keycloak", "NPM", "Express", "CDK"],
        "cloudOps": ["Git", "GitHub", "Gitlab", "AWS - S3", "AWS - CloudFront", "AWS - Cognito", "AWS - CloudFormation", "AWS - Lambda", "AWS - EventBridge", "AWS - VPC", "AWS - API Gateway",]
      },
      "experience": "Hello there! I'm **LOGAN**. I'm a Frontend focused full-stack developer from Washington State. I have been programming for almost 3 years now. I swapped careers from small business leadership to pursue a life long passion in tech. Currently, I am working as a Frontend Cloud Engineer at ***[TREK10](https://www.trek10.com/)*** working on contracts for the DoD. I enjoy rock climbing, playing games, reading and I like to hobby program games. I hope to be challenged beyond my comfort zone and working with a small team of diverse team members, all striving for a common goal. I feel most at home where I get an opportunity to learn something new everyday I wake up. “I like to wake up each morning and not know what I think, that I may reinvent myself in some way.” - Stephen Fry",
      "createdAt": "2022-12-29T20:31:06.055Z",
      "updatedAt": "2022-12-29T20:31:07.428Z",
      "publishedAt": "2022-12-29T20:31:07.424Z"
    }
  },
  "meta": {}
}

export const about = {
  "data": {
    "id": 1,
    "attributes": {
      "design": "This app was designed in Figma and takes heavy inspiration from web designer [Brandon Lemus](https://brandonux.design/). From a design perspective, this site is meant to be a straight forward and clean presentation that utilizes soft colors and sparse highlighting to emphasis the important eye catching parts of the site.",
      "tech": "This app was built in React utilizing Tailwind as it's main styling framework. Most of the content built in the site was built using storybook, which can be seen in its **[repo](https://github.com/Lo-GR/portfolio2.0)**. The transitions were built using **[framer](https://www.npmjs.com/package/framer-motion)**. **[React-Markdown](https://www.npmjs.com/package/react-markdown)** was used to to implement long form text with minor formatting. In order to develop this site to be CMS ready, a docker Strapi image was used to mock a Strapi response with all the sites content stored in it. This site isn't connected currently to a hosted Strapi database, mainly because it's expensive, but you can view the mock data pulled directly from a locally hosted Strapi instance in the repo.",
      "goals": "The goal when taking on this project was to build a better portfolio site for myself and my co-developer that shows off the skills and experiences we developed in the years of frontend utilizing our understanding of the modern web development landscape. Full-stack knowledge was utilized to make this app *CMS Ready*. Modern frontend techniques were utilized such as developing with mobile in mind, developing the content to be responsive in nature and breaking components into presentational and smart components. *Less flash and more substance* was the general rule of thumb. This is why we strongly encourage you visit the ***[repo](https://github.com/Lo-GR/portfolio2.0)*** to dig deeper into the code and infrastructure this app was built to showcase. This website is also a showcase of our cloud knowledge by being hosted through AWS on a S3 bucket with cloudfront delivering the content world-wide.",
      "createdAt": "2022-12-29T20:34:17.999Z",
      "updatedAt": "2022-12-29T20:34:19.568Z",
      "publishedAt": "2022-12-29T20:34:19.564Z"
    }
  },
  "meta": {}
}
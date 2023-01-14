import LinkedIn from "./LinkedIn";

export default {
  title: 'Home/LinkedIn',
  component: LinkedIn,
}

const example = { 
  "linkedinText":"Connect with me!",
  "linkedinProfilePic":"https://media.licdn.com/dms/image/C5603AQFjuT11IbEQbA/profile-displayphoto-shrink_800_800/0/1657481587710?e=1678924800&v=beta&t=SZaFPYfOLCKSZ9DDmfwEbomI4sw7U-OVPH3qxpr3E2Y",
  "linkedinURL":"https://www.linkedin.com/in/lo-gr/"
}

export const LinkedInComponent = () => (
  <LinkedIn linkedinText={example.linkedinText} linkedinProfilePic={example.linkedinProfilePic} linkedinURL={example.linkedinURL}/>
)
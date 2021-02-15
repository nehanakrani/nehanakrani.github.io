
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  username: "NehaNakrani",
  title: "Hey, I'm Neha",
  subTitle: emoji("A software Developer 👩‍💻 and Guitarist with featuring expertise in Ruby on Rails, web frameworks with passion for new technologies mashups and pursuing the knack of open-source contribution."),
  resumeLink: "https://drive.google.com/file/d/10JpyVY4Jp_9IG98BtBGD30vfGU8Ntvuv/view?usp=sharing"
};

const socialMediaLinks = {

  github: "https://github.com/nehanakrani",
  linkedin: "https://www.linkedin.com/in/neha-nakrani-522793145/",
  gmail: "nehanakrani04@gmail.com",
  medium: "https://medium.com/@nehanakrani004",
  stackoverflow: "https://stackoverflow.com/users/8739984/neha-nakrani",
  twitter: "https://twitter.com/neha_nakrani912",
  instagram: "https://www.instagram.com/neha__nakrani/"
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications and Used test-driven development while designing rest API."),
    emoji("⚡ Integration of third party services such as Firebase, AWS end others."),
    emoji("⚡ Managed projects with Agile development methodology, Extreme Programming, and SCRUM via user stories and customer issues.")
  ],


  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Ruby on rails",
      fontAwesomeClassname: "fa fa-train"
    },
    {
      skillName: "ruby",
      fontAwesomeClassname: "fas fa-gem"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Elasticsearch/Elasticstack",
      fontAwesomeClassname: "fa fa-search-plus"
    },
    {
      skillName: "redis",
      fontAwesomeClassname: "fa fa-server"
    },
    {
      skillName: "cloud computing",
      fontAwesomeClassname: "fa fa-cloud"
    }
  ]
};


const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Backend Stack",
      StackDes: "Ruby, Ruby on Rails, Rspec, MiniTest, TDD, Micro services, REST API Design, OOP Design Patterns, Algolia Search, AWS, Payment-Gateway Integrations, Python, C, C++, Arduino-C, Arduino UNO, GraphQL, java, Elastic Search, Cloud MQTT, Docker, Heroku, AWS, Capistrano, CI/CD, Delayed job, Sidekiq, Memcache, Firebase, PostgreSQL, MySQL, NoSQL, Redis, Amazon RDS",
      progressPercentage: "95%"
    },
    {
      Stack: "Frontend/Design",
      StackDes: "HTML5/CSS3, Bootstrap, JavaScript, SASS, AJAX and JQuery, Plug-ins Of Angularjs, svelte js",
      progressPercentage: "80%"
    }
  ]
};

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Solutelabs, Ahmedabad, India.",
      companylogo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNS43MjgiIGhlaWdodD0iMzUuODQyIiB2aWV3Qm94PSIwIDAgMzUuNzI4IDM1Ljg0MiI+CiAgICA8ZGVmcz4KICAgICAgICA8c3R5bGU+CiAgICAgICAgICAgIC5jbHMtMXtmaWxsOiMxNjQxZmZ9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxwYXRoIGlkPSJTaGFwZV85IiBkPSJNODQuMTc5IDc1LjY3OWMtMy42ODItMi41NzgtOS42ODgtNC4yLTE2LjgtNi4zMzYtMy44MTctMS4xNDctNi4zLTQuOTYtMy41MzctNy45MTlhNy4wMTEgNy4wMTEgMCAwIDEgNS4zMzktMi4wMzljNC45MjYgMCAxMC45IDMuMjE0IDEzLjQxMiA1LjM5bDQuMjczLTYuNTU3aDguOTE0Vjg2LjczYzAgNi42NjgtNyA3LjMzLTcgNy4zMyAyLjUyLTguMzEgMS4xNDUtMTQuMzY1LTQuNjAxLTE4LjM4MXptLTIzLjc5MiAzLjIzYTI5LjUzMiAyOS41MzIgMCAwIDAgNi41ODQgMi40NTJjMi40MzkuNzEyIDguNDMxIDIgMTAuNzc2IDQuMjE4IDIuMDUyIDEuOTM5IDIuNTM2IDcuOTQzLTUuOSA4LjE1My0uMTc5IDAtLjM1NC4wMDctLjUyOC4wMDctMTQuMjQtLjAwMi0xMC45MzItMTQuODMtMTAuOTMyLTE0LjgzeiIgY2xhc3M9ImNscy0xIiBkYXRhLW5hbWU9IlNoYXBlIDkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MC4wNTQgLTU4LjIxOSkiLz4KPC9zdmc+Cg==",
      date: "Jan/2018 - Aug/2018",
      descBullets: [
        "Learned popular Ruby libraries/tools and Re-write web pages in Ruby using the Rails framework to develop code in MVC architecture with developing REST APIs.",
        "Used RSpec to create test-driven development. Experience with all of the GEMS and libraries for this version of the ruby and rails.",
        "Managed projects with Agile development methodology, Extreme Programming, and SCRUM via user stories and customer issues"
      ]
    },
    {
      role: "Ruby on Rails Developer",
      company: "Techcompose Solution Pvt Ltd, Ahmedabad, India.",
      companylogo: require("./assets/images/techlogo.png"),
      date: "Aug/2018 -  May/2019",
      descBullets: [
        "Utilized the Ruby on Rails ecosystem with a variety of gems, testing in Minitest or using git workflow similar Front-end technologies.",
        "Used Rspec to Test Driven Development with wort unit test, functional, and integration tests with Supported product migration and platform upgrades.",
        "Managed the entire life cycle of the project from the requirement, planning to deployment on Capistrano and Heroku for web applications.",
        "Analyzed and organized large sets of data with Optimized database query performance decreasing query time by 25% using SQL.",
        "Worked on overall architectural problems, particularly as they relate to data transferred, scalability, and performance."
      ]
    },
    {
      role: "Software Engineer",
      company: "Simform Solutions Pvt Ltd, Ahmedabad, India",
      companylogo: require("./assets/images/simformlogo.png"),
      date: " May/2019 - Present",
      descBullets: [
        "Architected overall web application using distinct versions of ruby on rails in different projects and communicating directly with clients to help define features/user stories, improvements to an existing application.",
        "Experience designing API services for mobile, microservices, and using different search engines.",
        "Designed the server database and wrote stored procedures and triggers for effective data processing and performance.",
        "Exposure to AWS, docker with DevOps problems at scale, and implemented CI/CD pipeline.",
        "Mentoring junior developers && perform code reviews of peers."
      ]
    },
  ]
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "nehanakrani",
  showGithubProfile :"true"
};


const bigProjects = {
  title: "",
  subtitle: "",
  projects: [
  ]
};


const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Aws Certified Cloud Practitioner",
      subtitle: "Udemy Aws Certified Solutions Architect.",
      image: require("./assets/images/awsLogo.png"),
      footerLink: [{ name: "View Certifications", url: "https://www.udemy.com/certificate/UC-0d64c301-a778-45d4-b617-db8c74f4d2a7/" }]
    },
    {
      title: "Elasticsearch 7 and the Elastic Stack - In Depth & Hands On!",
      subtitle: "Udemy Sundog Education By Coralogix Ltd.",
      image: require("./assets/images/eslogo.png"),
      footerLink: [{ name: "View Certifications", url: "http://ude.my/UC-eee73b6a-39aa-4826-bf35-02055c182957" }]
    },
    {
      title: "Docker Essential Training",
      subtitle: "Linkedin Learning Course Certificate",
      image: require("./assets/images/docker.png"),
      footerLink: [{ name: "View Certifications", url: "https://drive.google.com/file/d/1SpZISCKE_7LAzBoMTe8LNVCcbDiOi82P/view?usp=sharing" }]
    },
    {
      title: "Docker For Developers",
      subtitle: "Linkedin Learning Course Certificate",
      image: require("./assets/images/docker.png"),
      footerLink: [{ name: "View Certifications", url: "https://drive.google.com/file/d/1C295DkEChae2-MaYkVkutcHhRj9gXP7H/view?usp=sharing" }]
    },
    {
      title: "Learning Amazon Web Services",
      subtitle: "Linkedin Learning Course Certificate",
      image: require("./assets/images/awsweblogo.jpg"),
      footerLink: [{ name: "View Certifications", url: "https://drive.google.com/file/d/1xPYhbP22wTxTzJVhCAvXcPyjCgyaZih1/view?usp=sharing" }]
    },
    {
      title: "Learning Cloud Computing: Application Migration",
      subtitle: "Linkedin Learning Course Certificate",
      image: require("./assets/images/cloudlogo.png"),
      footerLink: [{ name: "View Certifications", url: "https://drive.google.com/file/d/16QZhjZpZv3t_Fin-y6aXbS_p_wRfVu-U/view?usp=sharing" }]
    },
    {
      title: "Shri Dewang Mehta IT Awards",
      subtitle: "Nasscom Along Gtu And Dewang Mehta Foundation. It's memory of Late Mr. Dewang Mehta, The Dewang Mehta Foundation has taken various initiatives to acknowledge the students in the IT sector. The Dewang Mehta Excellence Award is one such initiative where students with excellent academic performance are recognized.",
      image: require("./assets/images/dglogo.jpeg"),
      footerLink: [{ name: "View Certifications", url: "https://drive.google.com/file/d/1qnO3uwT26CfxcFZ-WpD0L6ZI1tePMRhj/view?usp=sharing" }]
    },
    {
      title: "Python Certification Course",
      subtitle: "Skytech Informatics Certificate.",
      image: require("./assets/images/pylogo.png"),
      footerLink: [{ name: "View Certifications", url: "https://drive.google.com/file/d/1YXtHIYQRGbpeRVTYndoxz24QvTEsaiUX/view?usp=sharing" }]
    },
    {
      title: "Machine Learning, Data Science and Deep Learning with Python",
      subtitle: "Udemy - Sundog Education by Frank Kane, Frank Kane on",
      image: require("./assets/images/machine-banner.png"),
      footerLink: [{ name: "View Certifications", url: "https://www.udemy.com/certificate/UC-da7f9dd3-46eb-48e6-9c00-4294135f3a8d" }]
    },
    {
      title: "Python Certification Course",
      subtitle: "Skytech Informatics Certificate.",
      image: require("./assets/images/pylogo.png"),
      footerLink: [{ name: "View Certifications", url: "https://drive.google.com/file/d/1YXtHIYQRGbpeRVTYndoxz24QvTEsaiUX/view?usp=sharing" }]
    }

  ]
};


const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@nehanakrani004/fcm-push-notification-with-ruby-on-rails-64097685ce66",
      title: "FCM push notification with Ruby on Rails",
      description: "FCM is one of the best-known ways to notify the client iOS, Android, or web/JavaScript via push notification as it is free and backed by Google. Push notification is a very popular communication channel to notify users about important events in the application"
    },
    {
      url: "https://medium.com/@nehanakrani004/setting-up-mqtt-with-ruby-on-rails-ea52bc63cab4",
      title: "Setting up MQTT with Ruby on Rails!",
      description: "MQTT is a Client-Server publish, subscribe messaging transport protocol. It is lightweight, open, simple, and designed to be easy to implement. These qualities make it ideal for use in many spots, including constrained environments such as for communication in Machine to Machine (M2M) and Internet of Things (IoT) world of connected devices, and for mobile applications where bandwidth and battery power are at a premium."
    },
    {
      url: "https://medium.com/@nehanakrani004/things-are-similar-in-programmers-and-guitarist-ab9164fa61f",
      title: "Things are similar in Programmers and Guitarist",
      description: "Shared my experience with so many common things that I do wonder if there’s some kind of relationship between being a guitarist and being a programmer. For informed opinions, let’s turn to programmers who are actually guitarists."
    },
    {
      url: "https://medium.com/@nehanakrani004/easy-way-to-setting-ruby-version-manager-rvm-on-projects-e287088e4606",
      title: "Easy way to setting Ruby Version Manager (RVM) on projects",
      description: "RVM is Ruby Version Manager. It’s a command-line tool that allows you to easily install, manage, and work with different Ruby environments. With RVM, you can easily install different versions of Ruby and easily switch between them."
    }
  ]
};


const talkSection = {
  title: "",
  subtitle: "",
  talks: []
};


const podcastSection = {
  title: "",
  subtitle: "",
  podcast: []
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "nehanakrani04@gmail.com",
};


const twitterDetails = {
  userName : "neha_nakrani912"
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};

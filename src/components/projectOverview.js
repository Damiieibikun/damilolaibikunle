import todo from '../assets/images/todo.png';
import poketo from '../assets/images/pk-logotype-dark.png';
import onlinequiz from '../assets/images/quizcompetition.png';
import babysiting from '../assets/images/babysit.jpg';
import dropout from '../assets/images/dropout.png';
import ibm from '../assets/images/ibm2.png';
import hive from '../assets/images/hive-blockchain-svgrepo-com.svg';
import amazon from '../assets/images/amazon-color-svgrepo-com.svg';


  const projects = [
    {
      category: 'frontend',
      name: 'React JS',
      technologies: ['react', 'tailwind', 'axios', 'localstorage'],
      applications: [
        {
          title: 'Amazon Clone',
          coverimg: amazon,
          sitelink: '#',
          descp: 'A simple E-commerce website. Design was based original website Amazon',
          linktitle: 'View App',
          originalsite: "https://www.amazon.com/",
          originallinktitle: 'Visit Site'
        },
      ]

    },
    {
      category: 'frontend',
      name: 'Jquery',
      technologies: ['Jquery', 'AJAX', 'CSS', 'Vanilla JS', 'localstorage'],
      applications: [
        {
        title: 'Poketo Clone',
        coverimg: poketo,
        sitelink: 'https://damiieibikun.github.io/Poketo-Ecommerce-Clone/',
        descp: 'A simple E-commerce website. Design was based original website Poketo',
        linktitle: 'View App',
        originalsite: "https://www.poketo.com/",
        originallinktitle: 'Visit Site'
      },
        {
        title: 'TODO Application',
        coverimg: todo,
        sitelink: 'https://damiieibikun.github.io/Todo-Application-Local-Storage./',
        descp: 'A simple and intuitive ToDo application using local storage for managing tasks and categories.',
        linktitle: 'View App'        
      },     

      ]

    },
    {
      category: 'frontend',
      name: 'Javascript & Tailwind',
      technologies: ['vanilla js', 'tailwind', 'localstorage'],
      applications: [
        {
          title:'Online Quiz Competition App',
          coverimg: onlinequiz,
          sitelink: 'https://damiieibikun.github.io/Lumen-Et-Veritas-QuizCompetition/',
          descp: 'A quiz application designed for universities to register their institution \
          and add candidates who are eligible to take the quiz.',
          linktitle: 'View App'
        }
      ]
    },
    {
      category: 'frontend',
      name: 'Vanilla JS & CSS',
      technologies: ['vanilla js', 'css', 'localstorage'],
      applications: [
         {
          title: 'Baby sitting booking application',
          coverimg: babysiting,
          sitelink: 'https://damiieibikun.github.io/BabySitting-Appointment/',
          descp: 'This project implements a simple web-based booking application for a baby sitting service.',
          linktitle: 'View App'
         }
      ]

    },
    {
      category: 'fullstack',
      name: 'Next JS',
      technologies: ['next js', 'express', 'mongoose', 'mongodb atlas', 'axios', 'multer', 'bycrypt', 'cors', 'tailwind', 'localstorage'],
      applications: [
        {
          title: 'Hive Blog Clone',
          coverimg: hive,
          sitelink: 'https://hive-clone.onrender.com/',
          descp: 'A fullstack blog application inspired by Hive Blog.',
          linktitle: 'View App',
          originalsite: "https://hive.blog/",
          originallinktitle: 'Visit Site'
        },
      ]

    },
    {
      category: 'datascience',
      name: 'Student\'s Dropout Prediction',
      technologies: ['python', 'sklearn', 'jupytter', 'pandas', 'numpy', 'seaborn', 'plotly'],
      applications: [
        {
          title: 'Student\'s Dropout Prediction',
          coverimg: dropout,
          sitelink: "https://github.com/Damiieibikun/Student-s-Dropout-Prediction-using-Supervised-Machine-Learning-Classifiers/blob/main/Student's_dropout.ipynb",
          descp: 'A predictive model using machine learning classification algorithms to identify students who are likely to drop out.',
          linktitle: 'View On GitHub'
         }
      ]

    },
    {
      category: 'datascience',
      name: 'IBM Space X Falcon 9 landing prediction (capstone project)',
      technologies: ['python', 'sklearn', 'jupytter', 'pandas', 'numpy', 'seaborn', 'plotly'],
      applications: [
        {
          title: 'IBM Space X Falcon 9 landing prediction (capstone project)',
          coverimg: ibm,
          sitelink: "https://github.com/Damiieibikun/Data-Science-Capstone-Project-IBM---Space-X-Falcon-9-landing-predictions/blob/main/Applied%20Data%20Science%20capstone-IBM%20coursera.pdf",
          descp: 'In this capstone project, the objective is to make predictions on the successful landing of the Falcon 9 first stage.',
          linktitle: 'View On GitHub'
         }
      ]

    },
  ]


export default projects

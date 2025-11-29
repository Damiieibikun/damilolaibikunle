import todo1 from '../assets/images/todo1.png';
import todo2 from '../assets/images/todo2.png';
import todo3 from '../assets/images/todo3.png';
import poketo from '../assets/images/pk-logotype-dark.png';
import quiz1 from '../assets/images/quiz1.png';
import quiz2 from '../assets/images/quiz2.png';
import quiz3 from '../assets/images/quiz3.png';
import quiz4 from '../assets/images/quiz4.png';
import quiz5 from '../assets/images/quiz5.png';
import babysit1 from '../assets/images/babysit1.png';
import babysit2 from '../assets/images/babysit2.png';
import babysit3 from '../assets/images/babysit3.png';
import babysit4 from '../assets/images/babysit4.png';
import ibm1 from '../assets/images/ibm1.png';
import ibm2 from '../assets/images/ibm2.png';
import ibm3 from '../assets/images/ibm3.png';
import hive from '../assets/images/hive-blockchain-svgrepo-com.svg';
import amazon1 from '../assets/images/amazon1.png';
import amazon2 from '../assets/images/amazon2.png';
import amazon3 from '../assets/images/amazon3.png';
import amazon4 from '../assets/images/amazon4.png';
import amazon5 from '../assets/images/amazon5.png';
import dropout1 from '../assets/images/dropout1.png';
import dropout2 from '../assets/images/dropout2.png';
import dropout3 from '../assets/images/dropout3.png';
import dropout4 from '../assets/images/dropout4.png';
import dropout5 from '../assets/images/dropout5.png';

const todoImages = [todo1, todo2, todo3];
const quizImages = [quiz1, quiz2, quiz3, quiz4, quiz5];
const babysitImages = [babysit1, babysit2, babysit3, babysit4];
const amazonImages = [amazon1, amazon2, amazon3, amazon4, amazon5];
const ibmImages = [ibm1, ibm2, ibm3];
const dropoutImages = [dropout1, dropout2, dropout3, dropout4, dropout5];
const projects = [
  {
    category: 'frontend',
    name: 'React JS',
    technologies: ['react', 'tailwind', 'axios', 'localstorage'],
    applications: [
      {
        title: 'Amazon Clone',
        images: amazonImages,
        sitelink: 'https://amazon-e-commerce-clone.onrender.com/',
        descp: 'A simple E-commerce website. Design was based original website Amazon',
        linktitle: 'View Clone',
        originalsite: 'https://www.amazon.com/',
        originallinktitle: 'Visit Site',
      },
    ],
  },
  {
    category: 'frontend',
    name: 'Jquery',
    technologies: ['Jquery', 'AJAX', 'CSS', 'Vanilla JS', 'localstorage'],
    applications: [
      {
        title: 'Poketo Clone',
        images: [poketo],
        sitelink: 'https://damiieibikun.github.io/Poketo-Ecommerce-Clone/',
        descp: 'A simple E-commerce website. Design was based original website Poketo',
        linktitle: 'View Clone',
        originalsite: 'https://www.poketo.com/',
        originallinktitle: 'Visit Site',
      },
      {
        title: 'TODO Application',
        images: todoImages,
        sitelink: 'https://damiieibikun.github.io/Todo-Application-Local-Storage./',
        descp: 'A simple and intuitive ToDo application using local storage for managing tasks and categories.',
        linktitle: 'View App',
      },
    ],
  },
  {
    category: 'frontend',
    name: 'Javascript & Tailwind',
    technologies: ['vanilla js', 'tailwind', 'localstorage'],
    applications: [
      {
        title: 'Online Quiz Competition App',
        images: quizImages,
        sitelink: 'https://damiieibikun.github.io/Lumen-Et-Veritas-QuizCompetition/',
        descp: 'A quiz application designed for universities to register their institution and add candidates who are eligible to take the quiz.',
        linktitle: 'View App',
      },
    ],
  },
  {
    category: 'frontend',
    name: 'Vanilla JS & CSS',
    technologies: ['vanilla js', 'css', 'localstorage'],
    applications: [
      {
        title: 'Baby sitting booking application',
        images: babysitImages,
        sitelink: 'https://damiieibikun.github.io/BabySitting-Appointment/',
        descp: 'This project implements a simple web-based booking application for a baby sitting service.',
        linktitle: 'View App',
      },
    ],
  },
  {
    category: 'fullstack',
    name: 'Next JS',
    technologies: ['next js', 'express', 'mongoose', 'mongodb atlas', 'axios', 'multer', 'bycrypt', 'cors', 'tailwind', 'localstorage'],
    applications: [
      {
        title: 'Hive Blog Clone',
        images: [hive],
        sitelink: 'https://hive-clone.onrender.com/',
        descp: 'A fullstack blog application inspired by Hive Blog.',
        linktitle: 'View Clone',
        originalsite: 'https://hive.blog/',
        originallinktitle: 'Visit Site',
      },
    ],
  },
  {
    category: 'datascience',
    name: "Student's Dropout Prediction",
    technologies: ['python', 'sklearn', 'jupytter', 'pandas', 'numpy', 'seaborn', 'plotly'],
    applications: [
      {
        title: "Student's Dropout Prediction",
        images: dropoutImages,
        sitelink: "https://github.com/Damiieibikun/Student-s-Dropout-Prediction-using-Supervised-Machine-Learning-Classifiers/blob/main/Student's_dropout.ipynb",
        descp: 'A predictive model using machine learning classification algorithms to identify students who are likely to drop out.',
        linktitle: 'View On GitHub',
      },
    ],
  },
  {
    category: 'datascience',
    name: 'IBM Space X Falcon 9 landing prediction (capstone project)',
    technologies: ['python', 'sklearn', 'jupytter', 'pandas', 'numpy', 'seaborn', 'plotly'],
    applications: [
      {
        title: 'IBM Space X Falcon 9 landing prediction (capstone project)',
        images: ibmImages,
        sitelink: 'https://github.com/Damiieibikun/Data-Science-Capstone-Project-IBM---Space-X-Falcon-9-landing-predictions/blob/main/Applied%20Data%20Science%20capstone-IBM%20coursera.pdf',
        descp: 'In this capstone project, the objective is to make predictions on the successful landing of the Falcon 9 first stage.',
        linktitle: 'View On GitHub',
      },
    ],
  },
];

export default projects;

import ai from "../assets/images/ai.jpg";
import calculator from "../assets/images/calculator.jpg";
import JWT from "../assets/images/JWT.png";
import shopping from "../assets/images/shopping.jpg";
import managementTracker from "../assets/images/managementTracker.jpg";
import tableCrud from "../assets/images/tableCrud.png";

export const projects = {
  title: "Project",
  project: [
    {
      id: 1,
      projectTitle: "Management Tracker",
      category: "ReactJS Application",
      projectImage: managementTracker,
      projectDetails:
        "To create a productive project that would efficiently track and monitor the performance, status, and advancement of reports and projects inside an organisation",
    },
    {
      id: 2,
      projectTitle: "Shopping",
      category: "UI-UX",
      projectImage: shopping,
      projectDetails:
        "Design the UI and UX of a shopping app. Greeting clients with eye-catching imagery and developing a user-friendly online store ",
    },
    {
      id: 3,
      projectTitle: "AI Prompt UI",
      category: "UI-UX",
      projectImage: ai,
      projectDetails:
        "Combining intelligent systems and tasteful execution, we think we can make design more fun, inclusive, and creative.",
    },
    {
      id: 4,
      projectTitle: "JWT-Based Login Authentication",
      category: "Web Application",
      projectImage: JWT,
      projectDetails:
        "The smooth connection of react-router and React using JWT authentication. Additionally, manage public routes, safeguard authenticated routes, and use the authentication token to conduct API queries using the axios library.",
    },
    {
      id: 5,
      projectTitle: "CRUD-Based Table App",
      category: "ReactJS Application",
      projectImage: tableCrud,
      projectDetails:
        "CRUD, which encompasses Create, Read, Update, and Delete functionalities, is pivotal for efficient data management within web applications.",
    },
    {
      id: 6,
      projectTitle: "Calculator App ",
      category: "ReactJS Application",
      projectImage: calculator,
      projectDetails:
        "Simple calculator application that performs basic operations like addition, subtraction, multiplication, and division.",
    },
  ],
};

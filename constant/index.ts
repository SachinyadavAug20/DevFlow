import ROUTES from "./routes"

const sidebarLinks=[
  {
    imgURL: "/icons/home.svg",
    route: ROUTES.HOME,
    label: "Home",
  },
  {
    imgURL: "/icons/users.svg",
    route: ROUTES.COMMUNITY,
    label: "Community",
  },
  {
    imgURL: "/icons/star.svg",
    route: ROUTES.COLLECTION,
    label: "Collections",
  },
  {
    imgURL: "/icons/suitcase.svg",
    route: ROUTES.JOBS,
    label: "Find Jobs",
  },
  {
    imgURL: "/icons/tag.svg",
    route: ROUTES.TAGS,
    label: "Tags",
  },
  {
    imgURL: "/icons/user.svg",
    route:ROUTES.PROFILE,
    label: "Profile",
  },
  {
    imgURL: "/icons/question.svg",
    route: ROUTES.ASKQUESTION,
    label: "Ask a question",
  },
];

export default sidebarLinks

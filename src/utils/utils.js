export const isWeekend = (date) => {
  const newDate = new Date(date);
  return newDate.getDay() % 6 === 0;
};

export const getNextDay = (date) => {
  let nextDay = new Date(date);

  // console.log("get next day ", nextDay)
  nextDay.setDate(nextDay.getDate() + 1);
  while (isWeekend(nextDay)) {
    nextDay.setDate(nextDay.getDate() + 1); // Skip weekends
  }
  
  // Adjust time zone offset
  const timeZoneOffset = nextDay.getTimezoneOffset() / 60;
  nextDay.setHours(nextDay.getHours() + timeZoneOffset);

  // console.log("get next day ", nextDay)

  return nextDay.toISOString().slice(0, 19) + 'Z';
};

export const setCalendar =  (hrs, date) => {
  const hourInDay = Number(hrs);
  let totalMinutes = hourInDay * 60;
  let newDate = new Date(date);
  // console.log('New Date:', newDate);
  newDate = newDate.toISOString().slice(0, 19) + 'Z';

  let calendarData = [...course];

  let totalDuration=0;

  for (let i = 0; i < calendarData.length; i++) {
    if (isWeekend(newDate)) {
      newDate = getNextDay(newDate); // Skip weekends
    }
    // const currentDate = new Date(newDate); // Create a new Date object

    // console.log("NEW DATE", newDate)
    // console.log("CURRENT DATE", currentDateISO)

    totalDuration+=calendarData[i].duration;

    if(totalDuration<totalMinutes){
      calendarData[i].StartTime = newDate;
    calendarData[i].EndTime = newDate;
    calendarData[i].IsAllDay = true;

    }else if(totalDuration>=totalMinutes){
      newDate = getNextDay(newDate);
      if (isWeekend(newDate)) {
        newDate = getNextDay(newDate); // Skip weekends
      }
      totalDuration=0;

    }
  }

  return calendarData;
}





export let course = [
    {
      id: 1,
      title: "React Query",
      description: "Learn how to use React Query",
      type: "video",
      duration: 10
    },
    {
      id: 2,
      title: "MCQ Challenge for React Query",
      description: "See if you understood the concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 3,
      title: "Coding Challenge with React Query",
      description: "Apply the React Query Concept here",
      type: "codingchallenge",
      duration: 20
    },
    {
      id: 4,
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript programming language",
      type: "video",
      duration: 12
    },
    {
      id: 5,
      title: "JavaScript Quiz",
      description: "Test your knowledge of JavaScript with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 6,
      title: "Creating APIs with Node.js",
      description: "Learn how to create APIs with Node.js and Express",
      type: "video",
      duration: 15
    },
    {
      id: 7,
      title: "Node.js Quiz",
      description: "Test your knowledge of Node.js with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 8,
      title: "Building Web Applications with React",
      description: "Learn how to build web applications with React.js",
      type: "video",
      duration: 18
    },
    {
      id: 9,
      title: "React Quiz",
      description: "Test your knowledge of React with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 10,
      title: "React Native Basics",
      description:
        "Learn the basics of React Native framework for mobile app development",
      type: "video",
      duration: 16
    },
    {
      id: 11,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 12,
      title: "Building RESTful APIs with Django",
      description: "Learn how to build RESTful APIs with Django framework",
      type: "video",
      duration: 14
    },
    {
      id: 13,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 14,
      title: "Python Basics",
      description: "Learn the basics of Python programming language",
      type: "video",
      duration: 12
    },
    {
      id: 15,
      title: "Python Quiz",
      description: "Test your knowledge of Python with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 16,
      title: "Introduction to Machine Learning",
      description: "Learn the basics of Machine Learning",
      type: "video",
      duration: 20
    },
    {
      id: 18,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 16
    },
    {
      id: 19,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 20,
      title: "Introduction to Data Structures and Algorithms",
      description: "Learn the basics of Data Structures and Algorithms",
      type: "video",
      duration: 22
    },
    {
      id: 21,
      title: "Data Structures and Algorithms Quiz",
      description:
        "Test your knowledge of Data Structures and Algorithms with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 22,
      title: "Building Mobile Apps with Ionic Framework",
      description: "Learn how to build mobile apps with Ionic Framework",
      type: "video",
      duration: 14
    },
    {
      id: 23,
      title: "Ionic Framework Quiz",
      description: "Test your knowledge of Ionic Framework with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 24,
      title: "Introduction to HTML and CSS",
      description: "Learn the basics of HTML and CSS",
      type: "video",
      duration: 12
    },
    {
      id: 25,
      title: "HTML and CSS Quiz",
      description: "Test your knowledge of HTML and CSS with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 26,
      title: "Introduction to MongoDB",
      description: "Learn the basics of MongoDB database",
      type: "video",
      duration: 10
    },
    {
      id: 27,
      title: "MongoDB Quiz",
      description: "Test your knowledge of MongoDB with this quiz",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 28,
      title: "Introduction to Firebase",
      description: "Learn the basics of Firebase",
      type: "video",
      duration: 12
    },
    {
      id: 29,
      title: "Firebase Quiz",
      description: "Test your knowledge of Firebase with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 30,
      title: "Introduction to Redux",
      description: "Learn the basics of Redux for state management",
      type: "video",
      duration: 14
    },
    {
      id: 31,
      title: "Redux Quiz",
      description: "Test your knowledge of Redux with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 32,
      title: "Introduction to AWS",
      description: "Learn the basics of AWS cloud services",
      type: "video",
      duration: 18
    },
    {
      id: 33,
      title: "AWS Quiz",
      description: "Test your knowledge of AWS with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 34,
      title: "Introduction to Docker",
      description: "Learn the basics of Docker containerization",
      type: "video",
      duration: 10
    },
    {
      id: 35,
      title: "Docker Quiz",
      description: "Test your knowledge of Docker with this quiz",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 36,
      title: "Building APIs with Node.js",
      description: "Learn how to build APIs with Node.js",
      type: "video",
      duration: 20
    },
    {
      id: 37,
      title: "Node.js Quiz",
      description: "Test your knowledge of Node.js with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 38,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 16
    },
    {
      id: 39,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 40,
      title: "Building Mobile Apps with React Native",
      description: "Learn how to build mobile apps with React Native framework",
      type: "video",
      duration: 14
    },
    {
      id: 41,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 42,
      title: "Introduction to Kotlin",
      description: "Learn the basics of Kotlin programming language",
      type: "video",
      duration: 12
    },
    {
      id: 43,
      title: "Kotlin Quiz",
      description: "Test your knowledge of Kotlin with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 44,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 18
    },
    {
      id: 45,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 46,
      title: "Introduction to Swift",
      description: "Learn the basics of Swift programming language",
      type: "video",
      duration: 14
    },
    {
      id: 47,
      title: "Swift Quiz",
      description: "Test your knowledge of Swift with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 48,
      title: "Building Web Applications with Flask",
      description: "Learn how to build web applications with Flask framework",
      type: "video",
      duration: 16
    },
    {
      id: 49,
      title: "Flask Quiz",
      description: "Test your knowledge of Flask with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 50,
      title: "Introduction to PostgreSQL",
      description: "Learn the basics of PostgreSQL database",
      type: "video",
      duration: 12
    },
    {
      id: 51,
      title: "PostgreSQL Quiz",
      description: "Test your knowledge of PostgreSQL with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 52,
      title: "Building Web Applications with ASP.NET Core",
      description:
        "Learn how to build web applications with ASP.NET Core framework",
      type: "video",
      duration: 18
    },
    {
      id: 53,
      title: "ASP.NET Core Quiz",
      description: "Test your knowledge of ASP.NET Core with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 54,
      title: "Introduction to Go",
      description: "Learn the basics of Go programming language",
      type: "video",
      duration: 12
    },
    {
      id: 55,
      title: "Go Quiz",
      description: "Test your knowledge of Go with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 56,
      title: "Building Web Applications with Express.js",
      description:
        "Learn how to build web applications with Express.js framework",
      type: "video",
      duration: 16
    },
    {
      id: 57,
      title: "Express.js Quiz",
      description: "Test your knowledge of Express.js with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 58,
      title: "Introduction to Rust",
      description: "Learn the basics of Rust programming language",
      type: "video",
      duration: 14
    },
    {
      id: 59,
      title: "Rust Quiz",
      description: "Test your knowledge of Rust with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 60,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 18
    },
    {
      id: 61,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 62,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 12
    },
    {
      id: 63,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 64,
      title: "Building Web Applications with Flask and SQLAlchemy",
      description:
        "Learn how to build web applications with Flask framework and SQLAlchemy ORM",
      type: "video",
      duration: 20
    },
    {
      id: 65,
      title: "Flask and SQLAlchemy Quiz",
      description: "Test your knowledge of Flask and SQLAlchemy with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 66,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL API technology",
      type: "video",
      duration: 14
    },
    {
      id: 67,
      title: "GraphQL Quiz",
      description: "Test your knowledge of GraphQL with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 68,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 22
    },
    {
      id: 69,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 70,
      title: "React Native Basics",
      description:
        "Learn the basics of React Native framework for mobile app development",
      type: "video",
      duration: 16
    },
    {
      id: 71,
      title: "React Native Coding Challenge",
      description: "Apply your React Native knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 72,
      title: "Introduction to Kotlin",
      description: "Learn the basics of Kotlin programming language",
      type: "video",
      duration: 14
    },
    {
      id: 73,
      title: "Kotlin Quiz",
      description: "Test your knowledge of Kotlin with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 74,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 20
    },
    {
      id: 75,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 76,
      title: "Introduction to Swift",
      description: "Learn the basics of Swift programming language",
      type: "video",
      duration: 12
    },
    {
      id: 77,
      title: "Swift Quiz",
      description: "Test your knowledge of Swift with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 78,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 22
    },
    {
      id: 79,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 80,
      title: "Introduction to C#",
      description: "Learn the basics of C# programming language",
      type: "video",
      duration: 14
    },
    {
      id: 81,
      title: "C# Quiz",
      description: "Test your knowledge of C# with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 82,
      title: "Building Web Applications with Laravel",
      description: "Learn how to build web applications with Laravel framework",
      type: "video",
      duration: 20
    },
    {
      id: 83,
      title: "Laravel Quiz",
      description: "Test your knowledge of Laravel with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 84,
      title: "React Redux Basics",
      description: "Learn the basics of React Redux library for state management",
      type: "video",
      duration: 16
    },
    {
      id: 85,
      title: "React Redux Coding Challenge",
      description: "Apply your React Redux knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 86,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 14
    },
    {
      id: 87,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 88,
      title: "Building Web Applications with Flask",
      description: "Learn how to build web applications with Flask framework",
      type: "video",
      duration: 20
    },
    {
      id: 89,
      title: "Flask Quiz",
      description: "Test your knowledge of Flask with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 90,
      title: "Introduction to Java",
      description: "Learn the basics of Java programming language",
      type: "video",
      duration: 14
    },
    {
      id: 91,
      title: "Java Quiz",
      description: "Test your knowledge of Java with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 92,
      title: "Building Web Applications with Express",
      description: "Learn how to build web applications with Express framework",
      type: "video",
      duration: 22
    },
    {
      id: 93,
      title: "Express Quiz",
      description: "Test your knowledge of Express with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 94,
      title: "Introduction to Python",
      description: "Learn the basics of Python programming language",
      type: "video",
      duration: 14
    },
    {
      id: 95,
      title: "Python Quiz",
      description: "Test your knowledge of Python with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 96,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 22
    },
    {
      id: 97,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 98,
      title: "Introduction to PHP",
      description: "Learn the basics of PHP programming language",
      type: "video",
      duration: 14
    },
    {
      id: 99,
      title: "PHP Quiz",
      description: "Test your knowledge of PHP with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 100,
      title: "Introduction to MongoDB",
      description: "Learn the basics of MongoDB database",
      type: "video",
      duration: 16
    },
    {
      id: 101,
      title: "MongoDB Coding Challenge",
      description: "Apply your MongoDB knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 102,
      title: "Introduction to Ruby",
      description: "Learn the basics of Ruby programming language",
      type: "video",
      duration: 14
    },
    {
      id: 103,
      title: "Ruby Quiz",
      description: "Test your knowledge of Ruby with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 104,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 20
    },
    {
      id: 105,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 106,
      title: "Introduction to AngularJS",
      description: "Learn the basics of AngularJS framework",
      type: "video",
      duration: 18
    },
    {
      id: 107,
      title: "AngularJS Quiz",
      description: "Test your knowledge of AngularJS with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 108,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 22
    },
    {
      id: 109,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 110,
      title: "Introduction to SQL",
      description: "Learn the basics of SQL database programming language",
      type: "video",
      duration: 14
    },
    {
      id: 111,
      title: "SQL Quiz",
      description: "Test your knowledge of SQL with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 112,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 20
    },
    {
      id: 113,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 114,
      title: "Introduction to Node.js",
      description: "Learn the basics of Node.js runtime environment",
      type: "video",
      duration: 16
    },
    {
      id: 115,
      title: "Building Web Applications with Express.js",
      description:
        "Learn how to build web applications with Express.js framework",
      type: "video",
      duration: 20
    },
    {
      id: 116,
      title: "Express.js Quiz",
      description: "Test your knowledge of Express.js with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 117,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 18
    },
    {
      id: 118,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 119,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 22
    },
    {
      id: 120,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 121,
      title: "Introduction to Firebase",
      description: "Learn the basics of Firebase platform",
      type: "video",
      duration: 16
    },
    {
      id: 122,
      title: "Firebase Quiz",
      description: "Test your knowledge of Firebase with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 123,
      title: "Building Web Applications with React Native",
      description:
        "Learn how to build mobile applications with React Native framework",
      type: "video",
      duration: 24
    },
    {
      id: 124,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 12
    },
    {
      id: 125,
      title: "Introduction to AWS Lambda",
      description: "Learn the basics of AWS Lambda compute service",
      type: "video",
      duration: 18
    },
    {
      id: 126,
      title: "AWS Lambda Quiz",
      description: "Test your knowledge of AWS Lambda with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 127,
      title: "Building Web Applications with AWS Amplify",
      description:
        "Learn how to build web applications with AWS Amplify framework",
      type: "video",
      duration: 22
    },
    {
      id: 128,
      title: "AWS Amplify Quiz",
      description: "Test your knowledge of AWS Amplify with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 129,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL query language",
      type: "video",
      duration: 16
    },
    {
      id: 130,
      title: "GraphQL Quiz",
      description: "Test your knowledge of GraphQL with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 130,
      title: "JavaScript Coding Challenge",
      description: "Solve this JavaScript coding challenge",
      type: "codingchallenge",
      duration: 30
    },
    {
      id: 131,
      title: "React Coding Challenge",
      description: "Solve this React coding challenge",
      type: "codingchallenge",
      duration: 45
    },
    {
      id: 132,
      title: "Vue.js Coding Challenge",
      description: "Solve this Vue.js coding challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 133,
      title: "Node.js Coding Challenge",
      description: "Solve this Node.js coding challenge",
      type: "codingchallenge",
      duration: 35
    },
    {
      id: 134,
      title: "AWS Lambda Coding Challenge",
      description: "Solve this AWS Lambda coding challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 135,
      title: "GraphQL Coding Challenge",
      description: "Solve this GraphQL coding challenge",
      type: "codingchallenge",
      duration: 40
    },
    {
      id: 136,
      title: "React Native Coding Challenge",
      description: "Solve this React Native coding challenge",
      type: "codingchallenge",
      duration: 60
    },
    {
      id: 137,
      title: "Express.js Coding Challenge",
      description: "Solve this Express.js coding challenge",
      type: "codingchallenge",
      duration: 45
    },
    {
      id: 138,
      title: "MongoDB Coding Challenge",
      description: "Solve this MongoDB coding challenge",
      type: "codingchallenge",
      duration: 55
    },
    {
      id: 139,
      title: "JavaScript Algorithm Challenge",
      description: "Solve this JavaScript algorithm challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 140,
      title: "Data Structures Challenge",
      description: "Solve this data structures challenge",
      type: "codingchallenge",
      duration: 60
    },
    {
      id: 141,
      title: "React Native App Challenge",
      description: "Build a React Native app with the given requirements",
      type: "codingchallenge",
      duration: 90
    },
    {
      id: 142,
      title: "Vue.js App Challenge",
      description: "Build a Vue.js app with the given requirements",
      type: "codingchallenge",
      duration: 80
    },
    {
      id: 143,
      title: "Node.js App Challenge",
      description: "Build a Node.js app with the given requirements",
      type: "codingchallenge",
      duration: 85
    },
    {
      id: 144,
      title: "React App Challenge",
      description: "Build a React app with the given requirements",
      type: "codingchallenge",
      duration: 75
    },
    {
      id: 145,
      title: "JavaScript Game Challenge",
      description: "Build a JavaScript game with the given requirements",
      type: "codingchallenge",
      duration: 90
    },
    {
      id: 146,
      title: "Introduction to Vue.js",
      description: "Get started with Vue.js and learn its basics.",
      type: "video",
      duration: 20
    },
    {
      id: 147,
      title: "Advanced Vue.js",
      description: "Learn advanced Vue.js concepts and best practices.",
      type: "video",
      duration: 30
    },
    {
      id: 148,
      title: "Building Real-time Applications with Socket.io",
      description: "Learn how to build real-time applications with Socket.io",
      type: "video",
      duration: 25
    },
    {
      id: 149,
      title: "Getting Started with Redux",
      description:
        "Learn the basics of Redux and how to integrate it with your React application.",
      type: "video",
      duration: 30
    },
    {
      id: 150,
      title: "React Native Navigation",
      description: "Learn how to implement navigation in React Native.",
      type: "video",
      duration: 20
    },
    {
      id: 151,
      title: "Introduction to React Native",
      description:
        "Learn the basics of React Native and how to get started with it.",
      type: "video",
      duration: 25
    },
    {
      id: 152,
      title: "Web Security Fundamentals",
      description:
        "Learn the basics of web security and how to secure your web applications.",
      type: "video",
      duration: 35
    },
    {
      id: 153,
      title: "Asynchronous JavaScript",
      description:
        "Learn how to write asynchronous code in JavaScript using callbacks, promises and async/await.",
      type: "video",
      duration: 30
    },
    {
      id: 154,
      title: "Introduction to Machine Learning",
      description: "Learn the basics of machine learning and how it works.",
      type: "video",
      duration: 40
    },
    {
      id: 155,
      title: "Deep Learning Fundamentals",
      description: "Learn the basics of deep learning and neural networks.",
      type: "video",
      duration: 45
    },
    {
      id: 156,
      title: "Introduction to Natural Language Processing",
      description:
        "Learn the basics of natural language processing and how it works.",
      type: "video",
      duration: 35
    },
    {
      id: 157,
      title: "React Context API",
      description:
        "Learn how to use the React Context API to manage state in your React application.",
      type: "video",
      duration: 20
    },
    {
      id: 158,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL and how it works.",
      type: "video",
      duration: 25
    },
    {
      id: 159,
      title: "Building RESTful APIs with Node.js",
      description: "Learn how to build RESTful APIs with Node.js.",
      type: "video",
      duration: 30
    },
    {
      id: 160,
      title: "Building Real-time Applications with Pusher",
      description: "Learn how to build real-time applications with Pusher.",
      type: "video",
      duration: 25
    },
    {
      id: 161,
      title: "React Hooks MCQ Challenge",
      description: "Test your understanding of React Hooks concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 162,
      title: "Node.js MCQ Challenge",
      description:
        "See if you have understood the Node.js concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 163,
      title: "Python Fundamentals MCQ Challenge",
      description: "Test your understanding of Python Fundamentals concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 164,
      title: "Data Structures and Algorithms MCQ Challenge",
      description:
        "Test your understanding of Data Structures and Algorithms concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 165,
      title: "React Native MCQ Challenge",
      description: "Test your understanding of React Native concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 166,
      title: "JavaScript Fundamentals MCQ Challenge",
      description: "Test your understanding of JavaScript Fundamentals concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 167,
      title: "MongoDB MCQ Challenge",
      description: "Test your understanding of MongoDB concepts.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 168,
      title: "Docker Fundamentals MCQ Challenge",
      description: "Test your understanding of Docker Fundamentals concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 169,
      title: "Python MCQ Challenge",
      description:
        "See if you have understood the Python concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 170,
      title: "React Query MCQ Challenge",
      description: "Test your understanding of React Query concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 171,
      title: "Vue.js MCQ Challenge",
      description: "Test your understanding of Vue.js concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 172,
      title: "Redux MCQ Challenge",
      description: "Test your understanding of Redux concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 173,
      title: "Web Security MCQ Challenge",
      description: "Test your understanding of web security concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 174,
      title: "Asynchronous JavaScript MCQ Challenge",
      description: "Test your understanding of asynchronous JavaScript concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 175,
      title: "Machine Learning MCQ Challenge",
      description: "Test your understanding of Machine Learning concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 176,
      title: "React Native Navigation",
      description: "Learn how to implement navigation in React Native",
      type: "video",
      duration: 12
    },
    {
      id: 177,
      title: "React Native Maps",
      description: "Learn how to use maps in React Native",
      type: "video",
      duration: 15
    },
    {
      id: 178,
      title: "React Native Camera",
      description: "Learn how to use the camera in React Native",
      type: "video",
      duration: 10
    },
    {
      id: 179,
      title: "React Native Animation",
      description: "Learn how to create animations in React Native",
      type: "video",
      duration: 18
    },
    {
      id: 180,
      title: "React Native Gesture Handler",
      description: "Learn how to use gesture handler in React Native",
      type: "video",
      duration: 8
    },
    {
      id: 181,
      title: "React Native Components",
      description: "Learn about React Native Components",
      type: "video",
      duration: 12
    },
    {
      id: 182,
      title: "React Native Redux",
      description: "Learn how to use Redux in React Native",
      type: "video",
      duration: 14
    },
    {
      id: 183,
      title: "React Native with Firebase",
      description: "Learn how to use Firebase with React Native",
      type: "video",
      duration: 13
    },
    {
      id: 184,
      title: "React Native with GraphQL",
      description: "Learn how to use GraphQL with React Native",
      type: "video",
      duration: 16
    },
    {
      id: 185,
      title: "React Native with AWS",
      description: "Learn how to use AWS with React Native",
      type: "video",
      duration: 17
    },
    {
      id: 186,
      title: "React Native with Azure",
      description: "Learn how to use Azure with React Native",
      type: "video",
      duration: 19
    },
    {
      id: 187,
      title: "React Native with Google Cloud",
      description: "Learn how to use Google Cloud with React Native",
      type: "video",
      duration: 20
    },
    {
      id: 188,
      title: "React Native with Microsoft Cognitive Services",
      description:
        "Learn how to use Microsoft Cognitive Services with React Native",
      type: "video",
      duration: 22
    },
    {
      id: 189,
      title: "React Native with IBM Watson",
      description: "Learn how to use IBM Watson with React Native",
      type: "video",
      duration: 23
    },
    {
      id: 190,
      title: "React Native with OpenAI GPT-3",
      description: "Learn how to use OpenAI GPT-3 with React Native",
      type: "video",
      duration: 25
    },
    {
      id: 191,
      title: "React Query",
      description: "Learn how to use React Query",
      type: "video",
      duration: 10
    },
    {
      id: 192,
      title: "MCQ Challenge for React Query",
      description: "See if you understood the concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 193,
      title: "Coding Challenge with React Query",
      description: "Apply the React Query Concept here",
      type: "codingchallenge",
      duration: 20
    },
    {
      id: 194,
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript programming language",
      type: "video",
      duration: 12
    },
    {
      id: 195,
      title: "JavaScript Quiz",
      description: "Test your knowledge of JavaScript with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 196,
      title: "Creating APIs with Node.js",
      description: "Learn how to create APIs with Node.js and Express",
      type: "video",
      duration: 15
    },
    {
      id: 197,
      title: "Node.js Quiz",
      description: "Test your knowledge of Node.js with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 198,
      title: "Building Web Applications with React",
      description: "Learn how to build web applications with React.js",
      type: "video",
      duration: 18
    },
    {
      id: 199,
      title: "React Quiz",
      description: "Test your knowledge of React with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 200,
      title: "React Native Basics",
      description:
        "Learn the basics of React Native framework for mobile app development",
      type: "video",
      duration: 16
    },
    {
      id: 201,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 202,
      title: "Building RESTful APIs with Django",
      description: "Learn how to build RESTful APIs with Django framework",
      type: "video",
      duration: 14
    },
    {
      id: 203,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 204,
      title: "Python Basics",
      description: "Learn the basics of Python programming language",
      type: "video",
      duration: 12
    },
    {
      id: 205,
      title: "Python Quiz",
      description: "Test your knowledge of Python with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 206,
      title: "Introduction to Machine Learning",
      description: "Learn the basics of Machine Learning",
      type: "video",
      duration: 20
    },
    {
      id: 207,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 16
    },
    {
      id: 208,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 209,
      title: "Introduction to Data Structures and Algorithms",
      description: "Learn the basics of Data Structures and Algorithms",
      type: "video",
      duration: 22
    },
    {
      id: 210,
      title: "Data Structures and Algorithms Quiz",
      description:
        "Test your knowledge of Data Structures and Algorithms with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 211,
      title: "Building Mobile Apps with Ionic Framework",
      description: "Learn how to build mobile apps with Ionic Framework",
      type: "video",
      duration: 14
    },
    {
      id: 212,
      title: "Ionic Framework Quiz",
      description: "Test your knowledge of Ionic Framework with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 213,
      title: "Introduction to HTML and CSS",
      description: "Learn the basics of HTML and CSS",
      type: "video",
      duration: 12
    },
    {
      id: 214,
      title: "HTML and CSS Quiz",
      description: "Test your knowledge of HTML and CSS with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 215,
      title: "Introduction to MongoDB",
      description: "Learn the basics of MongoDB database",
      type: "video",
      duration: 10
    },
    {
      id: 216,
      title: "MongoDB Quiz",
      description: "Test your knowledge of MongoDB with this quiz",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 217,
      title: "Introduction to Firebase",
      description: "Learn the basics of Firebase",
      type: "video",
      duration: 12
    },
    {
      id: 218,
      title: "Firebase Quiz",
      description: "Test your knowledge of Firebase with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 219,
      title: "Introduction to Redux",
      description: "Learn the basics of Redux for state management",
      type: "video",
      duration: 14
    },
    {
      id: 220,
      title: "Redux Quiz",
      description: "Test your knowledge of Redux with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 221,
      title: "Introduction to AWS",
      description: "Learn the basics of AWS cloud services",
      type: "video",
      duration: 18
    },
    {
      id: 222,
      title: "AWS Quiz",
      description: "Test your knowledge of AWS with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 223,
      title: "Introduction to Docker",
      description: "Learn the basics of Docker containerization",
      type: "video",
      duration: 10
    },
    {
      id: 224,
      title: "Docker Quiz",
      description: "Test your knowledge of Docker with this quiz",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 225,
      title: "Building APIs with Node.js",
      description: "Learn how to build APIs with Node.js",
      type: "video",
      duration: 20
    },
    {
      id: 226,
      title: "Node.js Quiz",
      description: "Test your knowledge of Node.js with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 227,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 16
    },
    {
      id: 228,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 229,
      title: "Building Mobile Apps with React Native",
      description: "Learn how to build mobile apps with React Native framework",
      type: "video",
      duration: 14
    },
    {
      id: 230,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 231,
      title: "Introduction to Kotlin",
      description: "Learn the basics of Kotlin programming language",
      type: "video",
      duration: 12
    },
    {
      id: 232,
      title: "Kotlin Quiz",
      description: "Test your knowledge of Kotlin with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 233,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 18
    },
    {
      id: 234,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 235,
      title: "Introduction to Swift",
      description: "Learn the basics of Swift programming language",
      type: "video",
      duration: 14
    },
    {
      id: 236,
      title: "Swift Quiz",
      description: "Test your knowledge of Swift with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 237,
      title: "Building Web Applications with Flask",
      description: "Learn how to build web applications with Flask framework",
      type: "video",
      duration: 16
    },
    {
      id: 238,
      title: "Flask Quiz",
      description: "Test your knowledge of Flask with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 239,
      title: "Introduction to PostgreSQL",
      description: "Learn the basics of PostgreSQL database",
      type: "video",
      duration: 12
    },
    {
      id: 240,
      title: "PostgreSQL Quiz",
      description: "Test your knowledge of PostgreSQL with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 241,
      title: "Building Web Applications with ASP.NET Core",
      description:
        "Learn how to build web applications with ASP.NET Core framework",
      type: "video",
      duration: 18
    },
    {
      id: 242,
      title: "ASP.NET Core Quiz",
      description: "Test your knowledge of ASP.NET Core with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 243,
      title: "Introduction to Go",
      description: "Learn the basics of Go programming language",
      type: "video",
      duration: 12
    },
    {
      id: 244,
      title: "Go Quiz",
      description: "Test your knowledge of Go with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 245,
      title: "Building Web Applications with Express.js",
      description:
        "Learn how to build web applications with Express.js framework",
      type: "video",
      duration: 16
    },
    {
      id: 246,
      title: "Express.js Quiz",
      description: "Test your knowledge of Express.js with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 247,
      title: "Introduction to Rust",
      description: "Learn the basics of Rust programming language",
      type: "video",
      duration: 14
    },
    {
      id: 248,
      title: "Rust Quiz",
      description: "Test your knowledge of Rust with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 249,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 18
    },
    {
      id: 250,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 251,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 12
    },
    {
      id: 252,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 253,
      title: "Building Web Applications with Flask and SQLAlchemy",
      description:
        "Learn how to build web applications with Flask framework and SQLAlchemy ORM",
      type: "video",
      duration: 20
    },
    {
      id: 254,
      title: "Flask and SQLAlchemy Quiz",
      description: "Test your knowledge of Flask and SQLAlchemy with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 255,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL API technology",
      type: "video",
      duration: 14
    },
    {
      id: 256,
      title: "GraphQL Quiz",
      description: "Test your knowledge of GraphQL with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 257,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 22
    },
    {
      id: 258,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 259,
      title: "React Native Basics",
      description:
        "Learn the basics of React Native framework for mobile app development",
      type: "video",
      duration: 16
    },
    {
      id: 260,
      title: "React Native Coding Challenge",
      description: "Apply your React Native knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 261,
      title: "Introduction to Kotlin",
      description: "Learn the basics of Kotlin programming language",
      type: "video",
      duration: 14
    },
    {
      id: 262,
      title: "Kotlin Quiz",
      description: "Test your knowledge of Kotlin with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 263,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 20
    },
    {
      id: 264,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 265,
      title: "Introduction to Swift",
      description: "Learn the basics of Swift programming language",
      type: "video",
      duration: 12
    },
    {
      id: 266,
      title: "Swift Quiz",
      description: "Test your knowledge of Swift with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 267,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 22
    },
    {
      id: 268,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 269,
      title: "Introduction to C#",
      description: "Learn the basics of C# programming language",
      type: "video",
      duration: 14
    },
    {
      id: 270,
      title: "C# Quiz",
      description: "Test your knowledge of C# with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 271,
      title: "Building Web Applications with Laravel",
      description: "Learn how to build web applications with Laravel framework",
      type: "video",
      duration: 20
    },
    {
      id: 272,
      title: "Laravel Quiz",
      description: "Test your knowledge of Laravel with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 273,
      title: "React Redux Basics",
      description: "Learn the basics of React Redux library for state management",
      type: "video",
      duration: 16
    },
    {
      id: 274,
      title: "React Redux Coding Challenge",
      description: "Apply your React Redux knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 275,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 14
    },
    {
      id: 276,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 277,
      title: "Building Web Applications with Flask",
      description: "Learn how to build web applications with Flask framework",
      type: "video",
      duration: 20
    },
    {
      id: 278,
      title: "Flask Quiz",
      description: "Test your knowledge of Flask with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 279,
      title: "Introduction to Java",
      description: "Learn the basics of Java programming language",
      type: "video",
      duration: 14
    },
    {
      id: 280,
      title: "Java Quiz",
      description: "Test your knowledge of Java with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 281,
      title: "Building Web Applications with Express",
      description: "Learn how to build web applications with Express framework",
      type: "video",
      duration: 22
    },
    {
      id: 282,
      title: "Express Quiz",
      description: "Test your knowledge of Express with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 283,
      title: "Introduction to Python",
      description: "Learn the basics of Python programming language",
      type: "video",
      duration: 14
    },
    {
      id: 284,
      title: "Python Quiz",
      description: "Test your knowledge of Python with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 285,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 22
    },
    {
      id: 286,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 287,
      title: "Introduction to PHP",
      description: "Learn the basics of PHP programming language",
      type: "video",
      duration: 14
    },
    {
      id: 288,
      title: "PHP Quiz",
      description: "Test your knowledge of PHP with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 289,
      title: "Introduction to MongoDB",
      description: "Learn the basics of MongoDB database",
      type: "video",
      duration: 16
    },
    {
      id: 290,
      title: "MongoDB Coding Challenge",
      description: "Apply your MongoDB knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 291,
      title: "Introduction to Ruby",
      description: "Learn the basics of Ruby programming language",
      type: "video",
      duration: 14
    },
    {
      id: 292,
      title: "Ruby Quiz",
      description: "Test your knowledge of Ruby with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 293,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 20
    },
    {
      id: 294,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 295,
      title: "Introduction to AngularJS",
      description: "Learn the basics of AngularJS framework",
      type: "video",
      duration: 18
    },
    {
      id: 296,
      title: "AngularJS Quiz",
      description: "Test your knowledge of AngularJS with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 297,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 22
    },
    {
      id: 298,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 299,
      title: "Introduction to SQL",
      description: "Learn the basics of SQL database programming language",
      type: "video",
      duration: 14
    },
    {
      id: 300,
      title: "SQL Quiz",
      description: "Test your knowledge of SQL with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 301,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 20
    },
    {
      id: 302,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 303,
      title: "Introduction to Node.js",
      description: "Learn the basics of Node.js runtime environment",
      type: "video",
      duration: 16
    },
    {
      id: 304,
      title: "Building Web Applications with Express.js",
      description:
        "Learn how to build web applications with Express.js framework",
      type: "video",
      duration: 20
    },
    {
      id: 305,
      title: "Express.js Quiz",
      description: "Test your knowledge of Express.js with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 306,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 18
    },
    {
      id: 307,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 308,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 22
    },
    {
      id: 309,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 310,
      title: "Introduction to Firebase",
      description: "Learn the basics of Firebase platform",
      type: "video",
      duration: 16
    },
    {
      id: 311,
      title: "Firebase Quiz",
      description: "Test your knowledge of Firebase with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 312,
      title: "Building Web Applications with React Native",
      description:
        "Learn how to build mobile applications with React Native framework",
      type: "video",
      duration: 24
    },
    {
      id: 313,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 12
    },
    {
      id: 314,
      title: "Introduction to AWS Lambda",
      description: "Learn the basics of AWS Lambda compute service",
      type: "video",
      duration: 18
    },
    {
      id: 315,
      title: "AWS Lambda Quiz",
      description: "Test your knowledge of AWS Lambda with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 316,
      title: "Building Web Applications with AWS Amplify",
      description:
        "Learn how to build web applications with AWS Amplify framework",
      type: "video",
      duration: 22
    },
    {
      id: 317,
      title: "AWS Amplify Quiz",
      description: "Test your knowledge of AWS Amplify with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 318,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL query language",
      type: "video",
      duration: 16
    },
    {
      id: 319,
      title: "GraphQL Quiz",
      description: "Test your knowledge of GraphQL with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 320,
      title: "JavaScript Coding Challenge",
      description: "Solve this JavaScript coding challenge",
      type: "codingchallenge",
      duration: 30
    },
    {
      id: 321,
      title: "React Coding Challenge",
      description: "Solve this React coding challenge",
      type: "codingchallenge",
      duration: 45
    },
    {
      id: 322,
      title: "Vue.js Coding Challenge",
      description: "Solve this Vue.js coding challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 323,
      title: "Node.js Coding Challenge",
      description: "Solve this Node.js coding challenge",
      type: "codingchallenge",
      duration: 35
    },
    {
      id: 324,
      title: "AWS Lambda Coding Challenge",
      description: "Solve this AWS Lambda coding challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 325,
      title: "GraphQL Coding Challenge",
      description: "Solve this GraphQL coding challenge",
      type: "codingchallenge",
      duration: 40
    },
    {
      id: 326,
      title: "React Native Coding Challenge",
      description: "Solve this React Native coding challenge",
      type: "codingchallenge",
      duration: 60
    },
    {
      id: 327,
      title: "Express.js Coding Challenge",
      description: "Solve this Express.js coding challenge",
      type: "codingchallenge",
      duration: 45
    },
    {
      id: 328,
      title: "MongoDB Coding Challenge",
      description: "Solve this MongoDB coding challenge",
      type: "codingchallenge",
      duration: 55
    },
    {
      id: 329,
      title: "JavaScript Algorithm Challenge",
      description: "Solve this JavaScript algorithm challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 330,
      title: "Data Structures Challenge",
      description: "Solve this data structures challenge",
      type: "codingchallenge",
      duration: 60
    },
    {
      id: 331,
      title: "React Native App Challenge",
      description: "Build a React Native app with the given requirements",
      type: "codingchallenge",
      duration: 90
    },
    {
      id: 332,
      title: "Vue.js App Challenge",
      description: "Build a Vue.js app with the given requirements",
      type: "codingchallenge",
      duration: 80
    },
    {
      id: 333,
      title: "Node.js App Challenge",
      description: "Build a Node.js app with the given requirements",
      type: "codingchallenge",
      duration: 85
    },
    {
      id: 334,
      title: "React App Challenge",
      description: "Build a React app with the given requirements",
      type: "codingchallenge",
      duration: 75
    },
    {
      id: 335,
      title: "JavaScript Game Challenge",
      description: "Build a JavaScript game with the given requirements",
      type: "codingchallenge",
      duration: 90
    },
    {
      id: 336,
      title: "Introduction to Vue.js",
      description: "Get started with Vue.js and learn its basics.",
      type: "video",
      duration: 20
    },
    {
      id: 337,
      title: "Advanced Vue.js",
      description: "Learn advanced Vue.js concepts and best practices.",
      type: "video",
      duration: 30
    },
    {
      id: 338,
      title: "Building Real-time Applications with Socket.io",
      description: "Learn how to build real-time applications with Socket.io",
      type: "video",
      duration: 25
    },
    {
      id: 339,
      title: "Getting Started with Redux",
      description:
        "Learn the basics of Redux and how to integrate it with your React application.",
      type: "video",
      duration: 30
    },
    {
      id: 340,
      title: "React Native Navigation",
      description: "Learn how to implement navigation in React Native.",
      type: "video",
      duration: 20
    },
    {
      id: 341,
      title: "Introduction to React Native",
      description:
        "Learn the basics of React Native and how to get started with it.",
      type: "video",
      duration: 25
    },
    {
      id: 342,
      title: "Web Security Fundamentals",
      description:
        "Learn the basics of web security and how to secure your web applications.",
      type: "video",
      duration: 35
    },
    {
      id: 343,
      title: "Asynchronous JavaScript",
      description:
        "Learn how to write asynchronous code in JavaScript using callbacks, promises and async/await.",
      type: "video",
      duration: 30
    },
    {
      id: 344,
      title: "Introduction to Machine Learning",
      description: "Learn the basics of machine learning and how it works.",
      type: "video",
      duration: 40
    },
    {
      id: 345,
      title: "Deep Learning Fundamentals",
      description: "Learn the basics of deep learning and neural networks.",
      type: "video",
      duration: 45
    },
    {
      id: 346,
      title: "Introduction to Natural Language Processing",
      description:
        "Learn the basics of natural language processing and how it works.",
      type: "video",
      duration: 35
    },
    {
      id: 347,
      title: "React Context API",
      description:
        "Learn how to use the React Context API to manage state in your React application.",
      type: "video",
      duration: 20
    },
    {
      id: 348,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL and how it works.",
      type: "video",
      duration: 25
    },
    {
      id: 349,
      title: "Building RESTful APIs with Node.js",
      description: "Learn how to build RESTful APIs with Node.js.",
      type: "video",
      duration: 30
    },
    {
      id: 350,
      title: "Building Real-time Applications with Pusher",
      description: "Learn how to build real-time applications with Pusher.",
      type: "video",
      duration: 25
    },
    {
      id: 351,
      title: "React Hooks MCQ Challenge",
      description: "Test your understanding of React Hooks concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 352,
      title: "Node.js MCQ Challenge",
      description:
        "See if you have understood the Node.js concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 353,
      title: "Python Fundamentals MCQ Challenge",
      description: "Test your understanding of Python Fundamentals concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 354,
      title: "Data Structures and Algorithms MCQ Challenge",
      description:
        "Test your understanding of Data Structures and Algorithms concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 355,
      title: "React Native MCQ Challenge",
      description: "Test your understanding of React Native concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 356,
      title: "JavaScript Fundamentals MCQ Challenge",
      description: "Test your understanding of JavaScript Fundamentals concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 357,
      title: "MongoDB MCQ Challenge",
      description: "Test your understanding of MongoDB concepts.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 358,
      title: "Docker Fundamentals MCQ Challenge",
      description: "Test your understanding of Docker Fundamentals concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 359,
      title: "Python MCQ Challenge",
      description:
        "See if you have understood the Python concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 360,
      title: "React Query MCQ Challenge",
      description: "Test your understanding of React Query concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 361,
      title: "Vue.js MCQ Challenge",
      description: "Test your understanding of Vue.js concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 362,
      title: "Redux MCQ Challenge",
      description: "Test your understanding of Redux concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 363,
      title: "Web Security MCQ Challenge",
      description: "Test your understanding of web security concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 364,
      title: "Asynchronous JavaScript MCQ Challenge",
      description: "Test your understanding of asynchronous JavaScript concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 365,
      title: "Machine Learning MCQ Challenge",
      description: "Test your understanding of Machine Learning concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 366,
      title: "React Native Navigation",
      description: "Learn how to implement navigation in React Native",
      type: "video",
      duration: 12
    },
    {
      id: 367,
      title: "React Native Maps",
      description: "Learn how to use maps in React Native",
      type: "video",
      duration: 15
    },
    {
      id: 368,
      title: "React Native Camera",
      description: "Learn how to use the camera in React Native",
      type: "video",
      duration: 10
    },
    {
      id: 369,
      title: "React Native Animation",
      description: "Learn how to create animations in React Native",
      type: "video",
      duration: 18
    },
    {
      id: 370,
      title: "React Native Gesture Handler",
      description: "Learn how to use gesture handler in React Native",
      type: "video",
      duration: 8
    },
    {
      id: 371,
      title: "React Native Components",
      description: "Learn about React Native Components",
      type: "video",
      duration: 12
    },
    {
      id: 372,
      title: "React Native Redux",
      description: "Learn how to use Redux in React Native",
      type: "video",
      duration: 14
    },
    {
      id: 373,
      title: "React Native with Firebase",
      description: "Learn how to use Firebase with React Native",
      type: "video",
      duration: 13
    },
    {
      id: 374,
      title: "React Native with GraphQL",
      description: "Learn how to use GraphQL with React Native",
      type: "video",
      duration: 16
    },
    {
      id: 375,
      title: "React Native with AWS",
      description: "Learn how to use AWS with React Native",
      type: "video",
      duration: 17
    },
    {
      id: 376,
      title: "React Native with Azure",
      description: "Learn how to use Azure with React Native",
      type: "video",
      duration: 19
    },
    {
      id: 377,
      title: "React Native with Google Cloud",
      description: "Learn how to use Google Cloud with React Native",
      type: "video",
      duration: 20
    },
    {
      id: 378,
      title: "React Native with Microsoft Cognitive Services",
      description:
        "Learn how to use Microsoft Cognitive Services with React Native",
      type: "video",
      duration: 22
    },
    {
      id: 379,
      title: "React Native with IBM Watson",
      description: "Learn how to use IBM Watson with React Native",
      type: "video",
      duration: 23
    },
    {
      id: 380,
      title: "React Native with OpenAI GPT-3",
      description: "Learn how to use OpenAI GPT-3 with React Native",
      type: "video",
      duration: 25
    },
    {
      id: 381,
      title: "React Query",
      description: "Learn how to use React Query",
      type: "video",
      duration: 10
    },
    {
      id: 382,
      title: "MCQ Challenge for React Query",
      description: "See if you understood the concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 383,
      title: "Coding Challenge with React Query",
      description: "Apply the React Query Concept here",
      type: "codingchallenge",
      duration: 20
    },
    {
      id: 384,
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript programming language",
      type: "video",
      duration: 12
    },
    {
      id: 385,
      title: "JavaScript Quiz",
      description: "Test your knowledge of JavaScript with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 386,
      title: "Creating APIs with Node.js",
      description: "Learn how to create APIs with Node.js and Express",
      type: "video",
      duration: 15
    },
    {
      id: 387,
      title: "Node.js Quiz",
      description: "Test your knowledge of Node.js with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 388,
      title: "Building Web Applications with React",
      description: "Learn how to build web applications with React.js",
      type: "video",
      duration: 18
    },
    {
      id: 389,
      title: "React Quiz",
      description: "Test your knowledge of React with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 390,
      title: "React Native Basics",
      description:
        "Learn the basics of React Native framework for mobile app development",
      type: "video",
      duration: 16
    },
    {
      id: 391,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 392,
      title: "Building RESTful APIs with Django",
      description: "Learn how to build RESTful APIs with Django framework",
      type: "video",
      duration: 14
    },
    {
      id: 393,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 394,
      title: "Python Basics",
      description: "Learn the basics of Python programming language",
      type: "video",
      duration: 12
    },
    {
      id: 395,
      title: "Python Quiz",
      description: "Test your knowledge of Python with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 396,
      title: "Introduction to Machine Learning",
      description: "Learn the basics of Machine Learning",
      type: "video",
      duration: 20
    },
    {
      id: 397,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 16
    },
    {
      id: 398,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 399,
      title: "Introduction to Data Structures and Algorithms",
      description: "Learn the basics of Data Structures and Algorithms",
      type: "video",
      duration: 22
    },
    {
      id: 400,
      title: "Data Structures and Algorithms Quiz",
      description:
        "Test your knowledge of Data Structures and Algorithms with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 401,
      title: "Building Mobile Apps with Ionic Framework",
      description: "Learn how to build mobile apps with Ionic Framework",
      type: "video",
      duration: 14
    },
    {
      id: 402,
      title: "Ionic Framework Quiz",
      description: "Test your knowledge of Ionic Framework with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 403,
      title: "Introduction to HTML and CSS",
      description: "Learn the basics of HTML and CSS",
      type: "video",
      duration: 12
    },
    {
      id: 404,
      title: "HTML and CSS Quiz",
      description: "Test your knowledge of HTML and CSS with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 405,
      title: "Introduction to MongoDB",
      description: "Learn the basics of MongoDB database",
      type: "video",
      duration: 10
    },
    {
      id: 406,
      title: "MongoDB Quiz",
      description: "Test your knowledge of MongoDB with this quiz",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 407,
      title: "Introduction to Firebase",
      description: "Learn the basics of Firebase",
      type: "video",
      duration: 12
    },
    {
      id: 408,
      title: "Firebase Quiz",
      description: "Test your knowledge of Firebase with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 409,
      title: "Introduction to Redux",
      description: "Learn the basics of Redux for state management",
      type: "video",
      duration: 14
    },
    {
      id: 410,
      title: "Redux Quiz",
      description: "Test your knowledge of Redux with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 411,
      title: "Introduction to AWS",
      description: "Learn the basics of AWS cloud services",
      type: "video",
      duration: 18
    },
    {
      id: 412,
      title: "AWS Quiz",
      description: "Test your knowledge of AWS with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 413,
      title: "Introduction to Docker",
      description: "Learn the basics of Docker containerization",
      type: "video",
      duration: 10
    },
    {
      id: 414,
      title: "Docker Quiz",
      description: "Test your knowledge of Docker with this quiz",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 415,
      title: "Building APIs with Node.js",
      description: "Learn how to build APIs with Node.js",
      type: "video",
      duration: 20
    },
    {
      id: 416,
      title: "Node.js Quiz",
      description: "Test your knowledge of Node.js with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 417,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 16
    },
    {
      id: 418,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 419,
      title: "Building Mobile Apps with React Native",
      description: "Learn how to build mobile apps with React Native framework",
      type: "video",
      duration: 14
    },
    {
      id: 420,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 421,
      title: "Introduction to Kotlin",
      description: "Learn the basics of Kotlin programming language",
      type: "video",
      duration: 12
    },
    {
      id: 422,
      title: "Kotlin Quiz",
      description: "Test your knowledge of Kotlin with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 423,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 18
    },
    {
      id: 424,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 425,
      title: "Introduction to Swift",
      description: "Learn the basics of Swift programming language",
      type: "video",
      duration: 14
    },
    {
      id: 426,
      title: "Swift Quiz",
      description: "Test your knowledge of Swift with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 427,
      title: "Building Web Applications with Flask",
      description: "Learn how to build web applications with Flask framework",
      type: "video",
      duration: 16
    },
    {
      id: 428,
      title: "Flask Quiz",
      description: "Test your knowledge of Flask with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 429,
      title: "Introduction to PostgreSQL",
      description: "Learn the basics of PostgreSQL database",
      type: "video",
      duration: 12
    },
    {
      id: 430,
      title: "PostgreSQL Quiz",
      description: "Test your knowledge of PostgreSQL with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 431,
      title: "Building Web Applications with ASP.NET Core",
      description:
        "Learn how to build web applications with ASP.NET Core framework",
      type: "video",
      duration: 18
    },
    {
      id: 432,
      title: "ASP.NET Core Quiz",
      description: "Test your knowledge of ASP.NET Core with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 433,
      title: "Introduction to Go",
      description: "Learn the basics of Go programming language",
      type: "video",
      duration: 12
    },
    {
      id: 434,
      title: "Go Quiz",
      description: "Test your knowledge of Go with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 435,
      title: "Building Web Applications with Express.js",
      description:
        "Learn how to build web applications with Express.js framework",
      type: "video",
      duration: 16
    },
    {
      id: 436,
      title: "Express.js Quiz",
      description: "Test your knowledge of Express.js with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 437,
      title: "Introduction to Rust",
      description: "Learn the basics of Rust programming language",
      type: "video",
      duration: 14
    },
    {
      id: 438,
      title: "Rust Quiz",
      description: "Test your knowledge of Rust with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 439,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 18
    },
    {
      id: 440,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 441,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 12
    },
    {
      id: 442,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 443,
      title: "Building Web Applications with Flask and SQLAlchemy",
      description:
        "Learn how to build web applications with Flask framework and SQLAlchemy ORM",
      type: "video",
      duration: 20
    },
    {
      id: 444,
      title: "Flask and SQLAlchemy Quiz",
      description: "Test your knowledge of Flask and SQLAlchemy with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 445,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL API technology",
      type: "video",
      duration: 14
    },
    {
      id: 446,
      title: "GraphQL Quiz",
      description: "Test your knowledge of GraphQL with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 447,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 22
    },
    {
      id: 448,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 449,
      title: "React Native Basics",
      description:
        "Learn the basics of React Native framework for mobile app development",
      type: "video",
      duration: 16
    },
    {
      id: 450,
      title: "React Native Coding Challenge",
      description: "Apply your React Native knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 451,
      title: "Introduction to Kotlin",
      description: "Learn the basics of Kotlin programming language",
      type: "video",
      duration: 14
    },
    {
      id: 452,
      title: "Kotlin Quiz",
      description: "Test your knowledge of Kotlin with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 453,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 20
    },
    {
      id: 454,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 455,
      title: "Introduction to Swift",
      description: "Learn the basics of Swift programming language",
      type: "video",
      duration: 12
    },
    {
      id: 456,
      title: "Swift Quiz",
      description: "Test your knowledge of Swift with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 457,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 22
    },
    {
      id: 458,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 459,
      title: "Introduction to C#",
      description: "Learn the basics of C# programming language",
      type: "video",
      duration: 14
    },
    {
      id: 460,
      title: "C# Quiz",
      description: "Test your knowledge of C# with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 461,
      title: "Building Web Applications with Laravel",
      description: "Learn how to build web applications with Laravel framework",
      type: "video",
      duration: 20
    },
    {
      id: 462,
      title: "Laravel Quiz",
      description: "Test your knowledge of Laravel with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 463,
      title: "React Redux Basics",
      description: "Learn the basics of React Redux library for state management",
      type: "video",
      duration: 16
    },
    {
      id: 464,
      title: "React Redux Coding Challenge",
      description: "Apply your React Redux knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 465,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 14
    },
    {
      id: 466,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 467,
      title: "Building Web Applications with Flask",
      description: "Learn how to build web applications with Flask framework",
      type: "video",
      duration: 20
    },
    {
      id: 468,
      title: "Flask Quiz",
      description: "Test your knowledge of Flask with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 469,
      title: "Introduction to Java",
      description: "Learn the basics of Java programming language",
      type: "video",
      duration: 14
    },
    {
      id: 470,
      title: "Java Quiz",
      description: "Test your knowledge of Java with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 471,
      title: "Building Web Applications with Express",
      description: "Learn how to build web applications with Express framework",
      type: "video",
      duration: 22
    },
    {
      id: 472,
      title: "Express Quiz",
      description: "Test your knowledge of Express with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 473,
      title: "Introduction to Python",
      description: "Learn the basics of Python programming language",
      type: "video",
      duration: 14
    },
    {
      id: 474,
      title: "Python Quiz",
      description: "Test your knowledge of Python with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 475,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 22
    },
    {
      id: 476,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 477,
      title: "Introduction to PHP",
      description: "Learn the basics of PHP programming language",
      type: "video",
      duration: 14
    },
    {
      id: 478,
      title: "PHP Quiz",
      description: "Test your knowledge of PHP with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 479,
      title: "Introduction to MongoDB",
      description: "Learn the basics of MongoDB database",
      type: "video",
      duration: 16
    },
    {
      id: 480,
      title: "MongoDB Coding Challenge",
      description: "Apply your MongoDB knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 481,
      title: "Introduction to Ruby",
      description: "Learn the basics of Ruby programming language",
      type: "video",
      duration: 14
    },
    {
      id: 482,
      title: "Ruby Quiz",
      description: "Test your knowledge of Ruby with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 483,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 20
    },
    {
      id: 484,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 485,
      title: "Introduction to AngularJS",
      description: "Learn the basics of AngularJS framework",
      type: "video",
      duration: 18
    },
    {
      id: 486,
      title: "AngularJS Quiz",
      description: "Test your knowledge of AngularJS with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 487,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 22
    },
    {
      id: 488,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 489,
      title: "Introduction to SQL",
      description: "Learn the basics of SQL database programming language",
      type: "video",
      duration: 14
    },
    {
      id: 490,
      title: "SQL Quiz",
      description: "Test your knowledge of SQL with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 491,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 20
    },
    {
      id: 492,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 493,
      title: "Introduction to Node.js",
      description: "Learn the basics of Node.js runtime environment",
      type: "video",
      duration: 16
    },
    {
      id: 494,
      title: "Building Web Applications with Express.js",
      description:
        "Learn how to build web applications with Express.js framework",
      type: "video",
      duration: 20
    },
    {
      id: 495,
      title: "Express.js Quiz",
      description: "Test your knowledge of Express.js with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 496,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 18
    },
    {
      id: 497,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 498,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 22
    },
    {
      id: 499,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 500,
      title: "Introduction to Firebase",
      description: "Learn the basics of Firebase platform",
      type: "video",
      duration: 16
    },
    {
      id: 501,
      title: "Firebase Quiz",
      description: "Test your knowledge of Firebase with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 502,
      title: "Building Web Applications with React Native",
      description:
        "Learn how to build mobile applications with React Native framework",
      type: "video",
      duration: 24
    },
    {
      id: 503,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 12
    },
    {
      id: 504,
      title: "Introduction to AWS Lambda",
      description: "Learn the basics of AWS Lambda compute service",
      type: "video",
      duration: 18
    },
    {
      id: 505,
      title: "AWS Lambda Quiz",
      description: "Test your knowledge of AWS Lambda with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 506,
      title: "Building Web Applications with AWS Amplify",
      description:
        "Learn how to build web applications with AWS Amplify framework",
      type: "video",
      duration: 22
    },
    {
      id: 507,
      title: "AWS Amplify Quiz",
      description: "Test your knowledge of AWS Amplify with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 508,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL query language",
      type: "video",
      duration: 16
    },
    {
      id: 509,
      title: "GraphQL Quiz",
      description: "Test your knowledge of GraphQL with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 510,
      title: "JavaScript Coding Challenge",
      description: "Solve this JavaScript coding challenge",
      type: "codingchallenge",
      duration: 30
    },
    {
      id: 511,
      title: "React Coding Challenge",
      description: "Solve this React coding challenge",
      type: "codingchallenge",
      duration: 45
    },
    {
      id: 512,
      title: "Vue.js Coding Challenge",
      description: "Solve this Vue.js coding challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 513,
      title: "Node.js Coding Challenge",
      description: "Solve this Node.js coding challenge",
      type: "codingchallenge",
      duration: 35
    },
    {
      id: 514,
      title: "AWS Lambda Coding Challenge",
      description: "Solve this AWS Lambda coding challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 515,
      title: "GraphQL Coding Challenge",
      description: "Solve this GraphQL coding challenge",
      type: "codingchallenge",
      duration: 40
    },
    {
      id: 516,
      title: "React Native Coding Challenge",
      description: "Solve this React Native coding challenge",
      type: "codingchallenge",
      duration: 60
    },
    {
      id: 517,
      title: "Express.js Coding Challenge",
      description: "Solve this Express.js coding challenge",
      type: "codingchallenge",
      duration: 45
    },
    {
      id: 518,
      title: "MongoDB Coding Challenge",
      description: "Solve this MongoDB coding challenge",
      type: "codingchallenge",
      duration: 55
    },
    {
      id: 519,
      title: "JavaScript Algorithm Challenge",
      description: "Solve this JavaScript algorithm challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 520,
      title: "Data Structures Challenge",
      description: "Solve this data structures challenge",
      type: "codingchallenge",
      duration: 60
    },
    {
      id: 521,
      title: "React Native App Challenge",
      description: "Build a React Native app with the given requirements",
      type: "codingchallenge",
      duration: 90
    },
    {
      id: 522,
      title: "Vue.js App Challenge",
      description: "Build a Vue.js app with the given requirements",
      type: "codingchallenge",
      duration: 80
    },
    {
      id: 523,
      title: "Node.js App Challenge",
      description: "Build a Node.js app with the given requirements",
      type: "codingchallenge",
      duration: 85
    },
    {
      id: 524,
      title: "React App Challenge",
      description: "Build a React app with the given requirements",
      type: "codingchallenge",
      duration: 75
    },
    {
      id: 525,
      title: "JavaScript Game Challenge",
      description: "Build a JavaScript game with the given requirements",
      type: "codingchallenge",
      duration: 90
    },
    {
      id: 526,
      title: "Introduction to Vue.js",
      description: "Get started with Vue.js and learn its basics.",
      type: "video",
      duration: 20
    },
    {
      id: 527,
      title: "Advanced Vue.js",
      description: "Learn advanced Vue.js concepts and best practices.",
      type: "video",
      duration: 30
    },
    {
      id: 528,
      title: "Building Real-time Applications with Socket.io",
      description: "Learn how to build real-time applications with Socket.io",
      type: "video",
      duration: 25
    },
    {
      id: 529,
      title: "Getting Started with Redux",
      description:
        "Learn the basics of Redux and how to integrate it with your React application.",
      type: "video",
      duration: 30
    },
    {
      id: 530,
      title: "React Native Navigation",
      description: "Learn how to implement navigation in React Native.",
      type: "video",
      duration: 20
    },
    {
      id: 531,
      title: "Introduction to React Native",
      description:
        "Learn the basics of React Native and how to get started with it.",
      type: "video",
      duration: 25
    },
    {
      id: 532,
      title: "Web Security Fundamentals",
      description:
        "Learn the basics of web security and how to secure your web applications.",
      type: "video",
      duration: 35
    },
    {
      id: 533,
      title: "Asynchronous JavaScript",
      description:
        "Learn how to write asynchronous code in JavaScript using callbacks, promises and async/await.",
      type: "video",
      duration: 30
    },
    {
      id: 534,
      title: "Introduction to Machine Learning",
      description: "Learn the basics of machine learning and how it works.",
      type: "video",
      duration: 40
    },
    {
      id: 535,
      title: "Deep Learning Fundamentals",
      description: "Learn the basics of deep learning and neural networks.",
      type: "video",
      duration: 45
    },
    {
      id: 536,
      title: "Introduction to Natural Language Processing",
      description:
        "Learn the basics of natural language processing and how it works.",
      type: "video",
      duration: 35
    },
    {
      id: 537,
      title: "React Context API",
      description:
        "Learn how to use the React Context API to manage state in your React application.",
      type: "video",
      duration: 20
    },
    {
      id: 538,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL and how it works.",
      type: "video",
      duration: 25
    },
    {
      id: 539,
      title: "Building RESTful APIs with Node.js",
      description: "Learn how to build RESTful APIs with Node.js.",
      type: "video",
      duration: 30
    },
    {
      id: 540,
      title: "Building Real-time Applications with Pusher",
      description: "Learn how to build real-time applications with Pusher.",
      type: "video",
      duration: 25
    },
    {
      id: 541,
      title: "React Hooks MCQ Challenge",
      description: "Test your understanding of React Hooks concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 542,
      title: "Node.js MCQ Challenge",
      description:
        "See if you have understood the Node.js concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 543,
      title: "Python Fundamentals MCQ Challenge",
      description: "Test your understanding of Python Fundamentals concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 544,
      title: "Data Structures and Algorithms MCQ Challenge",
      description:
        "Test your understanding of Data Structures and Algorithms concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 545,
      title: "React Native MCQ Challenge",
      description: "Test your understanding of React Native concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 546,
      title: "JavaScript Fundamentals MCQ Challenge",
      description: "Test your understanding of JavaScript Fundamentals concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 547,
      title: "MongoDB MCQ Challenge",
      description: "Test your understanding of MongoDB concepts.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 548,
      title: "Docker Fundamentals MCQ Challenge",
      description: "Test your understanding of Docker Fundamentals concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 549,
      title: "Python MCQ Challenge",
      description:
        "See if you have understood the Python concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 550,
      title: "React Query MCQ Challenge",
      description: "Test your understanding of React Query concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 551,
      title: "Vue.js MCQ Challenge",
      description: "Test your understanding of Vue.js concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 552,
      title: "Redux MCQ Challenge",
      description: "Test your understanding of Redux concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 553,
      title: "Web Security MCQ Challenge",
      description: "Test your understanding of web security concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 554,
      title: "Asynchronous JavaScript MCQ Challenge",
      description: "Test your understanding of asynchronous JavaScript concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 555,
      title: "Machine Learning MCQ Challenge",
      description: "Test your understanding of Machine Learning concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 556,
      title: "React Native Navigation",
      description: "Learn how to implement navigation in React Native",
      type: "video",
      duration: 12
    },
    {
      id: 557,
      title: "React Native Maps",
      description: "Learn how to use maps in React Native",
      type: "video",
      duration: 15
    },
    {
      id: 558,
      title: "React Native Camera",
      description: "Learn how to use the camera in React Native",
      type: "video",
      duration: 10
    },
    {
      id: 559,
      title: "React Native Animation",
      description: "Learn how to create animations in React Native",
      type: "video",
      duration: 18
    },
    {
      id: 560,
      title: "React Native Gesture Handler",
      description: "Learn how to use gesture handler in React Native",
      type: "video",
      duration: 8
    },
    {
      id: 561,
      title: "React Native Components",
      description: "Learn about React Native Components",
      type: "video",
      duration: 12
    },
    {
      id: 562,
      title: "React Native Redux",
      description: "Learn how to use Redux in React Native",
      type: "video",
      duration: 14
    },
    {
      id: 563,
      title: "React Native with Firebase",
      description: "Learn how to use Firebase with React Native",
      type: "video",
      duration: 13
    },
    {
      id: 564,
      title: "React Native with GraphQL",
      description: "Learn how to use GraphQL with React Native",
      type: "video",
      duration: 16
    },
    {
      id: 565,
      title: "React Native with AWS",
      description: "Learn how to use AWS with React Native",
      type: "video",
      duration: 17
    },
    {
      id: 566,
      title: "React Native with Azure",
      description: "Learn how to use Azure with React Native",
      type: "video",
      duration: 19
    },
    {
      id: 567,
      title: "React Native with Google Cloud",
      description: "Learn how to use Google Cloud with React Native",
      type: "video",
      duration: 20
    },
    {
      id: 568,
      title: "React Native with Microsoft Cognitive Services",
      description:
        "Learn how to use Microsoft Cognitive Services with React Native",
      type: "video",
      duration: 22
    },
    {
      id: 569,
      title: "React Native with IBM Watson",
      description: "Learn how to use IBM Watson with React Native",
      type: "video",
      duration: 23
    },
    {
      id: 570,
      title: "React Native with OpenAI GPT-3",
      description: "Learn how to use OpenAI GPT-3 with React Native",
      type: "video",
      duration: 25
    },
    {
      id: 571,
      title: "React Query",
      description: "Learn how to use React Query",
      type: "video",
      duration: 10
    },
    {
      id: 572,
      title: "MCQ Challenge for React Query",
      description: "See if you understood the concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 573,
      title: "Coding Challenge with React Query",
      description: "Apply the React Query Concept here",
      type: "codingchallenge",
      duration: 20
    },
    {
      id: 574,
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript programming language",
      type: "video",
      duration: 12
    },
    {
      id: 575,
      title: "JavaScript Quiz",
      description: "Test your knowledge of JavaScript with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 576,
      title: "Creating APIs with Node.js",
      description: "Learn how to create APIs with Node.js and Express",
      type: "video",
      duration: 15
    },
    {
      id: 577,
      title: "Node.js Quiz",
      description: "Test your knowledge of Node.js with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 578,
      title: "Building Web Applications with React",
      description: "Learn how to build web applications with React.js",
      type: "video",
      duration: 18
    },
    {
      id: 579,
      title: "React Quiz",
      description: "Test your knowledge of React with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 580,
      title: "React Native Basics",
      description:
        "Learn the basics of React Native framework for mobile app development",
      type: "video",
      duration: 16
    },
    {
      id: 581,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 582,
      title: "Building RESTful APIs with Django",
      description: "Learn how to build RESTful APIs with Django framework",
      type: "video",
      duration: 14
    },
    {
      id: 583,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 584,
      title: "Python Basics",
      description: "Learn the basics of Python programming language",
      type: "video",
      duration: 12
    },
    {
      id: 585,
      title: "Python Quiz",
      description: "Test your knowledge of Python with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 586,
      title: "Introduction to Machine Learning",
      description: "Learn the basics of Machine Learning",
      type: "video",
      duration: 20
    },
    {
      id: 587,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 16
    },
    {
      id: 588,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 589,
      title: "Introduction to Data Structures and Algorithms",
      description: "Learn the basics of Data Structures and Algorithms",
      type: "video",
      duration: 22
    },
    {
      id: 590,
      title: "Data Structures and Algorithms Quiz",
      description:
        "Test your knowledge of Data Structures and Algorithms with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 591,
      title: "Building Mobile Apps with Ionic Framework",
      description: "Learn how to build mobile apps with Ionic Framework",
      type: "video",
      duration: 14
    },
    {
      id: 592,
      title: "Ionic Framework Quiz",
      description: "Test your knowledge of Ionic Framework with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 593,
      title: "Introduction to HTML and CSS",
      description: "Learn the basics of HTML and CSS",
      type: "video",
      duration: 12
    },
    {
      id: 594,
      title: "HTML and CSS Quiz",
      description: "Test your knowledge of HTML and CSS with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 595,
      title: "Introduction to MongoDB",
      description: "Learn the basics of MongoDB database",
      type: "video",
      duration: 10
    },
    {
      id: 596,
      title: "MongoDB Quiz",
      description: "Test your knowledge of MongoDB with this quiz",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 597,
      title: "Introduction to Firebase",
      description: "Learn the basics of Firebase",
      type: "video",
      duration: 12
    },
    {
      id: 598,
      title: "Firebase Quiz",
      description: "Test your knowledge of Firebase with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 599,
      title: "Introduction to Redux",
      description: "Learn the basics of Redux for state management",
      type: "video",
      duration: 14
    },
    {
      id: 600,
      title: "Redux Quiz",
      description: "Test your knowledge of Redux with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 601,
      title: "Introduction to AWS",
      description: "Learn the basics of AWS cloud services",
      type: "video",
      duration: 18
    },
    {
      id: 602,
      title: "AWS Quiz",
      description: "Test your knowledge of AWS with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 603,
      title: "Introduction to Docker",
      description: "Learn the basics of Docker containerization",
      type: "video",
      duration: 10
    },
    {
      id: 604,
      title: "Docker Quiz",
      description: "Test your knowledge of Docker with this quiz",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 605,
      title: "Building APIs with Node.js",
      description: "Learn how to build APIs with Node.js",
      type: "video",
      duration: 20
    },
    {
      id: 606,
      title: "Node.js Quiz",
      description: "Test your knowledge of Node.js with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 607,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 16
    },
    {
      id: 608,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 609,
      title: "Building Mobile Apps with React Native",
      description: "Learn how to build mobile apps with React Native framework",
      type: "video",
      duration: 14
    },
    {
      id: 610,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 611,
      title: "Introduction to Kotlin",
      description: "Learn the basics of Kotlin programming language",
      type: "video",
      duration: 12
    },
    {
      id: 612,
      title: "Kotlin Quiz",
      description: "Test your knowledge of Kotlin with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 613,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 18
    },
    {
      id: 614,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 615,
      title: "Introduction to Swift",
      description: "Learn the basics of Swift programming language",
      type: "video",
      duration: 14
    },
    {
      id: 616,
      title: "Swift Quiz",
      description: "Test your knowledge of Swift with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 617,
      title: "Building Web Applications with Flask",
      description: "Learn how to build web applications with Flask framework",
      type: "video",
      duration: 16
    },
    {
      id: 618,
      title: "Flask Quiz",
      description: "Test your knowledge of Flask with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 619,
      title: "Introduction to PostgreSQL",
      description: "Learn the basics of PostgreSQL database",
      type: "video",
      duration: 12
    },
    {
      id: 620,
      title: "PostgreSQL Quiz",
      description: "Test your knowledge of PostgreSQL with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 621,
      title: "Building Web Applications with ASP.NET Core",
      description:
        "Learn how to build web applications with ASP.NET Core framework",
      type: "video",
      duration: 18
    },
    {
      id: 622,
      title: "ASP.NET Core Quiz",
      description: "Test your knowledge of ASP.NET Core with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 623,
      title: "Introduction to Go",
      description: "Learn the basics of Go programming language",
      type: "video",
      duration: 12
    },
    {
      id: 624,
      title: "Go Quiz",
      description: "Test your knowledge of Go with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 625,
      title: "Building Web Applications with Express.js",
      description:
        "Learn how to build web applications with Express.js framework",
      type: "video",
      duration: 16
    },
    {
      id: 626,
      title: "Express.js Quiz",
      description: "Test your knowledge of Express.js with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 627,
      title: "Introduction to Rust",
      description: "Learn the basics of Rust programming language",
      type: "video",
      duration: 14
    },
    {
      id: 628,
      title: "Rust Quiz",
      description: "Test your knowledge of Rust with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 629,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 18
    },
    {
      id: 630,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 631,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 12
    },
    {
      id: 632,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 633,
      title: "Building Web Applications with Flask and SQLAlchemy",
      description:
        "Learn how to build web applications with Flask framework and SQLAlchemy ORM",
      type: "video",
      duration: 20
    },
    {
      id: 634,
      title: "Flask and SQLAlchemy Quiz",
      description: "Test your knowledge of Flask and SQLAlchemy with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 635,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL API technology",
      type: "video",
      duration: 14
    },
    {
      id: 636,
      title: "GraphQL Quiz",
      description: "Test your knowledge of GraphQL with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 637,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 22
    },
    {
      id: 638,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 639,
      title: "React Native Basics",
      description:
        "Learn the basics of React Native framework for mobile app development",
      type: "video",
      duration: 16
    },
    {
      id: 640,
      title: "React Native Coding Challenge",
      description: "Apply your React Native knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 641,
      title: "Introduction to Kotlin",
      description: "Learn the basics of Kotlin programming language",
      type: "video",
      duration: 14
    },
    {
      id: 642,
      title: "Kotlin Quiz",
      description: "Test your knowledge of Kotlin with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 643,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 20
    },
    {
      id: 644,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 645,
      title: "Introduction to Swift",
      description: "Learn the basics of Swift programming language",
      type: "video",
      duration: 12
    },
    {
      id: 646,
      title: "Swift Quiz",
      description: "Test your knowledge of Swift with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 647,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 22
    },
    {
      id: 648,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 649,
      title: "Introduction to C#",
      description: "Learn the basics of C# programming language",
      type: "video",
      duration: 14
    },
    {
      id: 650,
      title: "C# Quiz",
      description: "Test your knowledge of C# with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 651,
      title: "Building Web Applications with Laravel",
      description: "Learn how to build web applications with Laravel framework",
      type: "video",
      duration: 20
    },
    {
      id: 652,
      title: "Laravel Quiz",
      description: "Test your knowledge of Laravel with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 653,
      title: "React Redux Basics",
      description: "Learn the basics of React Redux library for state management",
      type: "video",
      duration: 16
    },
    {
      id: 654,
      title: "React Redux Coding Challenge",
      description: "Apply your React Redux knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 655,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 14
    },
    {
      id: 656,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 657,
      title: "Building Web Applications with Flask",
      description: "Learn how to build web applications with Flask framework",
      type: "video",
      duration: 20
    },
    {
      id: 658,
      title: "Flask Quiz",
      description: "Test your knowledge of Flask with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 659,
      title: "Introduction to Java",
      description: "Learn the basics of Java programming language",
      type: "video",
      duration: 14
    },
    {
      id: 660,
      title: "Java Quiz",
      description: "Test your knowledge of Java with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 661,
      title: "Building Web Applications with Express",
      description: "Learn how to build web applications with Express framework",
      type: "video",
      duration: 22
    },
    {
      id: 662,
      title: "Express Quiz",
      description: "Test your knowledge of Express with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 663,
      title: "Introduction to Python",
      description: "Learn the basics of Python programming language",
      type: "video",
      duration: 14
    },
    {
      id: 664,
      title: "Python Quiz",
      description: "Test your knowledge of Python with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 665,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 22
    },
    {
      id: 666,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 667,
      title: "Introduction to PHP",
      description: "Learn the basics of PHP programming language",
      type: "video",
      duration: 14
    },
    {
      id: 668,
      title: "PHP Quiz",
      description: "Test your knowledge of PHP with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 669,
      title: "Introduction to MongoDB",
      description: "Learn the basics of MongoDB database",
      type: "video",
      duration: 16
    },
    {
      id: 670,
      title: "MongoDB Coding Challenge",
      description: "Apply your MongoDB knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 671,
      title: "Introduction to Ruby",
      description: "Learn the basics of Ruby programming language",
      type: "video",
      duration: 14
    },
    {
      id: 672,
      title: "Ruby Quiz",
      description: "Test your knowledge of Ruby with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 673,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 20
    },
    {
      id: 674,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 675,
      title: "Introduction to AngularJS",
      description: "Learn the basics of AngularJS framework",
      type: "video",
      duration: 18
    },
    {
      id: 676,
      title: "AngularJS Quiz",
      description: "Test your knowledge of AngularJS with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 677,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 22
    },
    {
      id: 678,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 679,
      title: "Introduction to SQL",
      description: "Learn the basics of SQL database programming language",
      type: "video",
      duration: 14
    },
    {
      id: 680,
      title: "SQL Quiz",
      description: "Test your knowledge of SQL with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 681,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 20
    },
    {
      id: 682,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 683,
      title: "Introduction to Node.js",
      description: "Learn the basics of Node.js runtime environment",
      type: "video",
      duration: 16
    },
    {
      id: 684,
      title: "Building Web Applications with Express.js",
      description:
        "Learn how to build web applications with Express.js framework",
      type: "video",
      duration: 20
    },
    {
      id: 685,
      title: "Express.js Quiz",
      description: "Test your knowledge of Express.js with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 686,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 18
    },
    {
      id: 687,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 688,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 22
    },
    {
      id: 689,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 690,
      title: "Introduction to Firebase",
      description: "Learn the basics of Firebase platform",
      type: "video",
      duration: 16
    },
    {
      id: 691,
      title: "Firebase Quiz",
      description: "Test your knowledge of Firebase with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 692,
      title: "Building Web Applications with React Native",
      description:
        "Learn how to build mobile applications with React Native framework",
      type: "video",
      duration: 24
    },
    {
      id: 693,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 12
    },
    {
      id: 694,
      title: "Introduction to AWS Lambda",
      description: "Learn the basics of AWS Lambda compute service",
      type: "video",
      duration: 18
    },
    {
      id: 695,
      title: "AWS Lambda Quiz",
      description: "Test your knowledge of AWS Lambda with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 696,
      title: "Building Web Applications with AWS Amplify",
      description:
        "Learn how to build web applications with AWS Amplify framework",
      type: "video",
      duration: 22
    },
    {
      id: 697,
      title: "AWS Amplify Quiz",
      description: "Test your knowledge of AWS Amplify with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 698,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL query language",
      type: "video",
      duration: 16
    },
    {
      id: 699,
      title: "GraphQL Quiz",
      description: "Test your knowledge of GraphQL with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 700,
      title: "JavaScript Coding Challenge",
      description: "Solve this JavaScript coding challenge",
      type: "codingchallenge",
      duration: 30
    },
    {
      id: 701,
      title: "React Coding Challenge",
      description: "Solve this React coding challenge",
      type: "codingchallenge",
      duration: 45
    },
    {
      id: 702,
      title: "Vue.js Coding Challenge",
      description: "Solve this Vue.js coding challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 703,
      title: "Node.js Coding Challenge",
      description: "Solve this Node.js coding challenge",
      type: "codingchallenge",
      duration: 35
    },
    {
      id: 704,
      title: "AWS Lambda Coding Challenge",
      description: "Solve this AWS Lambda coding challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 705,
      title: "GraphQL Coding Challenge",
      description: "Solve this GraphQL coding challenge",
      type: "codingchallenge",
      duration: 40
    },
    {
      id: 706,
      title: "React Native Coding Challenge",
      description: "Solve this React Native coding challenge",
      type: "codingchallenge",
      duration: 60
    },
    {
      id: 707,
      title: "Express.js Coding Challenge",
      description: "Solve this Express.js coding challenge",
      type: "codingchallenge",
      duration: 45
    },
    {
      id: 708,
      title: "MongoDB Coding Challenge",
      description: "Solve this MongoDB coding challenge",
      type: "codingchallenge",
      duration: 55
    },
    {
      id: 709,
      title: "JavaScript Algorithm Challenge",
      description: "Solve this JavaScript algorithm challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 710,
      title: "Data Structures Challenge",
      description: "Solve this data structures challenge",
      type: "codingchallenge",
      duration: 60
    },
    {
      id: 711,
      title: "React Native App Challenge",
      description: "Build a React Native app with the given requirements",
      type: "codingchallenge",
      duration: 90
    },
    {
      id: 712,
      title: "Vue.js App Challenge",
      description: "Build a Vue.js app with the given requirements",
      type: "codingchallenge",
      duration: 80
    },
    {
      id: 713,
      title: "Node.js App Challenge",
      description: "Build a Node.js app with the given requirements",
      type: "codingchallenge",
      duration: 85
    },
    {
      id: 714,
      title: "React App Challenge",
      description: "Build a React app with the given requirements",
      type: "codingchallenge",
      duration: 75
    },
    {
      id: 715,
      title: "JavaScript Game Challenge",
      description: "Build a JavaScript game with the given requirements",
      type: "codingchallenge",
      duration: 90
    },
    {
      id: 716,
      title: "Introduction to Vue.js",
      description: "Get started with Vue.js and learn its basics.",
      type: "video",
      duration: 20
    },
    {
      id: 717,
      title: "Advanced Vue.js",
      description: "Learn advanced Vue.js concepts and best practices.",
      type: "video",
      duration: 30
    },
    {
      id: 718,
      title: "Building Real-time Applications with Socket.io",
      description: "Learn how to build real-time applications with Socket.io",
      type: "video",
      duration: 25
    },
    {
      id: 719,
      title: "Getting Started with Redux",
      description:
        "Learn the basics of Redux and how to integrate it with your React application.",
      type: "video",
      duration: 30
    },
    {
      id: 720,
      title: "React Native Navigation",
      description: "Learn how to implement navigation in React Native.",
      type: "video",
      duration: 20
    },
    {
      id: 721,
      title: "Introduction to React Native",
      description:
        "Learn the basics of React Native and how to get started with it.",
      type: "video",
      duration: 25
    },
    {
      id: 722,
      title: "Web Security Fundamentals",
      description:
        "Learn the basics of web security and how to secure your web applications.",
      type: "video",
      duration: 35
    },
    {
      id: 723,
      title: "Asynchronous JavaScript",
      description:
        "Learn how to write asynchronous code in JavaScript using callbacks, promises and async/await.",
      type: "video",
      duration: 30
    },
    {
      id: 724,
      title: "Introduction to Machine Learning",
      description: "Learn the basics of machine learning and how it works.",
      type: "video",
      duration: 40
    },
    {
      id: 725,
      title: "Deep Learning Fundamentals",
      description: "Learn the basics of deep learning and neural networks.",
      type: "video",
      duration: 45
    },
    {
      id: 726,
      title: "Introduction to Natural Language Processing",
      description:
        "Learn the basics of natural language processing and how it works.",
      type: "video",
      duration: 35
    },
    {
      id: 727,
      title: "React Context API",
      description:
        "Learn how to use the React Context API to manage state in your React application.",
      type: "video",
      duration: 20
    },
    {
      id: 728,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL and how it works.",
      type: "video",
      duration: 25
    },
    {
      id: 729,
      title: "Building RESTful APIs with Node.js",
      description: "Learn how to build RESTful APIs with Node.js.",
      type: "video",
      duration: 30
    },
    {
      id: 730,
      title: "Building Real-time Applications with Pusher",
      description: "Learn how to build real-time applications with Pusher.",
      type: "video",
      duration: 25
    },
    {
      id: 731,
      title: "React Hooks MCQ Challenge",
      description: "Test your understanding of React Hooks concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 732,
      title: "Node.js MCQ Challenge",
      description:
        "See if you have understood the Node.js concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 733,
      title: "Python Fundamentals MCQ Challenge",
      description: "Test your understanding of Python Fundamentals concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 734,
      title: "Data Structures and Algorithms MCQ Challenge",
      description:
        "Test your understanding of Data Structures and Algorithms concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 735,
      title: "React Native MCQ Challenge",
      description: "Test your understanding of React Native concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 736,
      title: "JavaScript Fundamentals MCQ Challenge",
      description: "Test your understanding of JavaScript Fundamentals concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 737,
      title: "MongoDB MCQ Challenge",
      description: "Test your understanding of MongoDB concepts.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 738,
      title: "Docker Fundamentals MCQ Challenge",
      description: "Test your understanding of Docker Fundamentals concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 739,
      title: "Python MCQ Challenge",
      description:
        "See if you have understood the Python concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 740,
      title: "React Query MCQ Challenge",
      description: "Test your understanding of React Query concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 741,
      title: "Vue.js MCQ Challenge",
      description: "Test your understanding of Vue.js concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 742,
      title: "Redux MCQ Challenge",
      description: "Test your understanding of Redux concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 743,
      title: "Web Security MCQ Challenge",
      description: "Test your understanding of web security concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 744,
      title: "Asynchronous JavaScript MCQ Challenge",
      description: "Test your understanding of asynchronous JavaScript concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 745,
      title: "Machine Learning MCQ Challenge",
      description: "Test your understanding of Machine Learning concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 746,
      title: "React Native Navigation",
      description: "Learn how to implement navigation in React Native",
      type: "video",
      duration: 12
    },
    {
      id: 747,
      title: "React Native Maps",
      description: "Learn how to use maps in React Native",
      type: "video",
      duration: 15
    },
    {
      id: 748,
      title: "React Native Camera",
      description: "Learn how to use the camera in React Native",
      type: "video",
      duration: 10
    },
    {
      id: 749,
      title: "React Native Animation",
      description: "Learn how to create animations in React Native",
      type: "video",
      duration: 18
    },
    {
      id: 750,
      title: "React Native Gesture Handler",
      description: "Learn how to use gesture handler in React Native",
      type: "video",
      duration: 8
    },
    {
      id: 751,
      title: "React Native Components",
      description: "Learn about React Native Components",
      type: "video",
      duration: 12
    },
    {
      id: 752,
      title: "React Native Redux",
      description: "Learn how to use Redux in React Native",
      type: "video",
      duration: 14
    },
    {
      id: 753,
      title: "React Native with Firebase",
      description: "Learn how to use Firebase with React Native",
      type: "video",
      duration: 13
    },
    {
      id: 754,
      title: "React Native with GraphQL",
      description: "Learn how to use GraphQL with React Native",
      type: "video",
      duration: 16
    },
    {
      id: 755,
      title: "React Native with AWS",
      description: "Learn how to use AWS with React Native",
      type: "video",
      duration: 17
    },
    {
      id: 756,
      title: "React Native with Azure",
      description: "Learn how to use Azure with React Native",
      type: "video",
      duration: 19
    },
    {
      id: 757,
      title: "React Native with Google Cloud",
      description: "Learn how to use Google Cloud with React Native",
      type: "video",
      duration: 20
    },
    {
      id: 758,
      title: "React Native with Microsoft Cognitive Services",
      description:
        "Learn how to use Microsoft Cognitive Services with React Native",
      type: "video",
      duration: 22
    },
    {
      id: 759,
      title: "React Native with IBM Watson",
      description: "Learn how to use IBM Watson with React Native",
      type: "video",
      duration: 23
    },
    {
      id: 760,
      title: "React Native with OpenAI GPT-3",
      description: "Learn how to use OpenAI GPT-3 with React Native",
      type: "video",
      duration: 25
    },
    {
      id: 761,
      title: "React Query",
      description: "Learn how to use React Query",
      type: "video",
      duration: 10
    },
    {
      id: 762,
      title: "MCQ Challenge for React Query",
      description: "See if you understood the concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 763,
      title: "Coding Challenge with React Query",
      description: "Apply the React Query Concept here",
      type: "codingchallenge",
      duration: 20
    },
    {
      id: 764,
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript programming language",
      type: "video",
      duration: 12
    },
    {
      id: 765,
      title: "JavaScript Quiz",
      description: "Test your knowledge of JavaScript with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 766,
      title: "Creating APIs with Node.js",
      description: "Learn how to create APIs with Node.js and Express",
      type: "video",
      duration: 15
    },
    {
      id: 767,
      title: "Node.js Quiz",
      description: "Test your knowledge of Node.js with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 768,
      title: "Building Web Applications with React",
      description: "Learn how to build web applications with React.js",
      type: "video",
      duration: 18
    },
    {
      id: 769,
      title: "React Quiz",
      description: "Test your knowledge of React with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 770,
      title: "React Native Basics",
      description:
        "Learn the basics of React Native framework for mobile app development",
      type: "video",
      duration: 16
    },
    {
      id: 771,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 772,
      title: "Building RESTful APIs with Django",
      description: "Learn how to build RESTful APIs with Django framework",
      type: "video",
      duration: 14
    },
    {
      id: 773,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 774,
      title: "Python Basics",
      description: "Learn the basics of Python programming language",
      type: "video",
      duration: 12
    },
    {
      id: 775,
      title: "Python Quiz",
      description: "Test your knowledge of Python with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 776,
      title: "Introduction to Machine Learning",
      description: "Learn the basics of Machine Learning",
      type: "video",
      duration: 20
    },
    {
      id: 777,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 16
    },
    {
      id: 778,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 779,
      title: "Introduction to Data Structures and Algorithms",
      description: "Learn the basics of Data Structures and Algorithms",
      type: "video",
      duration: 22
    },
    {
      id: 780,
      title: "Data Structures and Algorithms Quiz",
      description:
        "Test your knowledge of Data Structures and Algorithms with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 781,
      title: "Building Mobile Apps with Ionic Framework",
      description: "Learn how to build mobile apps with Ionic Framework",
      type: "video",
      duration: 14
    },
    {
      id: 782,
      title: "Ionic Framework Quiz",
      description: "Test your knowledge of Ionic Framework with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 783,
      title: "Introduction to HTML and CSS",
      description: "Learn the basics of HTML and CSS",
      type: "video",
      duration: 12
    },
    {
      id: 784,
      title: "HTML and CSS Quiz",
      description: "Test your knowledge of HTML and CSS with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 785,
      title: "Introduction to MongoDB",
      description: "Learn the basics of MongoDB database",
      type: "video",
      duration: 10
    },
    {
      id: 786,
      title: "MongoDB Quiz",
      description: "Test your knowledge of MongoDB with this quiz",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 787,
      title: "Introduction to Firebase",
      description: "Learn the basics of Firebase",
      type: "video",
      duration: 12
    },
    {
      id: 788,
      title: "Firebase Quiz",
      description: "Test your knowledge of Firebase with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 789,
      title: "Introduction to Redux",
      description: "Learn the basics of Redux for state management",
      type: "video",
      duration: 14
    },
    {
      id: 790,
      title: "Redux Quiz",
      description: "Test your knowledge of Redux with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 791,
      title: "Introduction to AWS",
      description: "Learn the basics of AWS cloud services",
      type: "video",
      duration: 18
    },
    {
      id: 792,
      title: "AWS Quiz",
      description: "Test your knowledge of AWS with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 793,
      title: "Introduction to Docker",
      description: "Learn the basics of Docker containerization",
      type: "video",
      duration: 10
    },
    {
      id: 794,
      title: "Docker Quiz",
      description: "Test your knowledge of Docker with this quiz",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 795,
      title: "Building APIs with Node.js",
      description: "Learn how to build APIs with Node.js",
      type: "video",
      duration: 20
    },
    {
      id: 796,
      title: "Node.js Quiz",
      description: "Test your knowledge of Node.js with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 797,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 16
    },
    {
      id: 798,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 799,
      title: "Building Mobile Apps with React Native",
      description: "Learn how to build mobile apps with React Native framework",
      type: "video",
      duration: 14
    },
    {
      id: 800,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 801,
      title: "Introduction to Kotlin",
      description: "Learn the basics of Kotlin programming language",
      type: "video",
      duration: 12
    },
    {
      id: 802,
      title: "Kotlin Quiz",
      description: "Test your knowledge of Kotlin with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 803,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 18
    },
    {
      id: 804,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 805,
      title: "Introduction to Swift",
      description: "Learn the basics of Swift programming language",
      type: "video",
      duration: 14
    },
    {
      id: 806,
      title: "Swift Quiz",
      description: "Test your knowledge of Swift with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 807,
      title: "Building Web Applications with Flask",
      description: "Learn how to build web applications with Flask framework",
      type: "video",
      duration: 16
    },
    {
      id: 808,
      title: "Flask Quiz",
      description: "Test your knowledge of Flask with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 809,
      title: "Introduction to PostgreSQL",
      description: "Learn the basics of PostgreSQL database",
      type: "video",
      duration: 12
    },
    {
      id: 810,
      title: "PostgreSQL Quiz",
      description: "Test your knowledge of PostgreSQL with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 811,
      title: "Building Web Applications with ASP.NET Core",
      description:
        "Learn how to build web applications with ASP.NET Core framework",
      type: "video",
      duration: 18
    },
    {
      id: 812,
      title: "ASP.NET Core Quiz",
      description: "Test your knowledge of ASP.NET Core with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 813,
      title: "Introduction to Go",
      description: "Learn the basics of Go programming language",
      type: "video",
      duration: 12
    },
    {
      id: 814,
      title: "Go Quiz",
      description: "Test your knowledge of Go with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 815,
      title: "Building Web Applications with Express.js",
      description:
        "Learn how to build web applications with Express.js framework",
      type: "video",
      duration: 16
    },
    {
      id: 816,
      title: "Express.js Quiz",
      description: "Test your knowledge of Express.js with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 817,
      title: "Introduction to Rust",
      description: "Learn the basics of Rust programming language",
      type: "video",
      duration: 14
    },
    {
      id: 818,
      title: "Rust Quiz",
      description: "Test your knowledge of Rust with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 819,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 18
    },
    {
      id: 820,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 821,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 12
    },
    {
      id: 822,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 823,
      title: "Building Web Applications with Flask and SQLAlchemy",
      description:
        "Learn how to build web applications with Flask framework and SQLAlchemy ORM",
      type: "video",
      duration: 20
    },
    {
      id: 824,
      title: "Flask and SQLAlchemy Quiz",
      description: "Test your knowledge of Flask and SQLAlchemy with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 825,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL API technology",
      type: "video",
      duration: 14
    },
    {
      id: 826,
      title: "GraphQL Quiz",
      description: "Test your knowledge of GraphQL with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 827,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 22
    },
    {
      id: 828,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 829,
      title: "React Native Basics",
      description:
        "Learn the basics of React Native framework for mobile app development",
      type: "video",
      duration: 16
    },
    {
      id: 830,
      title: "React Native Coding Challenge",
      description: "Apply your React Native knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 831,
      title: "Introduction to Kotlin",
      description: "Learn the basics of Kotlin programming language",
      type: "video",
      duration: 14
    },
    {
      id: 832,
      title: "Kotlin Quiz",
      description: "Test your knowledge of Kotlin with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 833,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 20
    },
    {
      id: 834,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 835,
      title: "Introduction to Swift",
      description: "Learn the basics of Swift programming language",
      type: "video",
      duration: 12
    },
    {
      id: 836,
      title: "Swift Quiz",
      description: "Test your knowledge of Swift with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 837,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 22
    },
    {
      id: 838,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 839,
      title: "Introduction to C#",
      description: "Learn the basics of C# programming language",
      type: "video",
      duration: 14
    },
    {
      id: 840,
      title: "C# Quiz",
      description: "Test your knowledge of C# with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 841,
      title: "Building Web Applications with Laravel",
      description: "Learn how to build web applications with Laravel framework",
      type: "video",
      duration: 20
    },
    {
      id: 842,
      title: "Laravel Quiz",
      description: "Test your knowledge of Laravel with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 843,
      title: "React Redux Basics",
      description: "Learn the basics of React Redux library for state management",
      type: "video",
      duration: 16
    },
    {
      id: 844,
      title: "React Redux Coding Challenge",
      description: "Apply your React Redux knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 845,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 14
    },
    {
      id: 846,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 847,
      title: "Building Web Applications with Flask",
      description: "Learn how to build web applications with Flask framework",
      type: "video",
      duration: 20
    },
    {
      id: 848,
      title: "Flask Quiz",
      description: "Test your knowledge of Flask with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 849,
      title: "Introduction to Java",
      description: "Learn the basics of Java programming language",
      type: "video",
      duration: 14
    },
    {
      id: 850,
      title: "Java Quiz",
      description: "Test your knowledge of Java with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 851,
      title: "Building Web Applications with Express",
      description: "Learn how to build web applications with Express framework",
      type: "video",
      duration: 22
    },
    {
      id: 852,
      title: "Express Quiz",
      description: "Test your knowledge of Express with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 853,
      title: "Introduction to Python",
      description: "Learn the basics of Python programming language",
      type: "video",
      duration: 14
    },
    {
      id: 854,
      title: "Python Quiz",
      description: "Test your knowledge of Python with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 855,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 22
    },
    {
      id: 856,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 857,
      title: "Introduction to PHP",
      description: "Learn the basics of PHP programming language",
      type: "video",
      duration: 14
    },
    {
      id: 858,
      title: "PHP Quiz",
      description: "Test your knowledge of PHP with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 859,
      title: "Introduction to MongoDB",
      description: "Learn the basics of MongoDB database",
      type: "video",
      duration: 16
    },
    {
      id: 860,
      title: "MongoDB Coding Challenge",
      description: "Apply your MongoDB knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 861,
      title: "Introduction to Ruby",
      description: "Learn the basics of Ruby programming language",
      type: "video",
      duration: 14
    },
    {
      id: 862,
      title: "Ruby Quiz",
      description: "Test your knowledge of Ruby with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 863,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 20
    },
    {
      id: 864,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 865,
      title: "Introduction to AngularJS",
      description: "Learn the basics of AngularJS framework",
      type: "video",
      duration: 18
    },
    {
      id: 866,
      title: "AngularJS Quiz",
      description: "Test your knowledge of AngularJS with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 867,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 22
    },
    {
      id: 868,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 869,
      title: "Introduction to SQL",
      description: "Learn the basics of SQL database programming language",
      type: "video",
      duration: 14
    },
    {
      id: 870,
      title: "SQL Quiz",
      description: "Test your knowledge of SQL with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 871,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 20
    },
    {
      id: 872,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 873,
      title: "Introduction to Node.js",
      description: "Learn the basics of Node.js runtime environment",
      type: "video",
      duration: 16
    },
    {
      id: 874,
      title: "Building Web Applications with Express.js",
      description:
        "Learn how to build web applications with Express.js framework",
      type: "video",
      duration: 20
    },
    {
      id: 875,
      title: "Express.js Quiz",
      description: "Test your knowledge of Express.js with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 876,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 18
    },
    {
      id: 877,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 878,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 22
    },
    {
      id: 879,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 880,
      title: "Introduction to Firebase",
      description: "Learn the basics of Firebase platform",
      type: "video",
      duration: 16
    },
    {
      id: 881,
      title: "Firebase Quiz",
      description: "Test your knowledge of Firebase with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 882,
      title: "Building Web Applications with React Native",
      description:
        "Learn how to build mobile applications with React Native framework",
      type: "video",
      duration: 24
    },
    {
      id: 883,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 12
    },
    {
      id: 884,
      title: "Introduction to AWS Lambda",
      description: "Learn the basics of AWS Lambda compute service",
      type: "video",
      duration: 18
    },
    {
      id: 885,
      title: "AWS Lambda Quiz",
      description: "Test your knowledge of AWS Lambda with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 886,
      title: "Building Web Applications with AWS Amplify",
      description:
        "Learn how to build web applications with AWS Amplify framework",
      type: "video",
      duration: 22
    },
    {
      id: 887,
      title: "AWS Amplify Quiz",
      description: "Test your knowledge of AWS Amplify with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 888,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL query language",
      type: "video",
      duration: 16
    },
    {
      id: 889,
      title: "GraphQL Quiz",
      description: "Test your knowledge of GraphQL with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 890,
      title: "JavaScript Coding Challenge",
      description: "Solve this JavaScript coding challenge",
      type: "codingchallenge",
      duration: 30
    },
    {
      id: 891,
      title: "React Coding Challenge",
      description: "Solve this React coding challenge",
      type: "codingchallenge",
      duration: 45
    },
    {
      id: 892,
      title: "Vue.js Coding Challenge",
      description: "Solve this Vue.js coding challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 893,
      title: "Node.js Coding Challenge",
      description: "Solve this Node.js coding challenge",
      type: "codingchallenge",
      duration: 35
    },
    {
      id: 894,
      title: "AWS Lambda Coding Challenge",
      description: "Solve this AWS Lambda coding challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 895,
      title: "GraphQL Coding Challenge",
      description: "Solve this GraphQL coding challenge",
      type: "codingchallenge",
      duration: 40
    },
    {
      id: 896,
      title: "React Native Coding Challenge",
      description: "Solve this React Native coding challenge",
      type: "codingchallenge",
      duration: 60
    },
    {
      id: 897,
      title: "Express.js Coding Challenge",
      description: "Solve this Express.js coding challenge",
      type: "codingchallenge",
      duration: 45
    },
    {
      id: 898,
      title: "MongoDB Coding Challenge",
      description: "Solve this MongoDB coding challenge",
      type: "codingchallenge",
      duration: 55
    },
    {
      id: 899,
      title: "JavaScript Algorithm Challenge",
      description: "Solve this JavaScript algorithm challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 900,
      title: "Data Structures Challenge",
      description: "Solve this data structures challenge",
      type: "codingchallenge",
      duration: 60
    },
    {
      id: 901,
      title: "React Native App Challenge",
      description: "Build a React Native app with the given requirements",
      type: "codingchallenge",
      duration: 90
    },
    {
      id: 902,
      title: "Vue.js App Challenge",
      description: "Build a Vue.js app with the given requirements",
      type: "codingchallenge",
      duration: 80
    },
    {
      id: 903,
      title: "Node.js App Challenge",
      description: "Build a Node.js app with the given requirements",
      type: "codingchallenge",
      duration: 85
    },
    {
      id: 904,
      title: "React App Challenge",
      description: "Build a React app with the given requirements",
      type: "codingchallenge",
      duration: 75
    },
    {
      id: 905,
      title: "JavaScript Game Challenge",
      description: "Build a JavaScript game with the given requirements",
      type: "codingchallenge",
      duration: 90
    },
    {
      id: 906,
      title: "Introduction to Vue.js",
      description: "Get started with Vue.js and learn its basics.",
      type: "video",
      duration: 20
    },
    {
      id: 907,
      title: "Advanced Vue.js",
      description: "Learn advanced Vue.js concepts and best practices.",
      type: "video",
      duration: 30
    },
    {
      id: 908,
      title: "Building Real-time Applications with Socket.io",
      description: "Learn how to build real-time applications with Socket.io",
      type: "video",
      duration: 25
    },
    {
      id: 909,
      title: "Getting Started with Redux",
      description:
        "Learn the basics of Redux and how to integrate it with your React application.",
      type: "video",
      duration: 30
    },
    {
      id: 910,
      title: "React Native Navigation",
      description: "Learn how to implement navigation in React Native.",
      type: "video",
      duration: 20
    },
    {
      id: 911,
      title: "Introduction to React Native",
      description:
        "Learn the basics of React Native and how to get started with it.",
      type: "video",
      duration: 25
    },
    {
      id: 912,
      title: "Web Security Fundamentals",
      description:
        "Learn the basics of web security and how to secure your web applications.",
      type: "video",
      duration: 35
    },
    {
      id: 913,
      title: "Asynchronous JavaScript",
      description:
        "Learn how to write asynchronous code in JavaScript using callbacks, promises and async/await.",
      type: "video",
      duration: 30
    },
    {
      id: 914,
      title: "Introduction to Machine Learning",
      description: "Learn the basics of machine learning and how it works.",
      type: "video",
      duration: 40
    },
    {
      id: 915,
      title: "Deep Learning Fundamentals",
      description: "Learn the basics of deep learning and neural networks.",
      type: "video",
      duration: 45
    },
    {
      id: 916,
      title: "Introduction to Natural Language Processing",
      description:
        "Learn the basics of natural language processing and how it works.",
      type: "video",
      duration: 35
    },
    {
      id: 917,
      title: "React Context API",
      description:
        "Learn how to use the React Context API to manage state in your React application.",
      type: "video",
      duration: 20
    },
    {
      id: 918,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL and how it works.",
      type: "video",
      duration: 25
    },
    {
      id: 919,
      title: "Building RESTful APIs with Node.js",
      description: "Learn how to build RESTful APIs with Node.js.",
      type: "video",
      duration: 30
    },
    {
      id: 920,
      title: "Building Real-time Applications with Pusher",
      description: "Learn how to build real-time applications with Pusher.",
      type: "video",
      duration: 25
    },
    {
      id: 921,
      title: "React Hooks MCQ Challenge",
      description: "Test your understanding of React Hooks concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 922,
      title: "Node.js MCQ Challenge",
      description:
        "See if you have understood the Node.js concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 923,
      title: "Python Fundamentals MCQ Challenge",
      description: "Test your understanding of Python Fundamentals concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 924,
      title: "Data Structures and Algorithms MCQ Challenge",
      description:
        "Test your understanding of Data Structures and Algorithms concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 925,
      title: "React Native MCQ Challenge",
      description: "Test your understanding of React Native concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 926,
      title: "JavaScript Fundamentals MCQ Challenge",
      description: "Test your understanding of JavaScript Fundamentals concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 927,
      title: "MongoDB MCQ Challenge",
      description: "Test your understanding of MongoDB concepts.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 928,
      title: "Docker Fundamentals MCQ Challenge",
      description: "Test your understanding of Docker Fundamentals concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 929,
      title: "Python MCQ Challenge",
      description:
        "See if you have understood the Python concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 930,
      title: "React Query MCQ Challenge",
      description: "Test your understanding of React Query concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 931,
      title: "Vue.js MCQ Challenge",
      description: "Test your understanding of Vue.js concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 932,
      title: "Redux MCQ Challenge",
      description: "Test your understanding of Redux concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 933,
      title: "Web Security MCQ Challenge",
      description: "Test your understanding of web security concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 934,
      title: "Asynchronous JavaScript MCQ Challenge",
      description: "Test your understanding of asynchronous JavaScript concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 935,
      title: "Machine Learning MCQ Challenge",
      description: "Test your understanding of Machine Learning concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 936,
      title: "React Native Navigation",
      description: "Learn how to implement navigation in React Native",
      type: "video",
      duration: 12
    },
    {
      id: 937,
      title: "React Native Maps",
      description: "Learn how to use maps in React Native",
      type: "video",
      duration: 15
    },
    {
      id: 938,
      title: "React Native Camera",
      description: "Learn how to use the camera in React Native",
      type: "video",
      duration: 10
    },
    {
      id: 939,
      title: "React Native Animation",
      description: "Learn how to create animations in React Native",
      type: "video",
      duration: 18
    },
    {
      id: 940,
      title: "React Native Gesture Handler",
      description: "Learn how to use gesture handler in React Native",
      type: "video",
      duration: 8
    },
    {
      id: 941,
      title: "React Native Components",
      description: "Learn about React Native Components",
      type: "video",
      duration: 12
    },
    {
      id: 942,
      title: "React Native Redux",
      description: "Learn how to use Redux in React Native",
      type: "video",
      duration: 14
    },
    {
      id: 943,
      title: "React Native with Firebase",
      description: "Learn how to use Firebase with React Native",
      type: "video",
      duration: 13
    },
    {
      id: 944,
      title: "React Native with GraphQL",
      description: "Learn how to use GraphQL with React Native",
      type: "video",
      duration: 16
    },
    {
      id: 945,
      title: "React Native with AWS",
      description: "Learn how to use AWS with React Native",
      type: "video",
      duration: 17
    },
    {
      id: 946,
      title: "React Native with Azure",
      description: "Learn how to use Azure with React Native",
      type: "video",
      duration: 19
    },
    {
      id: 947,
      title: "React Native with Google Cloud",
      description: "Learn how to use Google Cloud with React Native",
      type: "video",
      duration: 20
    },
    {
      id: 948,
      title: "React Native with Microsoft Cognitive Services",
      description:
        "Learn how to use Microsoft Cognitive Services with React Native",
      type: "video",
      duration: 22
    },
    {
      id: 949,
      title: "React Native with IBM Watson",
      description: "Learn how to use IBM Watson with React Native",
      type: "video",
      duration: 23
    },
    {
      id: 950,
      title: "React Native with OpenAI GPT-3",
      description: "Learn how to use OpenAI GPT-3 with React Native",
      type: "video",
      duration: 25
    },
    {
      id: 951,
      title: "React Query",
      description: "Learn how to use React Query",
      type: "video",
      duration: 10
    },
    {
      id: 952,
      title: "MCQ Challenge for React Query",
      description: "See if you understood the concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 953,
      title: "Coding Challenge with React Query",
      description: "Apply the React Query Concept here",
      type: "codingchallenge",
      duration: 20
    },
    {
      id: 954,
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript programming language",
      type: "video",
      duration: 12
    },
    {
      id: 955,
      title: "JavaScript Quiz",
      description: "Test your knowledge of JavaScript with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 956,
      title: "Creating APIs with Node.js",
      description: "Learn how to create APIs with Node.js and Express",
      type: "video",
      duration: 15
    },
    {
      id: 957,
      title: "Node.js Quiz",
      description: "Test your knowledge of Node.js with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 958,
      title: "Building Web Applications with React",
      description: "Learn how to build web applications with React.js",
      type: "video",
      duration: 18
    },
    {
      id: 959,
      title: "React Quiz",
      description: "Test your knowledge of React with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 960,
      title: "React Native Basics",
      description:
        "Learn the basics of React Native framework for mobile app development",
      type: "video",
      duration: 16
    },
    {
      id: 961,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 962,
      title: "Building RESTful APIs with Django",
      description: "Learn how to build RESTful APIs with Django framework",
      type: "video",
      duration: 14
    },
    {
      id: 963,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 964,
      title: "Python Basics",
      description: "Learn the basics of Python programming language",
      type: "video",
      duration: 12
    },
    {
      id: 965,
      title: "Python Quiz",
      description: "Test your knowledge of Python with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 966,
      title: "Introduction to Machine Learning",
      description: "Learn the basics of Machine Learning",
      type: "video",
      duration: 20
    },
    {
      id: 967,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 16
    },
    {
      id: 968,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 969,
      title: "Introduction to Data Structures and Algorithms",
      description: "Learn the basics of Data Structures and Algorithms",
      type: "video",
      duration: 22
    },
    {
      id: 970,
      title: "Data Structures and Algorithms Quiz",
      description:
        "Test your knowledge of Data Structures and Algorithms with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 971,
      title: "Building Mobile Apps with Ionic Framework",
      description: "Learn how to build mobile apps with Ionic Framework",
      type: "video",
      duration: 14
    },
    {
      id: 972,
      title: "Ionic Framework Quiz",
      description: "Test your knowledge of Ionic Framework with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 973,
      title: "Introduction to HTML and CSS",
      description: "Learn the basics of HTML and CSS",
      type: "video",
      duration: 12
    },
    {
      id: 974,
      title: "HTML and CSS Quiz",
      description: "Test your knowledge of HTML and CSS with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 975,
      title: "Introduction to MongoDB",
      description: "Learn the basics of MongoDB database",
      type: "video",
      duration: 10
    },
    {
      id: 976,
      title: "MongoDB Quiz",
      description: "Test your knowledge of MongoDB with this quiz",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 977,
      title: "Introduction to Firebase",
      description: "Learn the basics of Firebase",
      type: "video",
      duration: 12
    },
    {
      id: 978,
      title: "Firebase Quiz",
      description: "Test your knowledge of Firebase with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 979,
      title: "Introduction to Redux",
      description: "Learn the basics of Redux for state management",
      type: "video",
      duration: 14
    },
    {
      id: 980,
      title: "Redux Quiz",
      description: "Test your knowledge of Redux with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 981,
      title: "Introduction to AWS",
      description: "Learn the basics of AWS cloud services",
      type: "video",
      duration: 18
    },
    {
      id: 982,
      title: "AWS Quiz",
      description: "Test your knowledge of AWS with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 983,
      title: "Introduction to Docker",
      description: "Learn the basics of Docker containerization",
      type: "video",
      duration: 10
    },
    {
      id: 984,
      title: "Docker Quiz",
      description: "Test your knowledge of Docker with this quiz",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 985,
      title: "Building APIs with Node.js",
      description: "Learn how to build APIs with Node.js",
      type: "video",
      duration: 20
    },
    {
      id: 986,
      title: "Node.js Quiz",
      description: "Test your knowledge of Node.js with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 987,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 16
    },
    {
      id: 988,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 989,
      title: "Building Mobile Apps with React Native",
      description: "Learn how to build mobile apps with React Native framework",
      type: "video",
      duration: 14
    },
    {
      id: 990,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 991,
      title: "Introduction to Kotlin",
      description: "Learn the basics of Kotlin programming language",
      type: "video",
      duration: 12
    },
    {
      id: 992,
      title: "Kotlin Quiz",
      description: "Test your knowledge of Kotlin with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 993,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 18
    },
    {
      id: 994,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 995,
      title: "Introduction to Swift",
      description: "Learn the basics of Swift programming language",
      type: "video",
      duration: 14
    },
    {
      id: 996,
      title: "Swift Quiz",
      description: "Test your knowledge of Swift with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 997,
      title: "Building Web Applications with Flask",
      description: "Learn how to build web applications with Flask framework",
      type: "video",
      duration: 16
    },
    {
      id: 998,
      title: "Flask Quiz",
      description: "Test your knowledge of Flask with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 999,
      title: "Introduction to PostgreSQL",
      description: "Learn the basics of PostgreSQL database",
      type: "video",
      duration: 12
    },
    {
      id: 1000,
      title: "PostgreSQL Quiz",
      description: "Test your knowledge of PostgreSQL with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 1001,
      title: "Building Web Applications with ASP.NET Core",
      description:
        "Learn how to build web applications with ASP.NET Core framework",
      type: "video",
      duration: 18
    },
    {
      id: 1002,
      title: "ASP.NET Core Quiz",
      description: "Test your knowledge of ASP.NET Core with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 1003,
      title: "Introduction to Go",
      description: "Learn the basics of Go programming language",
      type: "video",
      duration: 12
    },
    {
      id: 1004,
      title: "Go Quiz",
      description: "Test your knowledge of Go with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 1005,
      title: "Building Web Applications with Express.js",
      description:
        "Learn how to build web applications with Express.js framework",
      type: "video",
      duration: 16
    },
    {
      id: 1006,
      title: "Express.js Quiz",
      description: "Test your knowledge of Express.js with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 1007,
      title: "Introduction to Rust",
      description: "Learn the basics of Rust programming language",
      type: "video",
      duration: 14
    },
    {
      id: 1008,
      title: "Rust Quiz",
      description: "Test your knowledge of Rust with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 1009,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 18
    },
    {
      id: 1010,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 1011,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 12
    },
    {
      id: 1012,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 1013,
      title: "Building Web Applications with Flask and SQLAlchemy",
      description:
        "Learn how to build web applications with Flask framework and SQLAlchemy ORM",
      type: "video",
      duration: 20
    },
    {
      id: 1014,
      title: "Flask and SQLAlchemy Quiz",
      description: "Test your knowledge of Flask and SQLAlchemy with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1015,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL API technology",
      type: "video",
      duration: 14
    },
    {
      id: 1016,
      title: "GraphQL Quiz",
      description: "Test your knowledge of GraphQL with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 1017,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 22
    },
    {
      id: 1018,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 1019,
      title: "React Native Basics",
      description:
        "Learn the basics of React Native framework for mobile app development",
      type: "video",
      duration: 16
    },
    {
      id: 1020,
      title: "React Native Coding Challenge",
      description: "Apply your React Native knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 1021,
      title: "Introduction to Kotlin",
      description: "Learn the basics of Kotlin programming language",
      type: "video",
      duration: 14
    },
    {
      id: 1022,
      title: "Kotlin Quiz",
      description: "Test your knowledge of Kotlin with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 1023,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 20
    },
    {
      id: 1024,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1025,
      title: "Introduction to Swift",
      description: "Learn the basics of Swift programming language",
      type: "video",
      duration: 12
    },
    {
      id: 1026,
      title: "Swift Quiz",
      description: "Test your knowledge of Swift with this quiz",
      type: "coursemcq",
      duration: 6
    },
    {
      id: 1027,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 22
    },
    {
      id: 1028,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 1029,
      title: "Introduction to C#",
      description: "Learn the basics of C# programming language",
      type: "video",
      duration: 14
    },
    {
      id: 1030,
      title: "C# Quiz",
      description: "Test your knowledge of C# with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 1031,
      title: "Building Web Applications with Laravel",
      description: "Learn how to build web applications with Laravel framework",
      type: "video",
      duration: 20
    },
    {
      id: 1032,
      title: "Laravel Quiz",
      description: "Test your knowledge of Laravel with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1033,
      title: "React Redux Basics",
      description: "Learn the basics of React Redux library for state management",
      type: "video",
      duration: 16
    },
    {
      id: 1034,
      title: "React Redux Coding Challenge",
      description: "Apply your React Redux knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 1035,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 14
    },
    {
      id: 1036,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 1037,
      title: "Building Web Applications with Flask",
      description: "Learn how to build web applications with Flask framework",
      type: "video",
      duration: 20
    },
    {
      id: 1038,
      title: "Flask Quiz",
      description: "Test your knowledge of Flask with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1039,
      title: "Introduction to Java",
      description: "Learn the basics of Java programming language",
      type: "video",
      duration: 14
    },
    {
      id: 1040,
      title: "Java Quiz",
      description: "Test your knowledge of Java with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 1041,
      title: "Building Web Applications with Express",
      description: "Learn how to build web applications with Express framework",
      type: "video",
      duration: 22
    },
    {
      id: 1042,
      title: "Express Quiz",
      description: "Test your knowledge of Express with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 1043,
      title: "Introduction to Python",
      description: "Learn the basics of Python programming language",
      type: "video",
      duration: 14
    },
    {
      id: 1044,
      title: "Python Quiz",
      description: "Test your knowledge of Python with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 1045,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 22
    },
    {
      id: 1046,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 1047,
      title: "Introduction to PHP",
      description: "Learn the basics of PHP programming language",
      type: "video",
      duration: 14
    },
    {
      id: 1048,
      title: "PHP Quiz",
      description: "Test your knowledge of PHP with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1049,
      title: "Introduction to MongoDB",
      description: "Learn the basics of MongoDB database",
      type: "video",
      duration: 16
    },
    {
      id: 1050,
      title: "MongoDB Coding Challenge",
      description: "Apply your MongoDB knowledge with this coding challenge",
      type: "codingchallenge",
      duration: 25
    },
    {
      id: 1051,
      title: "Introduction to Ruby",
      description: "Learn the basics of Ruby programming language",
      type: "video",
      duration: 14
    },
    {
      id: 1052,
      title: "Ruby Quiz",
      description: "Test your knowledge of Ruby with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 1053,
      title: "Building Web Applications with Ruby on Rails",
      description:
        "Learn how to build web applications with Ruby on Rails framework",
      type: "video",
      duration: 20
    },
    {
      id: 1054,
      title: "Ruby on Rails Quiz",
      description: "Test your knowledge of Ruby on Rails with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1055,
      title: "Introduction to AngularJS",
      description: "Learn the basics of AngularJS framework",
      type: "video",
      duration: 18
    },
    {
      id: 1056,
      title: "AngularJS Quiz",
      description: "Test your knowledge of AngularJS with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 1057,
      title: "Building Web Applications with Angular",
      description: "Learn how to build web applications with Angular framework",
      type: "video",
      duration: 22
    },
    {
      id: 1058,
      title: "Angular Quiz",
      description: "Test your knowledge of Angular with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 1059,
      title: "Introduction to SQL",
      description: "Learn the basics of SQL database programming language",
      type: "video",
      duration: 14
    },
    {
      id: 1060,
      title: "SQL Quiz",
      description: "Test your knowledge of SQL with this quiz",
      type: "coursemcq",
      duration: 7
    },
    {
      id: 1061,
      title: "Building Web Applications with Django",
      description: "Learn how to build web applications with Django framework",
      type: "video",
      duration: 20
    },
    {
      id: 1062,
      title: "Django Quiz",
      description: "Test your knowledge of Django with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1063,
      title: "Introduction to Node.js",
      description: "Learn the basics of Node.js runtime environment",
      type: "video",
      duration: 16
    },
    {
      id: 1064,
      title: "Building Web Applications with Express.js",
      description:
        "Learn how to build web applications with Express.js framework",
      type: "video",
      duration: 20
    },
    {
      id: 1065,
      title: "Express.js Quiz",
      description: "Test your knowledge of Express.js with this quiz",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1066,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript programming language",
      type: "video",
      duration: 18
    },
    {
      id: 1067,
      title: "TypeScript Quiz",
      description: "Test your knowledge of TypeScript with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 1068,
      title: "Building Web Applications with Vue.js",
      description: "Learn how to build web applications with Vue.js framework",
      type: "video",
      duration: 22
    },
    {
      id: 1069,
      title: "Vue.js Quiz",
      description: "Test your knowledge of Vue.js with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 1070,
      title: "Introduction to Firebase",
      description: "Learn the basics of Firebase platform",
      type: "video",
      duration: 16
    },
    {
      id: 1071,
      title: "Firebase Quiz",
      description: "Test your knowledge of Firebase with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 1072,
      title: "Building Web Applications with React Native",
      description:
        "Learn how to build mobile applications with React Native framework",
      type: "video",
      duration: 24
    },
    {
      id: 1073,
      title: "React Native Quiz",
      description: "Test your knowledge of React Native with this quiz",
      type: "coursemcq",
      duration: 12
    },
    {
      id: 1074,
      title: "Introduction to AWS Lambda",
      description: "Learn the basics of AWS Lambda compute service",
      type: "video",
      duration: 18
    },
    {
      id: 1075,
      title: "AWS Lambda Quiz",
      description: "Test your knowledge of AWS Lambda with this quiz",
      type: "coursemcq",
      duration: 9
    },
    {
      id: 1076,
      title: "Building Web Applications with AWS Amplify",
      description:
        "Learn how to build web applications with AWS Amplify framework",
      type: "video",
      duration: 22
    },
    {
      id: 1077,
      title: "AWS Amplify Quiz",
      description: "Test your knowledge of AWS Amplify with this quiz",
      type: "coursemcq",
      duration: 11
    },
    {
      id: 1078,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL query language",
      type: "video",
      duration: 16
    },
    {
      id: 1079,
      title: "GraphQL Quiz",
      description: "Test your knowledge of GraphQL with this quiz",
      type: "coursemcq",
      duration: 8
    },
    {
      id: 1080,
      title: "JavaScript Coding Challenge",
      description: "Solve this JavaScript coding challenge",
      type: "codingchallenge",
      duration: 30
    },
    {
      id: 1081,
      title: "React Coding Challenge",
      description: "Solve this React coding challenge",
      type: "codingchallenge",
      duration: 45
    },
    {
      id: 1082,
      title: "Vue.js Coding Challenge",
      description: "Solve this Vue.js coding challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 1083,
      title: "Node.js Coding Challenge",
      description: "Solve this Node.js coding challenge",
      type: "codingchallenge",
      duration: 35
    },
    {
      id: 1084,
      title: "AWS Lambda Coding Challenge",
      description: "Solve this AWS Lambda coding challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 1085,
      title: "GraphQL Coding Challenge",
      description: "Solve this GraphQL coding challenge",
      type: "codingchallenge",
      duration: 40
    },
    {
      id: 1086,
      title: "React Native Coding Challenge",
      description: "Solve this React Native coding challenge",
      type: "codingchallenge",
      duration: 60
    },
    {
      id: 1087,
      title: "Express.js Coding Challenge",
      description: "Solve this Express.js coding challenge",
      type: "codingchallenge",
      duration: 45
    },
    {
      id: 1088,
      title: "MongoDB Coding Challenge",
      description: "Solve this MongoDB coding challenge",
      type: "codingchallenge",
      duration: 55
    },
    {
      id: 1089,
      title: "JavaScript Algorithm Challenge",
      description: "Solve this JavaScript algorithm challenge",
      type: "codingchallenge",
      duration: 50
    },
    {
      id: 1090,
      title: "Data Structures Challenge",
      description: "Solve this data structures challenge",
      type: "codingchallenge",
      duration: 60
    },
    {
      id: 1091,
      title: "React Native App Challenge",
      description: "Build a React Native app with the given requirements",
      type: "codingchallenge",
      duration: 90
    },
    {
      id: 1092,
      title: "Vue.js App Challenge",
      description: "Build a Vue.js app with the given requirements",
      type: "codingchallenge",
      duration: 80
    },
    {
      id: 1093,
      title: "Node.js App Challenge",
      description: "Build a Node.js app with the given requirements",
      type: "codingchallenge",
      duration: 85
    },
    {
      id: 1094,
      title: "React App Challenge",
      description: "Build a React app with the given requirements",
      type: "codingchallenge",
      duration: 75
    },
    {
      id: 1095,
      title: "JavaScript Game Challenge",
      description: "Build a JavaScript game with the given requirements",
      type: "codingchallenge",
      duration: 90
    },
    {
      id: 1096,
      title: "Introduction to Vue.js",
      description: "Get started with Vue.js and learn its basics.",
      type: "video",
      duration: 20
    },
    {
      id: 1097,
      title: "Advanced Vue.js",
      description: "Learn advanced Vue.js concepts and best practices.",
      type: "video",
      duration: 30
    },
    {
      id: 1098,
      title: "Building Real-time Applications with Socket.io",
      description: "Learn how to build real-time applications with Socket.io",
      type: "video",
      duration: 25
    },
    {
      id: 1099,
      title: "Getting Started with Redux",
      description:
        "Learn the basics of Redux and how to integrate it with your React application.",
      type: "video",
      duration: 30
    },
    {
      id: 1100,
      title: "React Native Navigation",
      description: "Learn how to implement navigation in React Native.",
      type: "video",
      duration: 20
    },
    {
      id: 1101,
      title: "Introduction to React Native",
      description:
        "Learn the basics of React Native and how to get started with it.",
      type: "video",
      duration: 25
    },
    {
      id: 1102,
      title: "Web Security Fundamentals",
      description:
        "Learn the basics of web security and how to secure your web applications.",
      type: "video",
      duration: 35
    },
    {
      id: 1103,
      title: "Asynchronous JavaScript",
      description:
        "Learn how to write asynchronous code in JavaScript using callbacks, promises and async/await.",
      type: "video",
      duration: 30
    },
    {
      id: 1104,
      title: "Introduction to Machine Learning",
      description: "Learn the basics of machine learning and how it works.",
      type: "video",
      duration: 40
    },
    {
      id: 1105,
      title: "Deep Learning Fundamentals",
      description: "Learn the basics of deep learning and neural networks.",
      type: "video",
      duration: 45
    },
    {
      id: 1106,
      title: "Introduction to Natural Language Processing",
      description:
        "Learn the basics of natural language processing and how it works.",
      type: "video",
      duration: 35
    },
    {
      id: 1107,
      title: "React Context API",
      description:
        "Learn how to use the React Context API to manage state in your React application.",
      type: "video",
      duration: 20
    },
    {
      id: 1108,
      title: "Introduction to GraphQL",
      description: "Learn the basics of GraphQL and how it works.",
      type: "video",
      duration: 25
    },
    {
      id: 1109,
      title: "Building RESTful APIs with Node.js",
      description: "Learn how to build RESTful APIs with Node.js.",
      type: "video",
      duration: 30
    },
    {
      id: 1110,
      title: "Building Real-time Applications with Pusher",
      description: "Learn how to build real-time applications with Pusher.",
      type: "video",
      duration: 25
    },
    {
      id: 1111,
      title: "React Hooks MCQ Challenge",
      description: "Test your understanding of React Hooks concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1112,
      title: "Node.js MCQ Challenge",
      description:
        "See if you have understood the Node.js concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 1113,
      title: "Python Fundamentals MCQ Challenge",
      description: "Test your understanding of Python Fundamentals concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1114,
      title: "Data Structures and Algorithms MCQ Challenge",
      description:
        "Test your understanding of Data Structures and Algorithms concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 1115,
      title: "React Native MCQ Challenge",
      description: "Test your understanding of React Native concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1116,
      title: "JavaScript Fundamentals MCQ Challenge",
      description: "Test your understanding of JavaScript Fundamentals concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 1117,
      title: "MongoDB MCQ Challenge",
      description: "Test your understanding of MongoDB concepts.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 1118,
      title: "Docker Fundamentals MCQ Challenge",
      description: "Test your understanding of Docker Fundamentals concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1119,
      title: "Python MCQ Challenge",
      description:
        "See if you have understood the Python concepts with this MCQ.",
      type: "coursemcq",
      duration: 5
    },
    {
      id: 1120,
      title: "React Query MCQ Challenge",
      description: "Test your understanding of React Query concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1121,
      title: "Vue.js MCQ Challenge",
      description: "Test your understanding of Vue.js concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1122,
      title: "Redux MCQ Challenge",
      description: "Test your understanding of Redux concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1123,
      title: "Web Security MCQ Challenge",
      description: "Test your understanding of web security concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 1124,
      title: "Asynchronous JavaScript MCQ Challenge",
      description: "Test your understanding of asynchronous JavaScript concepts.",
      type: "coursemcq",
      duration: 10
    },
    {
      id: 1125,
      title: "Machine Learning MCQ Challenge",
      description: "Test your understanding of Machine Learning concepts.",
      type: "coursemcq",
      duration: 15
    },
    {
      id: 1126,
      title: "React Native Navigation",
      description: "Learn how to implement navigation in React Native",
      type: "video",
      duration: 12
    },
    {
      id: 1127,
      title: "React Native Maps",
      description: "Learn how to use maps in React Native",
      type: "video",
      duration: 15
    },
    {
      id: 1128,
      title: "React Native Camera",
      description: "Learn how to use the camera in React Native",
      type: "video",
      duration: 10
    },
    {
      id: 1129,
      title: "React Native Animation",
      description: "Learn how to create animations in React Native",
      type: "video",
      duration: 18
    },
    {
      id: 1130,
      title: "React Native Gesture Handler",
      description: "Learn how to use gesture handler in React Native",
      type: "video",
      duration: 8
    },
    {
      id: 1131,
      title: "React Native Components",
      description: "Learn about React Native Components",
      type: "video",
      duration: 12
    },
    {
      id: 1132,
      title: "React Native Redux",
      description: "Learn how to use Redux in React Native",
      type: "video",
      duration: 14
    },
    {
      id: 1133,
      title: "React Native with Firebase",
      description: "Learn how to use Firebase with React Native",
      type: "video",
      duration: 13
    },
    {
      id: 1134,
      title: "React Native with GraphQL",
      description: "Learn how to use GraphQL with React Native",
      type: "video",
      duration: 16
    },
    {
      id: 1135,
      title: "React Native with AWS",
      description: "Learn how to use AWS with React Native",
      type: "video",
      duration: 17
    },
    {
      id: 1136,
      title: "React Native with Azure",
      description: "Learn how to use Azure with React Native",
      type: "video",
      duration: 19
    },
    {
      id: 1137,
      title: "React Native with Google Cloud",
      description: "Learn how to use Google Cloud with React Native",
      type: "video",
      duration: 20
    },
    {
      id: 1138,
      title: "React Native with Microsoft Cognitive Services",
      description:
        "Learn how to use Microsoft Cognitive Services with React Native",
      type: "video",
      duration: 22
    },
    {
      id: 1139,
      title: "React Native with IBM Watson",
      description: "Learn how to use IBM Watson with React Native",
      type: "video",
      duration: 23
    },
    {
      id: 1140,
      title: "React Native with OpenAI GPT-3",
      description: "Learn how to use OpenAI GPT-3 with React Native",
      type: "video",
      duration: 25
    }
  ];
  
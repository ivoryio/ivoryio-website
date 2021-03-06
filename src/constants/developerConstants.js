let DCONSTANTS = {
  DEV_TITLE: " We're still building, but here's what we're aiming at:",
  OPEN_SOURCE_TEXT:
    "Ivory is open and free for commercial use. We believe that by providing a good product which addresses the needs of product developers today with a world class architecture and advanced ready built functionalities we will be able to convince them to contribute to this project.",
  PODS_BLUE1:
    "Our vision is to ultimately offer tens of ready made pods that developers can assemble. In our marketplace pods like user management, multi-language localisation, transaction emails will be offered for free and for pay. Developers can choose how they would like to make their pods available.",
  PODS_BLUE2:
    "User Authentication Pod: Email + password, Google, Facebook, 2 factor with SMS, Web & mobile; CRUD Pod; Payment (Stripe, billing, refunds, etc.); Notifications; Chat; Transactional email (Admin based functionality & some); APIsAnalytics; Globalisation/ Translations; Analytics; Emails, etc.",
  PODS_TEXT1:
    "All pods have web & mobile UI built with React and Native React and most pods have admin interfaces.",
  PODS_TEXT2:
    "A full list of Pods will be available on the ivory.io/pods web page. Here is just a short list we envision at this point:",
  SERVERLESS_TEXT1:
    "We’ve invested, and are going to invest some more in building a cutting edge architecture which simplifies implementation of complex functionalities for developers.",
  SERVERLESS_TEXT2:
    "The backend of the application architecture is based on microservices which are integrated through an event bus.",
  SPEED_TEXT_WHITE:
    "Ivory aims at “google fast” speeds of production by default. Due to the use of DynamoDB with DAX enabled by default and Appsync (GraphQL) most requests are handled with single digit milliseconds response time.",
  SPEED_TEXT_BLUE:
    "The web application, a single page React app, is served via CloudFront to reduce network latency and makes extensive use of server-side rendering, embedding fonts, scripts and resources so that when loading it the “time to first screen” is instantaneous.",
  SECURITY_TEXT_BLUE:
    "Absolutely all data stored and manipulated by Ivory is fully encrypted in transit and at rest. AWS KMS is used for encryption, decryption and key management.",
  SECURITY_TEXT_WHITE1:
    "Through the use of the User Authentication and Authorisation Pod the Ivory developers get access to a sophisticated user registration, authentication, roles & permission system. Standard functionality such as assigning individual user permissions, groups and audit log are part of the pod and can be accessed from the Admin section.",
  SECURITY_TEXT_WHITE2:
    "Security and privacy is audited by an independent security audit firm and the standard Ivory project template is pen-tested every quarter.",
  AI_TEXT_WHITE1:
    'In order to ensure that every application built with Ivory is future roof and ML/AI ready the platform employs a sophisticated microservices based architecture with an event bus (Kinesis) and event log (Dynamo). Essentially this means that every message going through the system (eg. "Product viewed", "Product added to cart", "Order placed", "Bill issued") is saved.',
  AI_TEXT_WHITE2:
    "Since data collection is a foundational step in a big data and AI strategy the core Ivory architecture allows for data to be collected to be used at some later time to train ML models.",
  BLOCKCHAIN_TEXT_BLUE1:
    "Ivory aims to accelerate the development of a typical Blockchain MVP by a factor of 10x. Ivory has native support for Blockchain and significantly accelerates Blockchain development in 3 areas:",
  BLOCKCHAIN_TEXT_BLUE2:
    "1) Devops - setting up the necessary infrastructure to run the EVM (Ethereum Virtual Machine) and create a private Ethereum chain is as simple as adding the Blockchain Pod;",
  BLOCKCHAIN_TEXT_WHITE3:
    "2) Solidity contract development - a started kit and template of not only creating and deploying the first Solidity contracts but also on how to integrate these into the application Pods;",
  BLOCKCHAIN_TEXT_BLUE4:
    "3) Monitoring - the necessary instrumentation to monitor and manage the Blockchain infrastructure and code from the Admin section of the application.",
  DEVOPS_TEXT_BLUE:
    "With Ivory, using a single command - ivory setup, a complete and complex environment is setup for you. All you need to do to get new code in production after this point is to simply git push to the git repo that Ivory has setup on AWS CodeCommit for you. ",
  DEVOPS_TEXT_WHITE:
    "Apart from the actual cloud execution environment for your app (Lambdas, Kinesis streams, etc) Ivory also setups a complete build pipeline with all the ingredients required for continuous deployment.",
  QUALITY_TEXT:
    "On a UX level all our pods are designed to support the top 4 major browsers, 2-3 version back, and be completely responsive on the web. Because of our extensive use of a UX design system and styled components all our pods have an integrated and consistent look & feel which can be easily adopted by developers in their own pods.",
  OPEN_SOURCE_TITLE: "Open Source Community",
  PODS_TITILE: "Pods",
  SERVERLESS_TITILE: "Serverless solution",
  SPEED_TITILE: "Speed is a first class citizen",
  SECURITY_TITILE: "Security and privacy",
  MACHINE_TITILE: "Machine Learning and AI",
  BLOCKCHAIN_TITLE: "Blockchain",
  CONTINOUS_TITLE: "Continuous Delivery & Zero DevOps",
  QUALITY_TITLE: "Quality"
}
export default DCONSTANTS

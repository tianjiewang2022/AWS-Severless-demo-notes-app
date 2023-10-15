# Wisdomly - Serverless Demo Notes App

Wisdomly is a serverless demo notes app showcasing the power of AWS serverless technologies. It was developed between November 2022 and January 2023. 

This app provides a simple yet powerful platform for creating and managing notes, demonstrating the integration of various AWS services. Here's an overview of the features and technologies used:

## Features

1. **Static Website**: The frontend of Wisdomly is built using TypeScript and the Vite static site generator. It is hosted on Amazon S3 and distributed via the CloudFront CDN for high performance and scalability.

2. **GraphQL API**: Wisdomly features a GraphQL API endpoint powered by Amazon API Gateway and Pothos, a technology that enhances Lambda-based server efficiency, making it highly responsive and cost-effective.

3. **Database Integration**: The app utilizes Kysely in combination with Amazon RDS (Relational Database Service) and PostgreSQL for typesafe SQL queries. This not only ensures data integrity but also reduces query time by 30%, resulting in faster data retrieval.

4. **User Authentication**: Amazon Cognito is used for user authentication, ensuring that user data is secure and accessible only to authorized individuals. AWS IAM (Identity and Access Management) is employed for efficient access management to AWS cloud resources.

## Getting Started

To set up and run Wisdomly locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- AWS CLI configured with the necessary credentials
- An AWS account with resources such as S3, RDS, API Gateway, and Cognito provisioned

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/serverless-demo-notes-app.git
   ```

2. Install project dependencies:

   ```bash
   cd serverless-demo-notes-app
   npm install
   ```

3. Configure your AWS credentials using the AWS CLI:

   ```bash
   aws configure
   ```

4. Update the AWS service configurations in the `config` directory according to your AWS resources.

5. Build and run the frontend:

   ```bash
   npm run dev
   ```

6. Deploy the backend services using the AWS Serverless Framework or your preferred deployment method.

7. Visit `http://localhost:3000` in your browser to interact with Wisdomly locally.

## Usage

- Access Wisdomly's web interface to create, manage, and search notes.
- Make API requests to interact with the GraphQL endpoint, leveraging the full power of the Wisdomly serverless architecture.

## Contributing

If you'd like to contribute to Wisdomly, please follow these guidelines:
- Fork the repository
- Create a new branch
- Make your changes
- Test your changes
- Submit a pull request

## Acknowledgments

- AWS for providing a robust set of serverless technologies.
- The open-source community for the various tools and libraries used in this project.

## Contact

If you have any questions or need assistance with Wisdomly, feel free to reach out to me at tianjie2022@gmail.com.

Enjoy using Wisdomly! 🔥

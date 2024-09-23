# Nodemailer Email Sending API

This is a simple Node.js application using **Express** and **Nodemailer** to send emails. It supports CORS requests from a front-end application, allowing for easy integration into web projects.

## Technologies Used

- **Express**: Web framework for Node.js.
- **Nodemailer**: Module for sending emails.
- **CORS**: Middleware to allow cross-origin requests.
- **Body-Parser**: Middleware to parse incoming request bodies.
- **dotenv**: Module to load environment variables.

## Prerequisites

- Node.js installed on your machine.
- A Gmail account (or other email service) for sending emails.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MasterBhuvnesh/mail_server.git
   cd mail_server
   ```

2. **Install dependencies::**

   ```bash
   npm install express nodemailer cors body-parser dotenv
   ```

3. **Create a `.env` file in the root directory and add your email credentials:**

```bash
USER=your-email@gmail.com
PASS=your-email-password
```

4. **Run the server:**

```bash
node server.js
```

The server will start on port 5000 or the port specified in your `.env` file.

## API Endpoints

### POST `/send-email`

Sends an email based on the payload provided.

**Request Body**:

```json
{
  "name": "John Doe",
  "email": "recipient@example.com",
  "text_p": "This is a test message."
}
```

**Response**:

- **200 OK**: Email sent successfully.
- **500 Internal Server Error**: There was an error sending the email.

## License

**This project is licensed under the MIT License.**

This will guide users on how to install, configure, and use the email-sending API effectively.

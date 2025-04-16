## API Routes

### Authentication Routes

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in a user and return a JWT.
- `POST /api/auth/logout`: Log out a user.

### User Routes

- `GET /api/users`: Get a list of all users (admin only).
- `GET /api/users/:id`: Get details of a specific user.
- `PUT /api/users/:id`: Update user information.
- `DELETE /api/users/:id`: Delete a user (admin only).

### Course Routes

- `GET /api/courses`: Get a list of all courses.
- `GET /api/courses/:id`: Get details of a specific course.
- `POST /api/courses`: Create a new course (admin only).
- `PUT /api/courses/:id`: Update course details (admin only).
- `DELETE /api/courses/:id`: Delete a course (admin only).

### Enrollment Routes

- `POST /api/enrollments`: Enroll a user in a course.
- `GET /api/enrollments/:userId`: Get all enrollments for a user.
- `DELETE /api/enrollments/:id`: Remove a user from a course.

## Middlewares

- **Authentication Middleware**: Verifies JWT tokens for protected routes.
- **Validation Middleware**: Validates request payloads using `express-validator`.
- **Error Handling Middleware**: Handles errors and sends appropriate responses.

## Controllers

- **AuthController**: Handles user registration, login, and logout.
- **UserController**: Manages user-related operations.
- **CourseController**: Handles course creation, updates, and deletion.
- **EnrollmentController**: Manages user enrollments in courses.

## Topics Covered

- RESTful API design
- Authentication and authorization
- Database modeling with Mongoose
- Middleware for request validation and error handling
- Modular and scalable architecture

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/LMS.git
   ```

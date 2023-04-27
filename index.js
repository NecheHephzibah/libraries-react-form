/* Using External Libraries
Working with forms

Task:
Create a Contact Us form that allows users to send you a message to make inquiries. The form should have the following fields:
Name (required)
Email (required and should be validated)
Subject (optional)
Message (required)
Product Requirements 
The name, email, and message fields are required. If fields are empty, display errors under each field
The email field should be validated as an email. If the email entered is invalid, display an appropriate error under the email field.
On successful submission, display a message at the top of your form indicating that the submission was successful.
On successful submission, the form fields should be reset.
If there is an error during the submission, display an error message at the top of the form informing the user that the submission wasn’t successful.
Technical Requirements
The form should be built using React
You can use component libraries (MUI, ChakraUI, React-bootstrap) to build your form if you desire.
You can choose to implement your form using third-party libraries like Formik if you desire.
You can use Axios or fetch() for this assignment to post the form data to the API
Optional Requirements
On clicking on submit, add a loading indicator in the button to show that the form is submitting

Resources
Here is the API endpoint to send the user’s data to:
https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries

The data to post to the API endpoint should be in this format:
{
    "id": 3,
    "name": "Tun Oje",
    "email": "test2@test.com",
    "subject": "test2 subject",
    "message": "test2 message"
}

where
id - is the unique id for the data being posted. Use a third-party library like nanoid to generate this random id
name - is the name of the user
email - is the email of the user
subject - is the subject of the inquiry 
message - is the content of the inquiry

Please note:
Your work should not be in the main branch but in a separate branch with your chosen name.
On completing the implementation, create a pull request (PR) pointing your working branch to the main branch.
Get your mentor’s GitHub username and add him/her/them as your reviewer.
What to submit in Citrone
Submit the PR link
Host your work on Netlify/Github Pages and submit the hosted link
Useful Resources 
https://blog.logrocket.com/how-to-use-axios-post-requests/
https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
 */












/*To create a Contact Us form with the mentioned requirements, we can start by 
creating a React component that includes the necessary form fields and 
validation. We can use a form library like Formik to make the form-building 
process easier and faster.

Here's an example of how we can create the Contact Us form component:

javascript
Copy code*/
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios.post("/api/contact", values)
      .then(() => {
        alert("Message sent successfully!");
        resetForm();
      })
      .catch(() => {
        alert("Something went wrong. Please try again later.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" placeholder="Enter your name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <Field
                id="subject"
                name="subject"
                placeholder="Enter the subject of your message"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <Field
                id="message"
                name="message"
                as="textarea"
                rows="5"
                placeholder="Enter your message"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="error"
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
/*In the above code, we have used the Formik component from the Formik 
library to wrap our form. The initialValues object contains the initial values 
of our form fields. The validationSchema object contains the validation rules 
for our form fields.

The handleSubmit function is called when the form is submitted. 
It sends a POST request to our server's /api/contact endpoint with the form 
data. If the submission is successful, the function resets the form and 
displays a success message. If the submission fails, the function displays 
an error message.

The Field component is used to render each form field. We have also used 
the ErrorMessage component from Formik to display error messages for each 
field if it fails validation.

Finally, we have added a submit button that is disabled when the form
 is submitting*/










 /* " Please note:
Your work should not be in the main branch but in a separate branch with your chosen name.
On completing the implementation, create a pull request (PR) pointing your working branch to the main branch.
Get your mentor’s GitHub username and add him/her/them as your reviewer.
What to submit in Citrone
Submit the PR link
Host your work on Netlify/Github Pages and submit the hosted link "  how do i go about this?
Sure, here are the steps you can follow:

First, clone the repository on your local machine using git clone <repository_url> command.

Create a new branch with your chosen name using git checkout -b <branch_name> command. This will create a new branch and switch you to it.

Implement the Contact Us form with the required fields as described in the task.

Once you have completed the implementation and tested it locally, commit your changes to your working branch using the git add and git commit commands.

Push your changes to the remote repository using git push origin <branch_name> command. This will push your changes to your working branch.

Create a pull request (PR) pointing your working branch to the main branch using the GitHub web interface. Make sure to add your mentor as a reviewer.

Once the PR is reviewed and merged, deploy your app to either Netlify or GitHub Pages.

Submit the PR link and hosted link in Citrone as required.

I hope this helps! Let me know if you have any further questions.





chinecherem Onovo
" Implement the Contact Us form with the required fields as described in the task " how do i do this?
Sure, here are the steps to implement the Contact Us form with the required fields as described in the task:

In your React app, create a new component named ContactUsForm.

Inside the ContactUsForm component, create a form element with an onSubmit event handler that will handle the form submission.

Add the following fields to the form: Name, Email, Message, and Subject.

Set the required attribute on the Name, Email, and Message fields to make them required fields.

Validate the Email field using a regular expression or a third-party library like validator.js.

Add error messages under each field if the field is left empty or if the Email field is invalid.

Add a Submit button to the form.

Handle the form submission in the onSubmit event handler by preventing the default behavior, validating the form fields, and submitting the form data to the API using axios or fetch().

Display a success message at the top of the form if the form submission is successful, and reset the form fields.

Display an error message at the top of the form if there is an error during the submission.

You can use a UI library like Material-UI, ChakraUI, or React-Bootstrap to style your form and make it look more professional.

I hope this helps! Let me know if you have any further questions. 









"Create a pull request (PR) pointing your working branch to the main branch using the GitHub web interface. Make sure to add your mentor as a reviewer." how do i go about this?
Sure, here are the steps to create a pull request (PR) and add your mentor as a reviewer:

Commit and push your changes to your working branch on the remote repository.

Go to your repository on GitHub and switch to the working branch you just pushed.

Click on the "New pull request" button.

In the "Compare changes" section, select your working branch as the compare branch and the main branch as the base branch.

Review the changes that are being proposed in the pull request and make sure everything looks correct.

Add a title and a description for the pull request.

Click on the "Create pull request" button.

Once the pull request is created, click on the "Reviewers" button and add your mentor as a reviewer.

Wait for your mentor to review your code and leave any comments or feedback.

Once your mentor approves your code, merge the pull request into the main branch.

I hope this helps! Let me know if you have any further questions.









*/
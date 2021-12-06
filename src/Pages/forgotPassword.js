import { Form, Button } from 'semantic-ui-react';
import * as yup from 'yup';
import { useFormik } from "formik";
import { Link } from 'react-router-dom';
function ForgotPassword() {
 const ForgetPassSchema =
  yup.object({
   email: yup.string().email().required('Please enter your Email'),

  });

 const { handleChange, handleSubmit, handleBlur, errors, touched, values } = useFormik({

  initialValues: {
   email: ""
  },
  validationSchema: ForgetPassSchema,
  onSubmit: (values) => {
   console.log(values)
  }


 })
 const formStyles = {
  background: 'whitesmoke',
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
  width: "28rem",
  padding: "2rem",
  borderRadius: "1rem",
  margin: "0rem 1.5rem"
 }

 return (

  <section className="ForgetPasswordPage">
   <Form style={formStyles} onSubmit={handleSubmit}>
    <h3 style={{textAlign:"center"}}>Forgot Password</h3>
    <Form.Input onChange={handleChange} onBlur={handleBlur} value={values.email}
     error={errors.email && touched.email && errors.email}
     fluid
     label='Email'
     placeholder='Email'
     id='email'
     name="email"
     type="text"
    />
    <div className="signin">
     <Button type="submit" inverted color='red'>Send Mail</Button>
    </div>
    <section className="FormAction">
     <Link to="/login">Back to Login</Link>
    </section>
     <p><b>Note:</b>  Please enter your existing email address with us to receive password reset link</p>
   </Form>


  </section>
 )
}
export {ForgotPassword}
import { useFormik } from 'formik';
import Schema from './validations';

function SignUp() {
    const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: 'asd@gmail.com',
            password: '',
            confirmPassword: '',
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Schema,
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {errors.email && touched.email && <div>{errors.email}</div>}
                {/* buradaki && işareti varsa demek */}
                <br />
                <br />
                <label>Password</label>
                <input type='password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                {errors.password && touched.password && <div>{errors.password}</div>}
                <br />
                <br />
                <label >Confirm Password</label>
                <input type='password' name='confirmPassword' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                {errors.confirmPassword && touched.confirmPassword && <div>{errors.confirmPassword}</div>}
                <br />
                <br />
                <button type="submit">Submit</button>

                <br />
                {
                    JSON.stringify(values)
                }
            </form>


        </div>
    )
}

export default SignUp
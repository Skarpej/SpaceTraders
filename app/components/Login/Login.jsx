export default function Login() {
    return (
        <div>
            <Form className='login-box' method="post">
                <p className='login-box__header'>Create a new Corporation</p>
                <input name="username" required maxLength={15} type='text'/>
                <br/>
                <button className='login-box__button' type="submit">Register</button>
            </Form>
        </div>
    );
}
const Login = () => {
    const handleSubmit = (event) => {};

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" required />
                <input type="password" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;

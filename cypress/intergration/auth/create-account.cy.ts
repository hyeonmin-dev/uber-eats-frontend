describe('Create Account', () => {
    const user = cy;
    it('should see email / password validation errors', () => {
        user.visit('/');
        user.findByText(/create an account/i).click();
        //user.findByPlaceholderText(/email/i).type("non@good");
        //user.findByRole("alert").should("have.text", "Please enter a valid email");
        user.findByPlaceholderText(/email/i).type("a").clear();
        user.findByRole("alert").should("have.text", "Email is required");
        user.findByPlaceholderText(/email/i).type("real@mail.com");
        user.findByPlaceholderText(/password/i).type("a").clear();
        user.findByRole("alert").should("have.text", "Password is required");
    });

    it('should be able to create account and log in', () => {
        user.intercept("http://localhost:4000/graphql", (req) => {
            const { operationName } = req.body;
            if (operationName && operationName === "createAccountMutation") {
                req.reply((res) => {
                    res.send({
                        fixture: "auth/create-account.json"
                    })
                })
            }
        });
        user.visit('/signup');
        user.findByPlaceholderText(/email/i).type("e2e@mail.com");
        user.findByPlaceholderText(/password/i).type("e2e0000");
        user.findByRole("button").click();
        user.wait(1000);
        // @ts-ignore
        user.login("e2e@mail.com", "e2e0000");
    })
})
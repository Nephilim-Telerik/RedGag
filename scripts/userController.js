function UserController() {
    function register() {
        const auth = firebase.auth();

        var registerTemplate = `
            <div id="register-form">
                <p class="control-label"><h3>Register</h3></p>
                <br>
                <label for="email" class="control-label col-sm-2">Email:</label>
                <br>
                <input type="text" placeholder="Enter Email" id="email-field" class="form-control">
                <br>
                <label for="password" class="control-label col-sm-2">Password:</label>
                <br>
                <input type="password" placeholder="Enter Password" id="password-field" class="form-control">
                <br>
                <br>
                <button type="button" class="btn btn-primary" id="register-btn">Register</button>
             </div>  
        `;
        $('#master-container').html(registerTemplate);

        const emailField = $('#email-field');
        const passwordField = $('#password-field');
        const registerBtn = $('#register-btn');

        registerBtn.click(function() {
            const email = emailField.val();
            const password = passwordField.val();

            const promise = auth.createUserWithEmailAndPassword(email, password);
            promise.then(() => window.location = '');
            promise.catch(ex => {
                $(`
                    <div class="alert alert-warning alert-dismissable">
                        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <p><strong>Warning!</strong></p>
                        <p>Email is invalid or</p>
                        <p>such a user already exists.</p>
                        <p>Please, try again.</p>
                    </div>
                `).insertAfter('#email-field');
            });
        });
    }

    function login() {
        const auth = firebase.auth();

        var loginTemplate = `
            <div id="login-form">
                <p class="control-label"><h3>Log in</h3></p>
                <br>
                <label for="email" class="control-label col-sm-2">Email:</label>
                <br>
                <input type="text" placeholder="Enter Email" id="email-field" class="form-control">
                <br>
                <label for="password" class="control-label col-sm-2">Password:</label>
                <br>
                <input type="password" placeholder="Enter Password" id="password-field" class="form-control">
                <br>
                <br>
                <button type="button" class="btn btn-primary" id="login-btn">Log in</button>
             </div>  
        `;
        $('#master-container').html(loginTemplate);

        const emailField = $('#email-field');
        const passwordField = $('#password-field');
        const loginBtn = $('#login-btn');

        loginBtn.click(function() {
            const email = emailField.val();
            const password = passwordField.val();

            const promise = auth.signInWithEmailAndPassword(email, password);
            promise.then(() => window.location = '');
            promise.catch(ex => {
                $(`
                    <div class="alert alert-warning alert-dismissable">
                        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <p><strong>Warning!</strong></p>
                        <p>Email or Password are not valid.</p>
                        <p>Please, try again.</p>
                    </div>
                `).insertAfter('#email-field');
            });
        });
    }

    function logout() {
        firebase.auth().signOut();
    }

    firebase.auth().onAuthStateChanged((firebaseUser) => {
        if(firebaseUser) {
            $('#login').hide();
            $('#register').hide();
            $('#logout').show();
        }
        else {
            $('#login').show();
            $('#register').show();
            $('#logout').hide();                    
        }
    });

    return {
        register: register,
        login: login,
        logout: logout
    };
}

export { UserController };
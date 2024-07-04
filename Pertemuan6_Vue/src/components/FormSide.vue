<template>
  <div class="form-container">
    <div class="form-wrapper">
      <div class="signUp-container">
        <img
          width="50"
          height="30"
          src="../Asset/Logo Twitter.svg"
          alt="Twitter Logo"
        />
        <p class="sign-up">
          Don't have an account? <a href="#" target="_self">Sign Up</a>
        </p>
      </div>
      <form class="form-login">
        <h1>Log in to Twitter</h1>
        <h3>Enter Twitter Account</h3>
        <label for="username"></label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Phone, email or username"
        />
        <label for="password"></label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <a href="#" target="_self" class="forget-password">Forget password ?</a>
        <div class="button-group">
          <button class="login" type="submit">Sign In</button>
          <p>or</p>
          <div class="sign-with">
            <button class="btn-with google">
              <img
                src="../Asset/Logo Google.svg"
                width="25"
                height="25"
                alt="Google Logo"
              />
              Sign in with Google
            </button>
            <button class="btn-with apple">
              <img
                src="../Asset/Logo Apple.svg"
                width="25"
                height="25"
                alt="Apple Logo"
              />
              Sign in with Apple
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 15px;
}

.form-wrapper {
  padding: 0 140px 0 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.signUp-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.signUp-container p {
  font-size: 13px;
}

.sign-up a {
  color: #1e9cf1;
  font-weight: 700;
  text-decoration: none;
}

.sign-up a:hover {
  color: #1e87f1;
}

/* form */
.form-login {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.form-login h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
}

.form-login h3 {
  color: #757575;
  font-size: 14px;
  font-weight: 600;
}
label {
  width: 100%;
}

input {
  padding: 20px 15px;
  color: #757575;
  background-color: #eeeeee;
  border: none;
  border-radius: 2px;
  font-size: 11px;
}
input:focus {
  outline: none; /* Menghilangkan garis tepi (outline) */
  border: none; /* Menghilangkan border */
}
.form-login .forget-password {
  text-align: right;
  color: #191d23;
  font-weight: 500;
  text-decoration: none;
  font-size: 12px;
}

/* button */
.button-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  text-align: center;
}

.button-group p {
  margin: 5px 0;
}

.login {
  background-color: #1e9cf1;
  padding: 20px 15px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  color: white;
}

.login:hover {
  background-color: #1e87f1;
}

.sign-with {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.btn-with {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px 2px;
  border-radius: 4px;
  gap: 4px;
  font-size: 11px;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.sign-with .google {
  width: 100%;
  border: none;
  background-color: #eeeeee;
}
.sign-with .apple {
  border: none;
  width: 100%;
  background-color: #191d23;
  color: white;
}
.sign-with .google:hover {
  scale: 1.1;
}
.sign-with .apple:hover {
  scale: 1.1;
}
</style>

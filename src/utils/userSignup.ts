export const userSignup = async (
  email: string,
  password: string
): Promise<{
  status?: boolean;
  type: string;
  err: string;
}> => {
  const response = inputValidation(email, password);
  if (!response.status) {
    console.log("### inavliddddddddd #####");
    return {
      type: response.type,
      err: response.err,
    };
  } else {
    const response = await fetch("http://localhost:8081/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: email,
        userPassword: password,
      }),
    });

    const resJson = await response.json();
    // console.log(resJson.status);
    if (resJson.status) {
      console.log("## user signedup ##");
      return {
        status: true,
        type: "signup successfull",
        err: resJson.detail.message,
      };
    } else {
      return {
        type: "email",
        err: "user Already exist",
      };
    }
  }
};

function inputValidation(
  email: string,
  password: string
): {
  status: boolean;
  type: string;
  err: string;
} {
  const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/;
  const smRegex = /[a-z]/;
  const cpRegex = /[A-Z]/;
  const numRegex = /[0-9]/;
  const charRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

  switch (true) {
    case !emailRegex.test(email):
      return {
        status: false,
        type: "email",
        err: "invalid Email",
      };

    case password.length < 9:
      return {
        status: false,
        type: "password",
        err: "Password should be 9 character",
      };

    case !smRegex.test(password):
      return {
        status: false,
        type: "password",
        err: "password must contain small letter ",
      };
    case !cpRegex.test(password):
      return {
        status: false,
        type: "password",
        err: "password must contain capital letter ",
      };
    case !numRegex.test(password):
      return {
        status: false,
        type: "password",
        err: "password must contain a number",
      };
    case !charRegex.test(password):
      return {
        status: false,
        type: "password",
        err: "password must contain a special character ",
      };

    default:
      return {
        status: true,
        type: "none",
        err: "none",
      };
  }
}

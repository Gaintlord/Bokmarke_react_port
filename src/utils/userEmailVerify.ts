export const UserEmailVerify = async (email: string, otp: string) => {
  if (otp.length == 6) {
    const query = new URLSearchParams({
      userEmail: email,
      otp: otp,
    });

    const response = await fetch(
      `http://localhost:8081/api/v1/email-verify?${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const jsonRes = await response.json();
    console.log(jsonRes);
    if (jsonRes.status == true) {
    } else {
      return {
        err: jsonRes.message,
      };
    }
  } else {
    return {
      err: "invalid otp",
    };
  }
};

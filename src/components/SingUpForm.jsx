import CustomInput from "./CustomInput";
import { useActionState, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import SubmitFormButton from "./SubmitFormButton";

export default function SingUpForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const egyptPhoneRegex = /^01[0125][0-9]{8}$/;
  async function singUpAction(prevState, formData) {
    const firstName = formData.get("first_name");
    const lastName = formData.get("last_name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");

    let errors = {
      firstNameError: null,
      lastNameError: null,
      emailError: null,
      passwordError: null,
      phoneError: null,
    };
    if (firstName.trim() === "") {
      errors.firstNameError = "first name is required";
    }

    if (lastName.trim() === "") {
      errors.lastNameError = "last name is required";
    }

    if (!emailRegex.test(email.trim())) {
      errors.emailError = "invalid email";
    }

    if (password.trim().length < 8) {
      errors.passwordError = "password must have 8 char atleast";
    }

    if (!egyptPhoneRegex.test(phone.trim())) {
      errors.phoneError = "put a egyptian number";
    }

    if (
      errors.firstNameError ||
      errors.lastNameError ||
      errors.emailError ||
      errors.passwordError ||
      errors.phoneError
    ) {
      return {
        errors,
        savedValues: {
          firstName,
          lastName,
          email,
          password,
          phone,
        },
      };
    }
    
    return await axios
      .post(
        `https://depi-s-gp-backend-production.up.railway.app/api/auth/register`,
        {
          email,
          password,
          first_name: firstName,
          last_name: lastName,
          phone,
        },
      )
      .then((data) => {
        navigate("/sign-in");
        return {
          errors: null,
        };
      })
      .catch((err) => {
        setErrorMessage(err.response.data.error);
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
        return {
          errors: null,
          savedValues: {
            firstName,
            lastName,
            email,
            password,
            phone,
          },
        };
      });
  }

  const [formState, formAction] = useActionState(singUpAction, {
    errors: null,
  });

  return (
    <form action={formAction}>
      {errorMessage && (
        <div className="border border-red-300 bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm mb-4">
          {errorMessage}
        </div>
      )}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <CustomInput
            id={"firstname"}
            label={"FIRST NAME"}
            type={"text"}
            name="first_name"
            placeholder="Mohamed"
            defaultValue={formState?.savedValues?.firstName}
            errorMessage={formState?.errors && formState.errors.firstNameError}
          />
          <CustomInput
            id={"lastname"}
            label={"LAST NAME"}
            type={"text"}
            name="last_name"
            placeholder="Abdelhalem"
            defaultValue={formState?.savedValues?.lastName}
            errorMessage={formState?.errors && formState.errors.lastNameError}
          />
        </div>
        <CustomInput
          id={"email"}
          label={"EMAIL ADDRESS"}
          type={"email"}
          name="email"
          placeholder="3ab7alim@gmail.com"
          defaultValue={formState?.savedValues?.email}
          errorMessage={formState?.errors && formState.errors.emailError}
        />
        <CustomInput
          id={"phone"}
          label={"YOUR PHONE"}
          type={"number"}
          name="phone"
          placeholder="01013625625"
          defaultValue={formState?.savedValues?.phone}
          errorMessage={formState?.errors && formState.errors.phoneError}
        />
        <CustomInput
          id={"password"}
          label={"PASSWORD"}
          type={"password"}
          name="password"
          defaultValue={formState?.savedValues?.password}
          errorMessage={formState?.errors && formState.errors.passwordError}
        />
      </div>

      <SubmitFormButton tempTitle='CREATING' tile='CREATE ACCOUNT' />
    </form>
  );
}

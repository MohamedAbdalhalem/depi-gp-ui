import { useActionState, useState } from "react";
import CustomInput from "./CustomInput";
import SubmitFormButton from "./SubmitFormButton";
import { useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../store/AuthContext";
import { use } from "react";

export default function SingInForm() {
  const {setToken} = use(AuthContext)
  const [errorMessage, setErrorMessage] = useState(false)
  const navigate = useNavigate()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  async function singInAction(prevState,formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    const errors = {
      emailError: null,
      passwordError: null
    }

    if (!emailRegex.test(email.trim())) {
      errors.emailError = 'invalid email'
    }

    if (password.trim().length < 8) {
      errors.passwordError = 'invalid password'
    }

    if (errors.emailError || errors.passwordError) {
      return {
        errors, 
        savedValues: {
          email,
          password
        }
      }
    }
    
    return await axios.post('https://depi-s-gp-backend-production.up.railway.app/api/auth/login', {
      email,
      password
    }).then(data => {
      localStorage.setItem('tkn', data.data.token)
      navigate('/')
      setToken(data.data.token)
      return { errors : null }
    }).catch(err => {
      setErrorMessage(true)
      console.log(err.response.data)
      setTimeout(() => {
        setErrorMessage(false)
      },3000)
      return {
        error : null,
        savedValues: {
          email,
          password
        }
      } 
    })

    return { errors : null }
  }

  const [formState,formAction] = useActionState(singInAction,{errors : null})
  return (
    <form action={formAction}>
      {errorMessage && (
        <div className="border border-red-300 bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm mb-4">
          Invalid Password or Email
        </div>
      )}
      <div className="space-y-4">
        <CustomInput
          id={"email"}
          label={"EMAIL ADDRESS"}
          type={"text"}
          name="email"
          placeholder='mohamed3ab7alim@gmail.com'
          defaultValue={formState?.savedValues?.email}
          errorMessage={formState.errors && formState.errors.emailError}
        />
        <CustomInput
          id={"password"}
          label={"PASSWORD"}
          type={"password"}
          name="password"
          defaultValue={formState?.savedValues?.password}
          errorMessage={formState.errors && formState.errors.passwordError}
        />
      </div>
      <SubmitFormButton tempTitle="SINGING..." tile='SING IN'/>
    </form>
  );
}

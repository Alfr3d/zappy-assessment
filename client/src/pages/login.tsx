import React from "react";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export function validateIsEmail(email : string) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export default function Login() {
  const { handleSubmit, register, errors } = useForm();
  const router = useRouter();
  const onSubmit = (data: any) => {
    if (validateIsEmail(data.email_address)) {
      console.log(`Name and Email input value: ${data.first_name}  ${data.email_address} `);
      router.push('/users');
    } else {
      console.log("Invalid email");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Nome</label>
              <input type="text"
                     name="first_name"
                     id="first_name"
                     autoComplete="given-name"
                     placeholder="Nome"
                     ref={register({ required: true })}
                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              {errors.first_name && <span>The name is required</span>}
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="text"
                     name="email_address"
                     id="email_address"
                     placeholder="Email"
                     ref={register({
                       required: true,
                       pattern: {
                         value: /\w+@\w+\.com/gi,
                         message: 'Invalid e-mail',
                       } })}
                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              {errors.email_address && <span>The email is required</span>}
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Avanti
          </button>
        </div>
      </div>
    </form>
  );
}

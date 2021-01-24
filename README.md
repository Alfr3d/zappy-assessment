# zappy-assessment
Frontend Assessment

# tech stack
- yarn
- nextjs
- typescript
- tailwindcss
- [sass](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support)

## typescript next.js example 
`yarn create next-app --example with-typescript with-typescript-app`
https://github.com/vercel/next.js/tree/canary/examples/with-typescript

## tailwindcss next.js example
`yarn create next-app --example with-tailwindcss with-tailwindcss-app`
https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss

## tailwindcss in a next.js projects
- [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
- [Using Tailwind CSS in a Next.js project](https://thesmallthings.dev/blog/tailwind-nextjs)
- [Next.js - TS Custom App](https://nextjs.org/docs/basic-features/typescript#custom-app)
- [Next.js - Adding a Global Stylesheet](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet)
- [Next.js - Absolute Imports and Module path aliases](https://nextjs.org/docs/advanced-features/module-path-aliases)


# 1. Define a solid content model
Let's first think about what we're going to need

Each page will have an associated *Form* model.
We'll pick 2 form field types:
- Input
- Checkbox

## Models

### Page
- Title, String, Single line text, Required, and used as a Title
- Form, Reference to Form

### Form
- Page, Reference, Accepts multiple Page values
- Fields, Reference, Accepts multiple FormInput, FormTextarea, FormSelect and FormCheckbox values

### FormInput
- Name, String
- Type, Enum, FormInputType
- Label, String
- Placeholder, String
- Required, Boolean
- Form, Reference to Form

### FormCheckbox
- Name, String
- Label, String, Required
- Required, Boolean
- Form, Reference to Form

## Enumerations

### FormInputType values

- EMAIL
- TEXT
- DATE

# 2. Create an example Page and Form with Fields

## FormInput's

- Name
    - Name: name
    - Type: TEXT
    - Label: Name
    - Placeholder: Nome
    - Required: true

- Email
    - Name: email
    - Type: EMAIL
    - Label: Email
    - Placeholder: Email
    - Required: true

## FormInput's (read-only)

- Date 
    - Name: day_of_week
    - Type: DATE [(ddd DD/MM/YYYY)](https://momentjs.com/docs/#/displaying/)
    - Label: Date
    - Required: true

## FormCheckbox

- Hours of
    - Name: hour
    - Label: [HH](https://momentjs.com/docs/#/displaying/) 
    - Required: true 

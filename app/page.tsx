"use client"
import { UserForm } from "@/components/user-form"
import { UserFormValues } from "@/lib/schema"

export default function Home() {
  const handleFormSubmit = (data: UserFormValues) => {
    console.log("Form submitted with data:", data)
    // Here you can handle the form submission, e.g., send data to an API
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md">
        <h1 className="mb-4 text-2xl font-bold">User Registration</h1>
        <UserForm onSubmit={handleFormSubmit} />
      </div>
    </main>
  )
}


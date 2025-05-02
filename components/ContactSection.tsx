"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styles from "./ContactSection.module.css";
import toast, { Toaster } from "react-hot-toast";

interface ContactFormInputs {
  email: string;
  name: string;
  message: string;
}

const ContactSection = (props: { id: string }) => {
  const formSchema = Yup.object({
    name: Yup.string().required("Please enter your name."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Please enter your email."),
    message: Yup.string().required("Please enter your message."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      if (!data.name || !data.email || !data.message) {
        console.error("Missing fields in form data:", data);
        return;
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json();
        if (responseData) toast.success("Message sent successfully!");

        reset();
      } else {
        toast.error("Error sending email");
      }
    } catch (error: any) {
      toast.error(`Error sending email: ${error} `);
    }
  };

  return (
    <section className={styles.contact}  id={props.id}>
      <Toaster />
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.description}>
        I'm open to new opportunities, collaborations, and projects. Feel free
        to reach out to me to discuss your ideas.
      </p>
      <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="John Smith"
          {...register("name")}
          className={errors.name ? styles.inputError : ""}
        />
        {errors.name && (
          <p className={styles.errorMessage}>{errors.name.message}</p>
        )}

        <input
          type="email"
          placeholder="john@gmail.com"
          {...register("email")}
          className={errors.email ? styles.inputError : ""}
        />
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}

        <textarea
          placeholder="Your Message"
          {...register("message")}
          className={errors.message ? styles.inputError : ""}
        ></textarea>
        {errors.message && (
          <p className={styles.errorMessage}>{errors.message.message}</p>
        )}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactSection;

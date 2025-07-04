import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const useContactForm = () => {
  const t = useTranslations("Contact");

  const [values, setValues] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!values.firstName.trim()) newErrors.firstName = t("firstNameRequired");
    if (!values.lastName.trim()) newErrors.lastName = t("lastNameRequired");

    if (!values.email.trim()) {
      newErrors.email = t("emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = t("invalidEmail");
    } else if (
      values.email.endsWith("@gmail.com") ||
      values.email.endsWith("@yahoo.com")
    ) {
      newErrors.email = t("corporateEmailRequired");
    }

    if (!values.phone.trim()) {
      newErrors.phone = t("phoneRequired");
    } else if (
      !/^[\+]?[0-9][\d]{0,15}$/.test(values.phone.replace(/[\s\-\(\)]/g, ""))
    ) {
      newErrors.phone = t("invalidPhone");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          phone: values.phone,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setIsSubmitted(true);
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    reset: () => setIsSubmitted(false),
  };
};

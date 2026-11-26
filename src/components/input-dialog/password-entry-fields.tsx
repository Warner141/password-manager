import { useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "../ui/field";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { EyeClosed, Eye } from "lucide-react";
import "tailwindcss";
import "..../index.css";

export function PasswordEntryFields() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FieldSet>
      <FieldDescription></FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="title">Title</FieldLabel>
          <Input id="title" placeholder="Example Website" />
        </Field>
        <Field>
          <FieldLabel htmlFor="site">Site</FieldLabel>
          <Input id="site" placeholder="https://example.com" type="url  " />
        </Field>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" autoComplete="username" />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" autoComplete="email" type="email" />
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
          <Input
            id="phone"
            autoComplete="phoneNumber"
            placeholder="123 456 7890"
          />
        </Field>
        <Field orientation="responsive">
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            autoComplete="password"
            placeholder="••••••••••"
            type={showPassword ? "password" : "text"}
          />
          <Button
            className="w-lg"
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
          >
            {showPassword ? <EyeClosed /> : <Eye />}
          </Button>
        </Field>
        <Field orientation="horizontal">
          <Switch id="newsletter" />
          <FieldLabel htmlFor="newsletter">
            Subscribe to the newsletter
          </FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}

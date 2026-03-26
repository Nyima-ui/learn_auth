"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Signup() {
  const [mode, setMode] = useState<"signup" | "login">("signup");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className="flex items-center min-h-screen">
      <div className="w-full max-w-sm mx-auto -translate-y-15">
        <div className="flex gap-1 bg-muted p-1 rounded-lg mb-6">
          <Button
            type="button"
            variant={mode === "signup" ? "default" : "ghost"}
            className="flex-1"
            onClick={() => setMode("signup")}
          >
            Sign up
          </Button>
          <Button
            type="button"
            variant={mode === "login" ? "default" : "ghost"}
            className="flex-1"
            onClick={() => setMode("login")}
          >
            Log in
          </Button>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium">
            {mode === "signup" ? "Create an account" : "Welcome back"}
          </h2>
          <p className="text-sm text-muted-foreground">
            {mode === "signup"
              ? "Enter your email and password to get started"
              : "Log in to your account"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          {mode === "signup" && (
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="confirm">Confirm password</Label>
              <Input
                id="confirm"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
          )}

          <Button type="submit" className="w-full mt-1 cursor-pointer">
            {mode === "signup" ? "Create account" : "Log in"}
          </Button>
        </form>
      </div>
    </div>
  );
}

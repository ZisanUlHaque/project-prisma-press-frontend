"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  return (
    <form className="space-y-4">
        <Card className="p-5 space-y-4">
            <Input name="email" type="email" placeholder="Enter your Email" required></Input>
            <Input name="password" type="password" placeholder="Enter your Password" required></Input>
            <Button type="submit">
                Login
            </Button>
        </Card>
    </form>
  )
};

export default LoginForm;

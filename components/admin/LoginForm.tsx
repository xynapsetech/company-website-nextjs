"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../ui/use-toast";
import { formSchema } from "@/validators/adminLoginValidation";
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Input = z.infer<typeof formSchema>;

export default function LoginForm() {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<Input>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: Input) {
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        toast({
          variant: "failureVariant",
          title: "Something went wrong!",
          description: `${res?.error}`,
        });
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
      toast({
        variant: "failureVariant",
        title: "Something went wrong!",
        description: `${error}`,
      });
    }
  }

  return (
    <Card className="w-1/3">
      <CardHeader>
        <CardTitle className="font-medium text-center">Admin Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-7">
              {/* email */}
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Password */}
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  variant="blueBg"
                  className="w-[160px] justify-center font-normal"
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

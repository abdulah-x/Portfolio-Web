import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Create mailto link with form data
    const mailtoLink = `mailto:muhammad.abdullahds1@gmail.com?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setTimeout(() => {
      toast.success("Email client opened!", {
        description: "Please send the email from your email client.",
      });
      setIsSubmitting(false);
      form.reset();
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6 md:p-8">
        {/* Terminal-style header */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-xs text-muted-foreground ml-2">
            ~/contact $ send_message
          </span>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-xs text-primary uppercase tracking-wider">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        className="bg-background/50 border-primary/30 focus:border-primary font-mono text-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-mono text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-xs text-primary uppercase tracking-wider">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="bg-background/50 border-primary/30 focus:border-primary font-mono text-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-mono text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono text-xs text-primary uppercase tracking-wider">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Project Collaboration"
                      className="bg-background/50 border-primary/30 focus:border-primary font-mono text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-mono text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono text-xs text-primary uppercase tracking-wider">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me about your project or idea..."
                      className="bg-background/50 border-primary/30 focus:border-primary font-mono text-sm min-h-[120px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-mono text-xs" />
                </FormItem>
              )}
            />

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gap-2 font-mono text-sm bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    SENDING...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    SEND_MESSAGE
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

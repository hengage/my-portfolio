
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "emailjs-com";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
        to_email: "henrychizobaudeh@gmail.com"
      };
      
      await emailjs.send(
        "service_id", // Replace with your EmailJS service ID
        "template_id", // Replace with your EmailJS template ID
        templateParams,
        "public_key" // Replace with your EmailJS public key
      );
      
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you shortly.",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <h2 className="text-2xl font-medium mb-6">Send Me a Message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formState.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formState.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
              placeholder="Your email"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formState.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
            placeholder="Subject of your message"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formState.message}
            onChange={handleInputChange}
            rows={6}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors resize-none"
            placeholder="Your message"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:pointer-events-none"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

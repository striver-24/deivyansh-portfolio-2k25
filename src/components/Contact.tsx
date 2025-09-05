import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSending(true);

      // EmailJS configuration (as per instructions)
      const publicKey = "tAMFJzdW-jRHXi4Va";
      const templateId = "template_fdwbkmj";

      // Note: You also need your service ID from EmailJS dashboard.
      // Using the provided service ID for this project.
      const serviceId = "service_c1va2mb";

      // Prepare template params. Ensure your EmailJS template uses these variable names.
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      } as Record<string, string>;

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error", error);
      toast({
        title: "Failed to send",
        description: "There was a problem sending your message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "deivyanshs@gmail.com",
      href: "mailto:deivyanshs@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91-7737826639",
      href: "tel:+91-7737826639"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "New Delhi, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-surface border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-text-primary">
                  Send me a message
                </h3>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-surface-elevated border-border/50 focus:border-primary/50 text-text-primary placeholder:text-text-muted"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-surface-elevated border-border/50 focus:border-primary/50 text-text-primary placeholder:text-text-muted"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Your message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-surface-elevated border-border/50 focus:border-primary/50 text-text-primary placeholder:text-text-muted resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth shadow-glow/50 hover:shadow-glow disabled:opacity-70"
                  >
                    <Send size={16} className="mr-2" />
                    {isSending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-text-primary">
                  Get in touch
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Feel free to reach out through any of the channels below. 
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a friendly chat about technology and design.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-surface border border-border/50 hover:bg-surface-elevated hover:border-primary/20 transition-smooth group ${
                      info.href === "#" ? "pointer-events-none" : ""
                    }`}
                  >
                    <div className="text-primary group-hover:text-accent transition-smooth">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{info.label}</p>
                      <p className="text-text-secondary group-hover:text-primary transition-smooth">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Call to Action */}
              <div className="p-6 rounded-lg gradient-surface border border-primary/20">
                <h4 className="text-lg font-semibold mb-2 text-text-primary">
                  Ready to start a project?
                </h4>
                <p className="text-text-secondary text-sm mb-4">
                  Let's discuss your ideas and bring them to life.
                </p>
                <Button 
                  variant="outline"
                  asChild
                  className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-smooth"
                >
                  <a href="mailto:deivyansh@example.com">
                    Start a conversation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Plane, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Account created successfully!");
    navigate("/flights");
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <Plane className="h-8 w-8 text-secondary" />
            <span className="text-2xl font-display font-bold text-foreground">Fly High</span>
          </Link>
          <h1 className="text-3xl font-display font-bold text-foreground">Create account</h1>
          <p className="text-muted-foreground mt-2">Join Fly High and start exploring</p>
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} className="pl-10 h-12 bg-muted/50" />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10 h-12 bg-muted/50" />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10 h-12 bg-muted/50" />
            </div>
            <Button type="submit" className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base">
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/signin" className="text-secondary font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

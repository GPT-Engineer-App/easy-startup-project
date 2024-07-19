import { Heading } from "@/components/ui/heading";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Heading as="h1" className="text-4xl font-bold mb-4">Hello world!</Heading>
      <p className="text-lg text-muted-foreground">Welcome to our web application.</p>
    </div>
  );
};

export default Index;
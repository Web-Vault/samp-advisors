import { Container } from "@/components/ui/Container";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-20 bg-muted/30 min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto bg-white p-12 lg:p-20 border border-border shadow-sm">
          {children}
        </div>
      </Container>
    </div>
  );
}

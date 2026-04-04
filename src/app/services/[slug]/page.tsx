import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import { ServicePageLayout } from "@/components/layout/ServicePageLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <ServicePageLayout
      title={service.name}
      subtitle={service.shortDescription}
      description={service.description}
      whatWeHelpWith={service.whatWeHelpWith}
      whoItIsFor={service.whoItIsFor}
      approach={service.approach}
      benefits={service.benefits}
      icon={service.icon}
    />
  );
}
